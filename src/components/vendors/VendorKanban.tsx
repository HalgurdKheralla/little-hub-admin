import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Store, Mail, Phone, CheckCircle2, XCircle } from "lucide-react";

const kanbanColumns = [
  { id: "pending", title: "Pending", color: "bg-secondary" },
  { id: "under-review", title: "Under Review", color: "bg-warning" },
  { id: "approved", title: "Approved", color: "bg-success" },
  { id: "rejected", title: "Rejected", color: "bg-destructive" },
];

const mockApplications = [
  {
    id: "1",
    businessName: "Sweet Baby Dreams",
    ownerName: "Jennifer Wilson",
    email: "jennifer@sweetbabydreams.com",
    phone: "+1 (555) 234-5678",
    status: "pending",
    submittedDate: "2024-06-20",
    category: "Bedding & Nursery",
  },
  {
    id: "2",
    businessName: "EcoKids Toys",
    ownerName: "Michael Chen",
    email: "michael@ecokidstoys.com",
    phone: "+1 (555) 345-6789",
    status: "under-review",
    submittedDate: "2024-06-18",
    category: "Toys & Games",
  },
  {
    id: "3",
    businessName: "Baby Bliss Co.",
    ownerName: "Sarah Martinez",
    email: "sarah@babybliss.com",
    phone: "+1 (555) 456-7890",
    status: "approved",
    submittedDate: "2024-06-15",
    category: "Clothing & Accessories",
  },
  {
    id: "4",
    businessName: "TinyTech",
    ownerName: "Robert Brown",
    email: "robert@tinytech.com",
    phone: "+1 (555) 567-8901",
    status: "rejected",
    submittedDate: "2024-06-12",
    category: "Electronics",
  },
];

export const VendorKanban = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {kanbanColumns.map((column) => {
        const applications = mockApplications.filter((app) => app.status === column.id);
        
        return (
          <div key={column.id} className="space-y-3">
            <div className={`p-3 rounded-lg ${column.color}/10 border border-${column.color}/20`}>
              <h3 className="font-semibold flex items-center justify-between">
                {column.title}
                <Badge variant="outline">{applications.length}</Badge>
              </h3>
            </div>
            
            <div className="space-y-3">
              {applications.map((app) => (
                <Card key={app.id} className="hover:shadow-lg transition-smooth cursor-move">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg gradient-secondary flex items-center justify-center text-white flex-shrink-0">
                        <Store className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-sm line-clamp-1">{app.businessName}</CardTitle>
                        <p className="text-xs text-muted-foreground">{app.ownerName}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Badge variant="outline" className="text-xs">
                      {app.category}
                    </Badge>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-3 w-3" />
                        <span className="truncate">{app.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-3 w-3" />
                        <span>{app.phone}</span>
                      </div>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">
                      Submitted: {app.submittedDate}
                    </p>
                    
                    {column.id === "under-review" && (
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="flex-1 bg-success hover:bg-success/90">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Approve
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 text-destructive hover:bg-destructive/10">
                          <XCircle className="h-3 w-3 mr-1" />
                          Reject
                        </Button>
                      </div>
                    )}
                    
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
