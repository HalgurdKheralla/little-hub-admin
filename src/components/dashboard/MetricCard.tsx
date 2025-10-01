import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: LucideIcon;
  gradient?: boolean;
}

export const MetricCard = ({ title, value, change, icon: Icon, gradient }: MetricCardProps) => {
  const isPositive = change > 0;

  return (
    <Card className={`overflow-hidden transition-smooth hover:shadow-lg ${gradient ? 'gradient-primary text-white' : ''}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className={`text-sm font-medium ${gradient ? 'text-white' : 'text-muted-foreground'}`}>
          {title}
        </CardTitle>
        <div className={`rounded-lg p-2 ${gradient ? 'bg-white/20' : 'bg-primary/10'}`}>
          <Icon className={`h-4 w-4 ${gradient ? 'text-white' : 'text-primary'}`} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div className="text-2xl font-bold">{value}</div>
          <div className={`flex items-center text-xs font-medium ${
            isPositive 
              ? gradient ? 'text-white/90' : 'text-success' 
              : gradient ? 'text-white/90' : 'text-destructive'
          }`}>
            {isPositive ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
            {Math.abs(change)}%
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
