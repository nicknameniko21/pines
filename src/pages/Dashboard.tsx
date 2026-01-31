import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { DashboardHeader } from "@/components/DashboardHeader";
import { FilterControls } from "@/components/FilterControls";
import { TokenCard } from "@/components/TokenCard";
import { LoadingState } from "@/components/LoadingState";
import { EmptyState, ErrorState } from "@/components/EmptyState";

export default function Dashboard() {
  const [filters, setFilters] = useState({
    sortBy: "volatility",
    timeframe: "24h",
    marketCap: "all",
    alphaOnly: false,
    searchTerm: ""
  });
  const [nextUpdate, setNextUpdate] = useState(60);
  const [updatingTokens, setUpdatingTokens] = useState(new Set());
  const [wsConnected, setWsConnected] = useState(false);
  
  const { data: tokens, isLoading, error, refetch } = useQuery({
    queryKey: ["/api/tokens"],
    refetchInterval: 60000
  });

  useEffect(() => {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const wsUrl = `${protocol}//${window.location.host}/ws`;
    const ws = new WebSocket(wsUrl);
    
    ws.onopen = () => {
      setWsConnected(true);
    };
    
    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        if (message.type === "update") {
          setUpdatingTokens(new Set(message.data?.updatedIds || []));
          refetch();
          setTimeout(() => setUpdatingTokens(new Set()), 300);
        }
      } catch (err) {
        console.error("WebSocket message error:", err);
      }
    };
    
    ws.onerror = () => {
      setWsConnected(false);
    };
    
    ws.onclose = () => {
      setWsConnected(false);
    };
    
    return () => {
      ws.close();
    };
  }, [refetch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextUpdate((prev) => {
        if (prev <= 1) {
          return 60;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getLastUpdated = useCallback(() => {
    const now = new Date();
    return now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  }, []);

  const filteredAndSortedTokens = tokens?.filter((token) => {
    if (filters.alphaOnly && !token.isAlpha) return false;
    if (filters.searchTerm) {
      const search = filters.searchTerm.toLowerCase();
      if (!token.symbol.toLowerCase().includes(search) && !token.name.toLowerCase().includes(search)) {
        return false;
      }
    }
    if (filters.marketCap !== "all") {
      const marketCapBillion = token.marketCap / 1e9;
      switch (filters.marketCap) {
        case "large":
          if (marketCapBillion < 10) return false;
          break;
        case "mid":
          if (marketCapBillion < 1 || marketCapBillion >= 10) return false;
          break;
        case "small":
          if (marketCapBillion < 0.1 || marketCapBillion >= 1) return false;
          break;
        case "micro":
          if (marketCapBillion >= 0.1) return false;
          break;
      }
    }
    return true;
  }).sort((a, b) => {
    let comparison = 0;
    switch (filters.sortBy) {
      case "volatility":
        comparison = b.volatilityScore - a.volatilityScore;
        break;
      case "priceChange":
        const aPriceChange = filters.timeframe === "1h" ? Math.abs(a.priceChangePercentage1h) : Math.abs(a.priceChangePercentage24h);
        const bPriceChange = filters.timeframe === "1h" ? Math.abs(b.priceChangePercentage1h) : Math.abs(b.priceChangePercentage24h);
        comparison = bPriceChange - aPriceChange;
        break;
      case "volume":
        comparison = b.volume24h - a.volume24h;
        break;
      case "marketCap":
        comparison = b.marketCap - a.marketCap;
        break;
      default:
        comparison = 0;
    }
    return comparison;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader
          isLive={false}
          lastUpdated={getLastUpdated()}
          totalTokens={0}
          nextUpdateIn={nextUpdate}
        />
        <FilterControls filters={filters} onFiltersChange={setFilters} />
        <LoadingState />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader
          isLive={false}
          lastUpdated={getLastUpdated()}
          totalTokens={0}
          nextUpdateIn={nextUpdate}
        />
        <FilterControls filters={filters} onFiltersChange={setFilters} />
        <ErrorState
          message="Failed to fetch market data"
          onRetry={() => refetch()}
        />
      </div>
    );
  }

  if (!filteredAndSortedTokens || filteredAndSortedTokens.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader
          isLive={wsConnected}
          lastUpdated={getLastUpdated()}
          totalTokens={tokens?.length || 0}
          nextUpdateIn={nextUpdate}
        />
        <FilterControls filters={filters} onFiltersChange={setFilters} />
        <EmptyState
          message="No tokens found"
          description="Try adjusting your filters to see more results."
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader
        isLive={wsConnected}
        lastUpdated={getLastUpdated()}
        totalTokens={tokens?.length || 0}
        nextUpdateIn={nextUpdate}
      />
      <FilterControls filters={filters} onFiltersChange={setFilters} />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredAndSortedTokens.map((token) => (
            <TokenCard
              key={token.id}
              token={token}
              isUpdating={updatingTokens.has(token.id)}
              timeframe={filters.timeframe}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
