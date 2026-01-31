import { Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface DashboardHeaderProps {
  isLive: boolean;
  lastUpdated: string;
  totalTokens: number;
  nextUpdateIn: number;
}

export function DashboardHeader({ isLive, lastUpdated, totalTokens, nextUpdateIn }: DashboardHeaderProps) {
  return (
    <header className="border-b bg-background px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Activity className="w-7 h-7 text-primary" data-testid="icon-activity" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight" data-testid="text-dashboard-title">
              Crypto Volatility Dashboard
            </h1>
            <p className="text-sm text-muted-foreground" data-testid="text-subtitle">
              Real-time market movement analysis
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2" data-testid="container-status">
            <Badge
              variant={isLive ? "default" : "secondary"}
              className={cn(
                "font-mono text-xs",
                isLive && "animate-pulse"
              )}
              data-testid="badge-live-status"
            >
              {isLive ? "LIVE" : "OFFLINE"}
            </Badge>
            <div className="text-xs text-muted-foreground">
              <div data-testid="text-last-updated">Updated: {lastUpdated}</div>
              {isLive && (
                <div data-testid="text-next-update" className="text-xs">
                  Next: {nextUpdateIn}s
                </div>
              )}
            </div>
          </div>

          <div className="text-right" data-testid="container-token-count">
            <div className="text-2xl font-bold font-mono" data-testid="text-total-tokens">
              {totalTokens}
            </div>
            <div className="text-xs text-muted-foreground">Tokens Tracked</div>
          </div>
        </div>
      </div>
    </header>
  );
}
