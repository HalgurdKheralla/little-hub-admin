import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Eye, Calendar, MoreHorizontal, PlusCircle } from "lucide-react";
import { ArticleEditor } from "@/components/learning/ArticleEditor";
import { VideoLibrary } from "@/components/learning/VideoLibrary";
import { QuizBuilder } from "@/components/learning/QuizBuilder";
import { SubscriptionPlans } from "@/components/learning/SubscriptionPlans";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mockArticles } from "@/lib/mockData";

const Learning = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Learning Hub</h1>
          <p className="text-muted-foreground mt-1">
            Manage educational content and resources
          </p>
        </div>
        <Button className="gradient-primary">
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Content
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5 max-w-3xl">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
          <TabsTrigger value="subscriptions">Plans</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="hover:shadow-lg transition-smooth">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Total Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">45</p>
            <p className="text-sm text-muted-foreground mt-1">+5 this month</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-smooth">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Total Views</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">28.5k</p>
            <p className="text-sm text-muted-foreground mt-1">+12% from last month</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-smooth">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Active Subscribers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1,247</p>
            <p className="text-sm text-muted-foreground mt-1">+8.3% growth</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Published</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockArticles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {article.featured && (
                        <Badge variant="outline" className="bg-warning/10 text-warning border-warning">
                          Featured
                        </Badge>
                      )}
                      <span className="font-medium">{article.title}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{article.author}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{article.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={article.status === "Published" ? "default" : "secondary"}
                    >
                      {article.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4 text-muted-foreground" />
                      <span>{article.views.toLocaleString()}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {article.publishDate || "-"}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Article</DropdownMenuItem>
                        <DropdownMenuItem>Preview</DropdownMenuItem>
                        {article.status === "Draft" && (
                          <DropdownMenuItem>Publish</DropdownMenuItem>
                        )}
                        <DropdownMenuItem className="text-destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
        </TabsContent>

        <TabsContent value="articles" className="space-y-6">
          <ArticleEditor />
        </TabsContent>

        <TabsContent value="videos" className="space-y-6">
          <VideoLibrary />
        </TabsContent>

        <TabsContent value="quizzes" className="space-y-6">
          <QuizBuilder />
        </TabsContent>

        <TabsContent value="subscriptions" className="space-y-6">
          <SubscriptionPlans />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Learning;
