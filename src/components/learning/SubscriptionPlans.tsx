import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Users, DollarSign, Edit } from "lucide-react";
import { mockSubscriptionPlans } from "@/lib/mockData";

export const SubscriptionPlans = () => {
  return (
    <div className="space-y-6">
      {/* Current Plans */}
      <div className="grid gap-6 md:grid-cols-3">
        {mockSubscriptionPlans.map((plan, index) => (
          <Card 
            key={plan.id} 
            className={`hover:shadow-xl transition-smooth ${
              index === 1 ? "border-primary border-2" : ""
            }`}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                {index === 1 && (
                  <Badge className="gradient-primary">Popular</Badge>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-4xl font-bold">
                  ${plan.price}
                </span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">
                  {plan.subscribers.toLocaleString()} subscribers
                </span>
              </div>

              <div className="space-y-2">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Plan
                </Button>
                <Badge 
                  variant={plan.status === "Active" ? "default" : "secondary"}
                  className="w-full justify-center"
                >
                  {plan.status}
                </Badge>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Monthly Revenue</span>
                  <span className="font-bold text-success">
                    ${(plan.price * plan.subscribers).toLocaleString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add New Plan */}
      <Card>
        <CardHeader>
          <CardTitle>Create New Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="plan-name">Plan Name</Label>
                <Input id="plan-name" placeholder="e.g., Enterprise" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="plan-price">Monthly Price ($)</Label>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="plan-price" 
                    type="number" 
                    placeholder="29.99"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Plan Status</Label>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">Active</Button>
                  <Button variant="outline" className="flex-1">Draft</Button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Label>Features</Label>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <Input 
                    key={i}
                    placeholder={`Feature ${i}`}
                  />
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Add Feature
              </Button>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Button className="flex-1 gradient-primary">
              Create Plan
            </Button>
            <Button variant="outline" className="flex-1">
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Overview */}
      <Card className="gradient-primary text-white">
        <CardContent className="pt-6">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-white/80 text-sm">Total Subscribers</p>
              <p className="text-3xl font-bold mt-1">
                {mockSubscriptionPlans.reduce((sum, plan) => sum + plan.subscribers, 0).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-white/80 text-sm">Monthly Revenue</p>
              <p className="text-3xl font-bold mt-1">
                ${mockSubscriptionPlans.reduce((sum, plan) => sum + (plan.price * plan.subscribers), 0).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-white/80 text-sm">Average Per User</p>
              <p className="text-3xl font-bold mt-1">
                ${(mockSubscriptionPlans.reduce((sum, plan) => sum + (plan.price * plan.subscribers), 0) / mockSubscriptionPlans.reduce((sum, plan) => sum + plan.subscribers, 0)).toFixed(2)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
