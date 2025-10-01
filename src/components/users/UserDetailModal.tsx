import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Package, Activity, Shield, Mail, Phone, MapPin } from "lucide-react";
import { mockUserActivity } from "@/lib/mockData";

interface UserDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
    joinDate: string;
    orders: number;
    spent: number;
  };
}

export const UserDetailModal = ({ open, onOpenChange, user }: UserDetailModalProps) => {
  const permissions = [
    { id: "view_products", label: "View Products", checked: true },
    { id: "purchase", label: "Make Purchases", checked: true },
    { id: "leave_reviews", label: "Leave Reviews", checked: true },
    { id: "access_learning", label: "Access Learning Hub", checked: true },
    { id: "manage_products", label: "Manage Products", checked: user.role === "Vendor" },
    { id: "view_analytics", label: "View Analytics", checked: user.role === "Vendor" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center text-white">
              {user.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-bold">{user.name}</h3>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="profile" className="mt-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="permissions">Permissions</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">User ID</p>
                    <p className="font-medium">{user.id}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Status</p>
                    <Badge variant={user.status === "Active" ? "default" : "outline"}>
                      {user.status}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Role</p>
                    <Badge variant={user.role === "Vendor" ? "default" : "secondary"}>
                      {user.role}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Join Date</p>
                    <p className="font-medium">{user.joinDate}</p>
                  </div>
                </div>

                <div className="pt-4 border-t space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>New York, NY, USA</span>
                  </div>
                </div>

                <div className="pt-4 border-t grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-muted">
                    <p className="text-sm text-muted-foreground">Total Orders</p>
                    <p className="text-2xl font-bold">{user.orders}</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted">
                    <p className="text-sm text-muted-foreground">Total Spent</p>
                    <p className="text-2xl font-bold">${user.spent.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {[1, 2, 3].map((order) => (
                    <div key={order} className="flex items-center justify-between p-3 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                          <Package className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">Order #ORD-00{order}</p>
                          <p className="text-sm text-muted-foreground">June {15 - order}, 2024</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">${(149.97 - order * 10).toFixed(2)}</p>
                        <Badge variant="outline">Delivered</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {mockUserActivity.map((activity, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Activity className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.details}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="permissions" className="space-y-4">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">User Permissions</h4>
                </div>
                <div className="space-y-3">
                  {permissions.map((permission) => (
                    <div key={permission.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-smooth">
                      <Checkbox id={permission.id} checked={permission.checked} />
                      <label
                        htmlFor={permission.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {permission.label}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="pt-4 flex gap-2">
                  <Button className="flex-1">Save Changes</Button>
                  <Button variant="outline" className="flex-1">Reset</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
