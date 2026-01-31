import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

interface FilterControlsProps {
  filters: {
    sortBy: string;
    timeframe: string;
    marketCap: string;
    alphaOnly: boolean;
    searchTerm: string;
  };
  onFiltersChange: (filters: FilterControlsProps["filters"]) => void;
}

export function FilterControls({ filters, onFiltersChange }: FilterControlsProps) {
  return (
    <div className="bg-card border-b px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex-1 min-w-[200px]" data-testid="container-search">
            <Label htmlFor="search" className="text-xs text-muted-foreground mb-2 block">
              Search Tokens
            </Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="search"
                placeholder="BTC, ETH, SOL..."
                value={filters.searchTerm || ""}
                onChange={(e) => onFiltersChange({ ...filters, searchTerm: e.target.value })}
                className="pl-9"
                data-testid="input-search"
              />
            </div>
          </div>

          <div className="min-w-[140px]" data-testid="container-sort">
            <Label htmlFor="sortBy" className="text-xs text-muted-foreground mb-2 block">
              Sort By
            </Label>
            <Select
              value={filters.sortBy}
              onValueChange={(value) => onFiltersChange({ ...filters, sortBy: value })}
            >
              <SelectTrigger id="sortBy" data-testid="select-sort">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="volatility">Volatility</SelectItem>
                <SelectItem value="priceChange">Price Change</SelectItem>
                <SelectItem value="volume">Volume</SelectItem>
                <SelectItem value="marketCap">Market Cap</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="min-w-[140px]" data-testid="container-timeframe">
            <Label htmlFor="timeframe" className="text-xs text-muted-foreground mb-2 block">
              Price Change
            </Label>
            <Select
              value={filters.timeframe}
              onValueChange={(value) => onFiltersChange({ ...filters, timeframe: value })}
            >
              <SelectTrigger id="timeframe" data-testid="select-timeframe">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1h">1 Hour</SelectItem>
                <SelectItem value="24h">24 Hours</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="min-w-[140px]" data-testid="container-marketcap">
            <Label htmlFor="marketCap" className="text-xs text-muted-foreground mb-2 block">
              Market Cap
            </Label>
            <Select
              value={filters.marketCap}
              onValueChange={(value) => onFiltersChange({ ...filters, marketCap: value })}
            >
              <SelectTrigger id="marketCap" data-testid="select-marketcap">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Caps</SelectItem>
                <SelectItem value="large">Large Cap ($10B+)</SelectItem>
                <SelectItem value="mid">Mid Cap ($1B-$10B)</SelectItem>
                <SelectItem value="small">Small Cap ($100M-$1B)</SelectItem>
                <SelectItem value="micro">
                  Micro Cap (&lt;$100M)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2 pb-1" data-testid="container-alpha">
            <Switch
              id="alphaOnly"
              checked={filters.alphaOnly}
              onCheckedChange={(checked) => onFiltersChange({ ...filters, alphaOnly: checked })}
              data-testid="switch-alpha"
            />
            <Label htmlFor="alphaOnly" className="text-sm cursor-pointer">
              Alpha Tokens Only
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}
