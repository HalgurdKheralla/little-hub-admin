import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, Trophy } from "lucide-react";

export const ABTestingPanel = () => {
  const tests = [
    {
      id: "1",
      name: "Welcome Message Test",
      status: "running",
      variants: [
        { name: "Variant A", sent: 1250, opened: 875, clicked: 438, conversion: 35.0 },
        { name: "Variant B", sent: 1250, opened: 950, clicked: 523, conversion: 41.8 },
      ],
      winner: "B",
    },
    {
      id: "2",
      name: "Flash Sale Announcement",
      status: "completed",
      variants: [
        { name: "Variant A", sent: 2000, opened: 1400, clicked: 840, conversion: 42.0 },
        { name: "Variant B", sent: 2000, opened: 1280, clicked: 704, conversion: 35.2 },
      ],
      winner: "A",
    },
  ];

  return (
    <div className="space-y-6">
      {tests.map((test) => (
        <Card key={test.id}>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <CardTitle>{test.name}</CardTitle>
              <Badge variant={test.status === "running" ? "default" : "secondary"}>
                {test.status}
              </Badge>
            </div>
            <Button variant="outline" size="sm">
              {test.status === "running" ? (
                <>
                  <Pause className="mr-2 h-4 w-4" />
                  Pause Test
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Resume Test
                </>
              )}
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {test.variants.map((variant) => {
                const isWinner = test.winner === variant.name.split(" ")[1];
                return (
                  <div
                    key={variant.name}
                    className={`p-4 border rounded-lg ${
                      isWinner ? "border-success bg-success/5" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold">{variant.name}</h4>
                      {isWinner && (
                        <Badge className="bg-success">
                          <Trophy className="mr-1 h-3 w-3" />
                          Winner
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Sent</span>
                          <span className="font-medium">{variant.sent.toLocaleString()}</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Opened</span>
                          <span className="font-medium">
                            {variant.opened.toLocaleString()} (
                            {((variant.opened / variant.sent) * 100).toFixed(1)}%)
                          </span>
                        </div>
                        <Progress
                          value={(variant.opened / variant.sent) * 100}
                          className="h-2"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Clicked</span>
                          <span className="font-medium">
                            {variant.clicked.toLocaleString()} (
                            {((variant.clicked / variant.sent) * 100).toFixed(1)}%)
                          </span>
                        </div>
                        <Progress
                          value={(variant.clicked / variant.sent) * 100}
                          className="h-2"
                        />
                      </div>

                      <div className="pt-2 border-t">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Conversion Rate</span>
                          <span className="text-lg font-bold text-primary">
                            {variant.conversion}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
