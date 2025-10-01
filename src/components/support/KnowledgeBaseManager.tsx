import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Edit2, Trash2, Eye } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Article {
  id: string;
  title: string;
  category: string;
  views: number;
  helpful: number;
  lastUpdated: string;
  status: "published" | "draft";
}

export const KnowledgeBaseManager = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const articles: Article[] = [
    {
      id: "1",
      title: "How to create an account",
      category: "Getting Started",
      views: 2543,
      helpful: 92,
      lastUpdated: "2025-09-25",
      status: "published",
    },
    {
      id: "2",
      title: "Payment methods accepted",
      category: "Billing",
      views: 1876,
      helpful: 88,
      lastUpdated: "2025-09-20",
      status: "published",
    },
    {
      id: "3",
      title: "Shipping and delivery times",
      category: "Orders",
      views: 3201,
      helpful: 95,
      lastUpdated: "2025-09-15",
      status: "published",
    },
    {
      id: "4",
      title: "Return and refund policy",
      category: "Orders",
      views: 2987,
      helpful: 85,
      lastUpdated: "2025-09-10",
      status: "published",
    },
    {
      id: "5",
      title: "How to update your profile",
      category: "Account",
      views: 1234,
      helpful: 78,
      lastUpdated: "2025-09-05",
      status: "draft",
    },
  ];

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Knowledge Base Articles</CardTitle>
        <Button className="gradient-primary">
          <Plus className="mr-2 h-4 w-4" />
          New Article
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-center">Views</TableHead>
              <TableHead className="text-center">Helpful %</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredArticles.map((article) => (
              <TableRow key={article.id}>
                <TableCell className="font-medium">{article.title}</TableCell>
                <TableCell>
                  <Badge variant="outline">{article.category}</Badge>
                </TableCell>
                <TableCell className="text-center">
                  {article.views.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  <Badge
                    variant="outline"
                    className={
                      article.helpful >= 90
                        ? "bg-success/10 text-success border-success"
                        : article.helpful >= 80
                        ? "bg-warning/10 text-warning border-warning"
                        : "bg-destructive/10 text-destructive border-destructive"
                    }
                  >
                    {article.helpful}%
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {article.lastUpdated}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={article.status === "published" ? "default" : "secondary"}
                  >
                    {article.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
