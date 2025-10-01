import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Send, Calendar, Users, BarChart3, Plus } from "lucide-react";
import { pushCampaigns } from "@/lib/mockData";
import { ABTestingPanel } from "@/components/notifications/ABTestingPanel";

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("campaigns");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Push Notification Center</h1>
          <p className="text-muted-foreground mt-1">
            Create and manage push notification campaigns
          </p>
        </div>
        <Button className="gradient-primary">
          <Plus className="mr-2 h-4 w-4" />
          New Campaign
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Sent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">45,234</p>
            <p className="text-xs text-muted-foreground mt-1">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Delivered
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-success">43,891</p>
            <p className="text-xs text-muted-foreground mt-1">97.0% delivery rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Opened
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-primary">15,467</p>
            <p className="text-xs text-muted-foreground mt-1">35.2% open rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Conversions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-accent">3,456</p>
            <p className="text-xs text-muted-foreground mt-1">7.8% conversion</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="abtesting">A/B Testing</TabsTrigger>
          <TabsTrigger value="send">Send New</TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns" className="space-y-6 mt-6">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Campaign Creator */}
        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Quick Send
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Title</label>
                <Input placeholder="Notification title..." />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Your message here..." 
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Target Audience</label>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option>All Active Users</option>
                  <option>Recent Buyers</option>
                  <option>Abandoned Carts</option>
                  <option>Inactive Users</option>
                  <option>New Users</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Schedule</label>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option>Send Now</option>
                  <option>Schedule for Later</option>
                </select>
              </div>

              {/* Preview */}
              <div className="rounded-lg border p-4 bg-muted space-y-2">
                <p className="text-xs text-muted-foreground">Preview</p>
                <div className="bg-background rounded-lg p-3 shadow-sm">
                  <div className="flex items-start gap-2">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                      M
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">MinMap</p>
                      <p className="text-xs text-muted-foreground">
                        Your notification message will appear here...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full gradient-primary">
                <Send className="mr-2 h-4 w-4" />
                Send Notification
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Campaign List */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Campaigns</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {pushCampaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="border rounded-lg p-4 hover:border-primary transition-smooth"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{campaign.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {campaign.message}
                      </p>
                    </div>
                    <Badge
                      variant={
                        campaign.status === "Sent" ? "default" : "secondary"
                      }
                    >
                      {campaign.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">Audience</p>
                        <p className="font-medium">{campaign.audience}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">Scheduled</p>
                        <p className="font-medium">{campaign.scheduled}</p>
                      </div>
                    </div>
                  </div>

                  {campaign.status === "Sent" && (
                    <div className="mt-4 pt-4 border-t">
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Delivered</p>
                          <p className="text-lg font-bold text-success">
                            {campaign.delivered}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Opened</p>
                          <p className="text-lg font-bold text-primary">
                            {campaign.opened}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Open Rate</p>
                          <p className="text-lg font-bold text-accent">
                            {campaign.delivered && campaign.opened
                              ? ((campaign.opened / campaign.delivered) * 100).toFixed(1)
                              : 0}%
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {campaign.status === "Scheduled" && (
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          Estimated reach: {campaign.estimatedReach.toLocaleString()} users
                        </p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-destructive">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
        </TabsContent>

        <TabsContent value="abtesting" className="space-y-6">
          <ABTestingPanel />
        </TabsContent>

        <TabsContent value="send" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Send New Campaign</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Campaign creation form will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Notifications;
