import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, Download, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const CustomReportBuilder = () => {
  const { toast } = useToast();
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([
    "revenue",
    "orders",
  ]);

  const metrics = [
    { id: "revenue", label: "Total Revenue" },
    { id: "orders", label: "Order Count" },
    { id: "users", label: "New Users" },
    { id: "conversion", label: "Conversion Rate" },
    { id: "avg-order", label: "Average Order Value" },
    { id: "refunds", label: "Refund Rate" },
  ];

  const toggleMetric = (metricId: string) => {
    if (selectedMetrics.includes(metricId)) {
      setSelectedMetrics(selectedMetrics.filter((m) => m !== metricId));
    } else {
      setSelectedMetrics([...selectedMetrics, metricId]);
    }
  };

  const handleGenerate = () => {
    toast({
      title: "Report generated",
      description: "Your custom report is ready.",
    });
  };

  const handleExport = () => {
    toast({
      title: "Report exported",
      description: "Your report has been downloaded as CSV.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Custom Report Builder</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Date Range</Label>
            <Select defaultValue="30d">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 Days</SelectItem>
                <SelectItem value="30d">Last 30 Days</SelectItem>
                <SelectItem value="90d">Last 90 Days</SelectItem>
                <SelectItem value="1y">Last Year</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Metrics to Include</Label>
            <div className="grid grid-cols-2 gap-3">
              {metrics.map((metric) => (
                <div key={metric.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={metric.id}
                    checked={selectedMetrics.includes(metric.id)}
                    onCheckedChange={() => toggleMetric(metric.id)}
                  />
                  <label
                    htmlFor={metric.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {metric.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Group By</Label>
            <Select defaultValue="day">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Daily</SelectItem>
                <SelectItem value="week">Weekly</SelectItem>
                <SelectItem value="month">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Chart Type</Label>
            <Select defaultValue="line">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="line">Line Chart</SelectItem>
                <SelectItem value="bar">Bar Chart</SelectItem>
                <SelectItem value="area">Area Chart</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={handleGenerate} className="flex-1 gradient-primary">
            <BarChart3 className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
          <Button variant="outline" onClick={handleExport}>
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
          <Button variant="outline">
            <Save className="mr-2 h-4 w-4" />
            Save Template
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
