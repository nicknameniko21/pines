import { AlertCircle, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  message: string;
  description?: string;
  onRetry?: () => void;
}

export function EmptyState({ message, description, onRetry }: EmptyStateProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <Card className="p-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
            <TrendingUp className="w-8 h-8 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold" data-testid="text-empty-message">
              {message}
            </h3>
            {description && (
              <p className="text-sm text-muted-foreground max-w-md" data-testid="text-empty-description">
                {description}
              </p>
            )}
          </div>
          {onRetry && (
            <Button onClick={onRetry} variant="default" data-testid="button-retry">
              Retry Connection
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <Card className="p-12 border-destructive/50">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-destructive" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-destructive" data-testid="text-error-message">
              {message}
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              We're having trouble connecting to the market data. Please try again.
            </p>
          </div>
          {onRetry && (
            <Button onClick={onRetry} variant="default" data-testid="button-retry-error">
              Try Again
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
