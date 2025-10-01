import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GripVertical, Save, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FeaturedProduct {
  id: string;
  name: string;
  price: number;
  visible: boolean;
}

export const FeaturedProductsOrganizer = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState<FeaturedProduct[]>([
    { id: "1", name: "Premium Wireless Headphones", price: 299, visible: true },
    { id: "2", name: "Smart Watch Pro", price: 499, visible: true },
    { id: "3", name: "Laptop Stand Aluminum", price: 79, visible: true },
    { id: "4", name: "USB-C Hub 7-in-1", price: 49, visible: false },
    { id: "5", name: "Mechanical Keyboard RGB", price: 159, visible: true },
  ]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newProducts = [...products];
    const draggedItem = newProducts[draggedIndex];
    newProducts.splice(draggedIndex, 1);
    newProducts.splice(index, 0, draggedItem);
    
    setProducts(newProducts);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const toggleVisibility = (id: string) => {
    setProducts(products.map(p => 
      p.id === id ? { ...p, visible: !p.visible } : p
    ));
  };

  const handleSave = () => {
    toast({
      title: "Featured products updated",
      description: "The order and visibility have been saved.",
    });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Featured Products Order</CardTitle>
        <Button onClick={handleSave} className="gradient-primary">
          <Save className="mr-2 h-4 w-4" />
          Save Order
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {products.map((product, index) => (
            <div
              key={product.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              className={`flex items-center gap-3 p-4 border rounded-lg cursor-move hover:bg-muted/50 transition-smooth ${
                draggedIndex === index ? "opacity-50" : ""
              }`}
            >
              <GripVertical className="h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{product.name}</p>
                  {!product.visible && (
                    <Badge variant="outline" className="text-xs">Hidden</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">${product.price}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleVisibility(product.id)}
              >
                {product.visible ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
