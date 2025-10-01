import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, ChevronDown, Plus, Edit2, Trash2, FolderPlus } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

interface Category {
  id: string;
  name: string;
  children?: Category[];
}

export const CategoryTreeView = () => {
  const { toast } = useToast();
  const [categories, setCategories] = useState<Category[]>([
    {
      id: "1",
      name: "Electronics",
      children: [
        { id: "1-1", name: "Computers" },
        { id: "1-2", name: "Phones" },
      ],
    },
    {
      id: "2",
      name: "Clothing",
      children: [
        { id: "2-1", name: "Men's Wear" },
        { id: "2-2", name: "Women's Wear" },
      ],
    },
    { id: "3", name: "Home & Garden" },
  ]);
  const [expanded, setExpanded] = useState<Set<string>>(new Set(["1", "2"]));
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expanded);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpanded(newExpanded);
  };

  const startEdit = (id: string, name: string) => {
    setEditingId(id);
    setEditValue(name);
  };

  const saveEdit = () => {
    toast({
      title: "Category updated",
      description: "The category name has been changed.",
    });
    setEditingId(null);
  };

  const handleDelete = () => {
    toast({
      title: "Category deleted",
      description: "The category has been removed.",
    });
    setDeleteId(null);
  };

  const renderCategory = (category: Category, level: number = 0) => (
    <div key={category.id} style={{ marginLeft: `${level * 24}px` }}>
      <div className="flex items-center gap-2 py-2 hover:bg-muted/50 rounded px-2">
        {category.children && category.children.length > 0 ? (
          <button onClick={() => toggleExpand(category.id)} className="p-0.5">
            {expanded.has(category.id) ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
        ) : (
          <div className="w-5" />
        )}
        
        {editingId === category.id ? (
          <Input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={saveEdit}
            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
            className="h-7 flex-1"
            autoFocus
          />
        ) : (
          <span className="flex-1 font-medium">{category.name}</span>
        )}
        
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => toast({ title: "Add subcategory", description: `Adding to ${category.name}` })}
          >
            <FolderPlus className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => startEdit(category.id, category.name)}
          >
            <Edit2 className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => setDeleteId(category.id)}
          >
            <Trash2 className="h-3.5 w-3.5 text-destructive" />
          </Button>
        </div>
      </div>
      
      {category.children && expanded.has(category.id) && (
        <div>
          {category.children.map((child) => renderCategory(child, level + 1))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Category Management</CardTitle>
          <Button className="gradient-primary">
            <Plus className="mr-2 h-4 w-4" />
            Add Root Category
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {categories.map((category) => renderCategory(category))}
          </div>
        </CardContent>
      </Card>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Category</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this category? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
