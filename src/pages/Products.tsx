import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Star, MoreHorizontal } from "lucide-react";
import { PromotionBuilder } from "@/components/products/PromotionBuilder";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mockProducts } from "@/lib/mockData";

const Products = () => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Product Management</h1>
          <p className="text-muted-foreground mt-1">
            Review and manage marketplace products
          </p>
        </div>
        <Button className="gradient-primary">
          <Package className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="products">All Products</TabsTrigger>
          <TabsTrigger value="promotions">Promotions</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-smooth">
            <div className="aspect-square bg-muted flex items-center justify-center">
              <Package className="h-16 w-16 text-muted-foreground" />
            </div>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold line-clamp-2">{product.name}</h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Product</DropdownMenuItem>
                    {product.status === "Pending Review" && (
                      <>
                        <DropdownMenuItem className="text-success">
                          Approve Product
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Reject Product
                        </DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {product.category}
                </Badge>
                <Badge
                  variant={
                    product.status === "Active"
                      ? "default"
                      : product.status === "Pending Review"
                      ? "secondary"
                      : "outline"
                  }
                  className="text-xs"
                >
                  {product.status}
                </Badge>
                {product.featured && (
                  <Badge variant="outline" className="text-xs bg-warning/10 text-warning border-warning">
                    Featured
                  </Badge>
                )}
              </div>

              <p className="text-sm text-muted-foreground">by {product.vendor}</p>

              <div className="flex items-center justify-between pt-2 border-t">
                <div>
                  <p className="text-xs text-muted-foreground">Price</p>
                  <p className="text-lg font-bold">${product.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Stock</p>
                  <p className="text-lg font-bold">{product.stock}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Sold</p>
                  <p className="text-lg font-bold">{product.sold}</p>
                </div>
              </div>

              {product.rating > 0 && (
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">rating</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
        </TabsContent>

        <TabsContent value="promotions" className="space-y-6">
          <PromotionBuilder />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Products;
