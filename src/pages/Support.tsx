import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, MessageSquare, Clock, CheckCircle2 } from "lucide-react";
import { KnowledgeBaseManager } from "@/components/support/KnowledgeBaseManager";
import { FAQBuilder } from "@/components/support/FAQBuilder";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockTickets } from "@/lib/mockData";

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const getPriorityColor = (priority: string) => {
    const colors = {
      High: "destructive",
      Medium: "secondary",
      Low: "outline",
    };
    return colors[priority as keyof typeof colors] || "outline";
  };

  const getStatusColor = (status: string) => {
    const colors = {
      Open: "destructive",
      "In Progress": "secondary",
      Resolved: "default",
    };
    return colors[status as keyof typeof colors] || "outline";
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Customer Support Hub</h1>
        <p className="text-muted-foreground mt-1">
          Manage support tickets and customer inquiries
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="hover:shadow-lg transition-smooth">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Tickets
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,247</p>
            <p className="text-xs text-muted-foreground mt-1">All time</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-smooth">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-destructive" />
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Open
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-destructive">45</p>
            <p className="text-xs text-muted-foreground mt-1">Needs attention</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-smooth">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-secondary" />
              <CardTitle className="text-sm font-medium text-muted-foreground">
                In Progress
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-secondary">28</p>
            <p className="text-xs text-muted-foreground mt-1">Being handled</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-smooth">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Avg. Response Time
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-success">2.4h</p>
            <p className="text-xs text-muted-foreground mt-1">-15% from last week</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 max-w-3xl">
          <TabsTrigger value="all">All Tickets</TabsTrigger>
          <TabsTrigger value="open">Open</TabsTrigger>
          <TabsTrigger value="resolved">Resolved</TabsTrigger>
          <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Support Tickets</CardTitle>
              <div className="flex items-center gap-2">
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search tickets..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <TabsContent value="all" className="mt-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockTickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className="font-medium">{ticket.id}</TableCell>
                      <TableCell>{ticket.subject}</TableCell>
                      <TableCell>{ticket.customer}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{ticket.category}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getPriorityColor(ticket.priority) as any}>
                          {ticket.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(ticket.status) as any}>
                          {ticket.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm">
                        {ticket.created}
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="open" className="mt-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockTickets.filter(t => t.status === "Open").map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className="font-medium">{ticket.id}</TableCell>
                      <TableCell>{ticket.subject}</TableCell>
                      <TableCell>{ticket.customer}</TableCell>
                      <TableCell>
                        <Badge variant={getPriorityColor(ticket.priority) as any}>
                          {ticket.priority}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm">
                        {ticket.created}
                      </TableCell>
                      <TableCell>
                        <Button size="sm" className="gradient-primary">
                          Respond
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="resolved" className="mt-0">
              <div className="text-center py-8 text-muted-foreground">
                <CheckCircle2 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Filter for resolved tickets</p>
              </div>
            </TabsContent>
          </CardContent>
        </Card>

        <TabsContent value="knowledge" className="space-y-6">
          <KnowledgeBaseManager />
        </TabsContent>

        <TabsContent value="faq" className="space-y-6">
          <FAQBuilder />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Support;
