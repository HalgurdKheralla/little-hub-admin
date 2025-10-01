import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CohortAnalysis = () => {
  const cohorts = [
    { month: "Jan 2025", users: 1250, week1: 68, week2: 52, week3: 43, week4: 38 },
    { month: "Feb 2025", users: 1420, week1: 71, week2: 55, week3: 45, week4: 41 },
    { month: "Mar 2025", users: 1180, week1: 65, week2: 48, week3: 39, week4: 35 },
    { month: "Apr 2025", users: 1560, week1: 73, week2: 58, week3: 47, week4: 43 },
    { month: "May 2025", users: 1390, week1: 69, week2: 53, week3: 44, week4: 39 },
  ];

  const getRetentionColor = (retention: number) => {
    if (retention >= 60) return "bg-success/20 text-success";
    if (retention >= 40) return "bg-warning/20 text-warning";
    return "bg-destructive/20 text-destructive";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Cohort Retention Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-2 font-medium">Cohort</th>
                <th className="text-right py-3 px-2 font-medium">Users</th>
                <th className="text-center py-3 px-2 font-medium">Week 1</th>
                <th className="text-center py-3 px-2 font-medium">Week 2</th>
                <th className="text-center py-3 px-2 font-medium">Week 3</th>
                <th className="text-center py-3 px-2 font-medium">Week 4</th>
              </tr>
            </thead>
            <tbody>
              {cohorts.map((cohort) => (
                <tr key={cohort.month} className="border-b hover:bg-muted/50">
                  <td className="py-3 px-2 font-medium">{cohort.month}</td>
                  <td className="text-right py-3 px-2">{cohort.users.toLocaleString()}</td>
                  <td className="text-center py-3 px-2">
                    <Badge variant="outline" className={getRetentionColor(cohort.week1)}>
                      {cohort.week1}%
                    </Badge>
                  </td>
                  <td className="text-center py-3 px-2">
                    <Badge variant="outline" className={getRetentionColor(cohort.week2)}>
                      {cohort.week2}%
                    </Badge>
                  </td>
                  <td className="text-center py-3 px-2">
                    <Badge variant="outline" className={getRetentionColor(cohort.week3)}>
                      {cohort.week3}%
                    </Badge>
                  </td>
                  <td className="text-center py-3 px-2">
                    <Badge variant="outline" className={getRetentionColor(cohort.week4)}>
                      {cohort.week4}%
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Insight:</strong> The April 2025 cohort shows the highest retention rates
            across all weeks, with 73% of users returning in week 1 and maintaining 43% by week 4.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
