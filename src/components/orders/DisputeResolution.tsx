import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, Send, CheckCircle2, XCircle } from "lucide-react";
import { mockDisputes } from "@/lib/mockData";

export const DisputeResolution = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Dispute Resolution Center</CardTitle>
          <Badge variant="outline">
            <AlertCircle className="h-3 w-3 mr-1" />
            2 Open Disputes
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {mockDisputes.map((dispute) => (
          <Card key={dispute.id} className={`${
            dispute.status === "Open" ? "border-warning" : "border-muted"
          }`}>
            <CardContent className="pt-6 space-y-4">
              {/* Dispute Header */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant={dispute.status === "Open" ? "destructive" : "default"}>
                      {dispute.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Order: {dispute.orderId}
                    </span>
                  </div>
                  <h4 className="font-semibold text-lg">{dispute.reason}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Filed on {dispute.createdDate}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Amount</p>
                  <p className="text-xl font-bold">${dispute.amount}</p>
                </div>
              </div>

              {/* Parties */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-muted/50">
                <div>
                  <p className="text-xs text-muted-foreground">Customer</p>
                  <p className="font-medium">{dispute.customer}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Vendor</p>
                  <p className="font-medium">{dispute.vendor}</p>
                </div>
              </div>

              {/* Chat Interface */}
              {dispute.status === "Open" && (
                <div className="space-y-3">
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {/* Customer Message */}
                    <div className="flex gap-2">
                      <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-white text-sm flex-shrink-0">
                        C
                      </div>
                      <div className="flex-1 bg-muted p-3 rounded-lg">
                        <p className="text-sm font-medium mb-1">{dispute.customer}</p>
                        <p className="text-sm">
                          The product I received doesn't match the description. It's a different color and size than advertised.
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                      </div>
                    </div>

                    {/* Vendor Message */}
                    <div className="flex gap-2 flex-row-reverse">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-sm flex-shrink-0">
                        V
                      </div>
                      <div className="flex-1 bg-primary/10 p-3 rounded-lg">
                        <p className="text-sm font-medium mb-1">{dispute.vendor}</p>
                        <p className="text-sm">
                          I apologize for the inconvenience. Could you please send photos of the product you received?
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
                      </div>
                    </div>
                  </div>

                  {/* Admin Response */}
                  <div className="space-y-2 pt-3 border-t">
                    <Textarea 
                      placeholder="Type your response as an admin..."
                      rows={3}
                    />
                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </div>

                  {/* Resolution Actions */}
                  <div className="flex gap-2 pt-3 border-t">
                    <Button className="flex-1 bg-success hover:bg-success/90">
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Resolve - Refund Customer
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Resolve - No Refund
                    </Button>
                  </div>
                </div>
              )}

              {/* Resolved Status */}
              {dispute.status === "Resolved" && (
                <div className="flex items-center gap-3 p-4 rounded-lg bg-success/10 border border-success/30">
                  <CheckCircle2 className="h-6 w-6 text-success" />
                  <div>
                    <p className="font-medium text-success">Dispute Resolved</p>
                    <p className="text-sm text-muted-foreground">
                      Refund issued to customer. Case closed on {dispute.createdDate}.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};
