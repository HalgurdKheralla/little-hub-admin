import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Store, DollarSign, Package, Star, MoreHorizontal } from "lucide-react";
import { VendorKanban } from "@/components/vendors/VendorKanban";
import { PayoutManagement } from "@/components/vendors/PayoutManagement";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mockVendors } from "@/lib/mockData";

const Vendors = () => {
  const [activeTab, setActiveTab] = useState("directory");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Vendor Management</h1>
        <p className="text-muted-foreground mt-1">
          Monitor and manage all marketplace vendors
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="directory">Vendor Directory</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="payouts">Payouts</TabsTrigger>
        </TabsList>

        <TabsContent value="directory" className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockVendors.map((vendor) => (
          <Card key={vendor.id} className="overflow-hidden hover:shadow-lg transition-smooth">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg gradient-secondary flex items-center justify-center text-white">
                    <Store className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{vendor.businessName}</CardTitle>
                    <p className="text-sm text-muted-foreground">{vendor.ownerName}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Vendor</DropdownMenuItem>
                    <DropdownMenuItem>View Products</DropdownMenuItem>
                    <DropdownMenuItem>Process Payout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge
                  variant={
                    vendor.status === "Approved"
                      ? "default"
                      : vendor.status === "Pending"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {vendor.status}
                </Badge>
                {vendor.rating > 0 && (
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="font-medium">{vendor.rating}</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Package className="h-4 w-4" />
                    <span className="text-xs">Products</span>
                  </div>
                  <p className="text-xl font-bold">{vendor.products}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    <span className="text-xs">Total Sales</span>
                  </div>
                  <p className="text-xl font-bold">
                    ${(vendor.totalSales / 1000).toFixed(0)}k
                  </p>
                </div>
              </div>

              {vendor.pendingPayout > 0 && (
                <div className="rounded-lg bg-accent/10 p-3 text-sm">
                  <p className="text-muted-foreground">Pending Payout</p>
                  <p className="text-lg font-bold text-accent">
                    ${vendor.pendingPayout.toLocaleString()}
                  </p>
                </div>
              )}

              <div className="text-xs text-muted-foreground">
                Joined {vendor.joinDate}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
        </TabsContent>

        <TabsContent value="applications" className="space-y-6">
          <VendorKanban />
        </TabsContent>

        <TabsContent value="payouts" className="space-y-6">
          <PayoutManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Vendors;
