import { ArrowUp, ArrowDown, TrendingUp, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Sparkline } from "@/components/Sparkline";

interface TokenCardProps {
  token: {
    id: string;
    symbol: string;
    name: string;
    rank: number;
    currentPrice: number;
    priceChangePercentage1h: number;
    priceChangePercentage24h: number;
    volatilityScore: number;
    volume24h: number;
    marketCap: number;
    rsi: number;
    signal: string;
    isAlpha: boolean;
    sparklineData: number[];
    lastUpdated: string;
  };
  isUpdating: boolean;
  timeframe?: string;
}

export function TokenCard({ token, isUpdating, timeframe = "24h" }: TokenCardProps) {
  const priceChangePercentage = timeframe === "1h" ? token.priceChangePercentage1h : token.priceChangePercentage24h;
  const isPositive = priceChangePercentage >= 0;
  const signalColor = token.signal === "bullish" ? "text-chart-2" : token.signal === "bearish" ? "text-destructive" : "text-muted-foreground";
  const volatilityLevel = token.volatilityScore >= 80 ? "extreme" : token.volatilityScore >= 60 ? "high" : "moderate";

  return (
    <Card
      className={cn(
        "hover-elevate transition-all duration-200",
        isUpdating && "animate-flash border-primary"
      )}
      data-testid={`card-token-${token.id}`}
    >
      <CardHeader className="pb-3 space-y-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-lg truncate" data-testid={`text-symbol-${token.id}`}>
                {token.symbol.toUpperCase()}
              </h3>
              <Badge variant="outline" className="font-mono text-xs" data-testid={`badge-rank-${token.id}`}>
                #{token.rank}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground truncate" data-testid={`text-name-${token.id}`}>
              {token.name}
            </p>
          </div>
          {token.isAlpha && (
            <Badge variant="secondary" className="text-xs font-bold" data-testid={`badge-alpha-${token.id}`}>
              ALPHA
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold font-mono" data-testid={`text-price-${token.id}`}>
              ${token.currentPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: token.currentPrice < 1 ? 6 : 2
              })}
            </span>
            <div
              className={cn(
                "flex items-center gap-1 font-mono text-sm font-semibold",
                isPositive ? "text-chart-2" : "text-destructive"
              )}
              data-testid={`text-change-${token.id}`}
            >
              {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
              {Math.abs(priceChangePercentage).toFixed(2)}%
            </div>
          </div>
          <div className="h-12 w-full">
            <Sparkline data={token.sparklineData} isPositive={isPositive} />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Volatility Score</span>
            <div className="flex items-center gap-2">
              <Badge
                variant={volatilityLevel === "extreme" ? "default" : volatilityLevel === "high" ? "secondary" : "secondary"}
                className="text-xs uppercase"
                data-testid={`badge-volatility-${token.id}`}
              >
                {volatilityLevel}
              </Badge>
              <span className="font-mono font-semibold" data-testid={`text-volatility-score-${token.id}`}>
                {token.volatilityScore}
              </span>
            </div>
          </div>
          <Progress value={token.volatilityScore} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="space-y-1">
            <span className="text-muted-foreground">24h Volume</span>
            <p className="font-mono font-semibold" data-testid={`text-volume-${token.id}`}>
              ${(token.volume24h / 1e6).toFixed(1)}M
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-muted-foreground">Market Cap</span>
            <p className="font-mono font-semibold" data-testid={`text-marketcap-${token.id}`}>
              ${(token.marketCap / 1e6).toFixed(1)}M
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-muted-foreground">RSI</span>
            <p className="font-mono font-semibold" data-testid={`text-rsi-${token.id}`}>
              {token.rsi.toFixed(1)}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-muted-foreground">Signal</span>
            <p className={cn("font-semibold uppercase flex items-center gap-1", signalColor)} data-testid={`text-signal-${token.id}`}>
              {token.signal === "bullish" && <TrendingUp className="w-3 h-3" />}
              {token.signal === "bearish" && <AlertTriangle className="w-3 h-3" />}
              {token.signal.toUpperCase()}
            </p>
          </div>
        </div>

        <div className="text-xs text-muted-foreground text-right" data-testid={`text-updated-${token.id}`}>
          Updated {new Date(token.lastUpdated).toLocaleTimeString()}
        </div>
      </CardContent>
    </Card>
  );
}
