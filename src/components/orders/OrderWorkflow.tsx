import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, Truck, Package, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Order {
  id: string;
  customer: string;
  total: number;
  status: string;
  items: number;
}

export const OrderWorkflow = ({ order }: { order: Order }) => {
  const { toast } = useToast();
  const [notes, setNotes] = useState("");

  const handleAction = (action: string) => {
    toast({
      title: `Order ${action}`,
      description: `Order #${order.id} has been ${action.toLowerCase()}.`,
    });
  };

  const workflowSteps = [
    { status: "Pending", icon: Package, color: "text-muted-foreground" },
    { status: "Processing", icon: DollarSign, color: "text-warning" },
    { status: "Shipped", icon: Truck, color: "text-primary" },
    { status: "Delivered", icon: CheckCircle2, color: "text-success" },
  ];

  const currentStepIndex = workflowSteps.findIndex((s) => s.status === order.status);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order #{order.id}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Customer</p>
            <p className="font-medium">{order.customer}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Total</p>
            <p className="font-medium">${order.total.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Items</p>
            <p className="font-medium">{order.items}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Status</p>
            <Badge>{order.status}</Badge>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-4">Order Progress</p>
          <div className="flex items-center justify-between">
            {workflowSteps.map((step, index) => {
              const StepIcon = step.icon;
              const isCompleted = index <= currentStepIndex;
              const isCurrent = index === currentStepIndex;
              
              return (
                <div key={step.status} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isCompleted
                        ? "bg-primary text-white"
                        : "bg-muted text-muted-foreground"
                    } ${isCurrent ? "ring-2 ring-primary ring-offset-2" : ""}`}
                  >
                    <StepIcon className="h-5 w-5" />
                  </div>
                  <p className="text-xs mt-2 text-center">{step.status}</p>
                  {index < workflowSteps.length - 1 && (
                    <div
                      className={`absolute h-0.5 w-full left-1/2 top-5 -z-10 ${
                        index < currentStepIndex ? "bg-primary" : "bg-muted"
                      }`}
                      style={{ width: `${100 / (workflowSteps.length - 1)}%` }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="order-notes">Order Notes</Label>
          <Textarea
            id="order-notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add notes about this order..."
            rows={3}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {order.status === "Pending" && (
            <>
              <Button
                onClick={() => handleAction("Approved")}
                className="gradient-primary"
              >
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Approve Order
              </Button>
              <Button
                variant="outline"
                onClick={() => handleAction("Cancelled")}
                className="border-destructive text-destructive"
              >
                <XCircle className="mr-2 h-4 w-4" />
                Cancel Order
              </Button>
            </>
          )}
          {order.status === "Processing" && (
            <Button
              onClick={() => handleAction("Shipped")}
              className="gradient-primary"
            >
              <Truck className="mr-2 h-4 w-4" />
              Mark as Shipped
            </Button>
          )}
          {order.status === "Shipped" && (
            <Button
              onClick={() => handleAction("Delivered")}
              className="gradient-primary"
            >
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Mark as Delivered
            </Button>
          )}
          <Button variant="outline">Print Invoice</Button>
          <Button variant="outline">Contact Customer</Button>
        </div>
      </CardContent>
    </Card>
  );
};
