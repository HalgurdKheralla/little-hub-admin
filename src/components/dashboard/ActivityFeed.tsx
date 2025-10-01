import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockActivities } from "@/lib/mockData";
import { ShoppingBag, Store, UserPlus, FileText } from "lucide-react";

const activityIcons = {
  order: ShoppingBag,
  vendor: Store,
  user: UserPlus,
  article: FileText,
};

const activityColors = {
  order: "bg-primary/10 text-primary",
  vendor: "bg-secondary/10 text-secondary",
  user: "bg-accent/10 text-accent",
  article: "bg-warning/10 text-warning",
};

export const ActivityFeed = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockActivities.map((activity) => {
            const Icon = activityIcons[activity.type as keyof typeof activityIcons];
            const colorClass = activityColors[activity.type as keyof typeof activityColors];

            return (
              <div key={activity.id} className="flex items-start gap-4">
                <div className={`rounded-full p-2 ${colorClass}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span>{" "}
                    <span className="text-muted-foreground">{activity.action}</span>
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                    {activity.amount && (
                      <Badge variant="outline" className="text-xs">
                        {activity.amount}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
