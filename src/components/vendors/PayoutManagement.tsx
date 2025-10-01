import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Calendar, CheckCircle2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockPayouts } from "@/lib/mockData";

export const PayoutManagement = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Payout Requests</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Export</Button>
            <Button size="sm" className="gradient-primary">Process Payouts</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Vendor</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Request Date</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Paid Date</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockPayouts.map((payout) => (
              <TableRow key={payout.id}>
                <TableCell className="font-medium">{payout.vendor}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="font-bold">{payout.amount.toLocaleString()}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      payout.status === "Completed"
                        ? "default"
                        : payout.status === "Processing"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {payout.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{payout.requestDate}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{payout.dueDate}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {payout.paidDate || "-"}
                </TableCell>
                <TableCell>
                  {payout.status === "Pending" && (
                    <Button size="sm" variant="outline">
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      Process
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
