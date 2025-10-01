import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Monitor, Palette, LayoutGrid, Image, Menu, GripVertical } from "lucide-react";
import { mobileAppSections } from "@/lib/mockData";

const MobileApp = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Mobile App Control Center</h1>
        <p className="text-muted-foreground mt-1">
          Customize your mobile app appearance and features
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Live Preview */}
        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Live Preview</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Smartphone className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Monitor className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mx-auto w-[280px] h-[580px] bg-muted rounded-3xl border-8 border-foreground/20 overflow-hidden relative">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground/20 rounded-b-xl z-10" />
                
                {/* Phone screen content */}
                <div className="h-full overflow-y-auto bg-background p-4 space-y-4">
                  {/* Status bar */}
                  <div className="flex items-center justify-between text-xs pt-4">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 rounded-full bg-primary" />
                      <div className="w-4 h-4 rounded-full bg-primary" />
                      <div className="w-4 h-4 rounded-full bg-primary/50" />
                    </div>
                  </div>

                  {/* Hero */}
                  <div className="h-32 rounded-lg gradient-primary flex items-center justify-center text-white">
                    <div className="text-center">
                      <h3 className="font-bold">Summer Sale</h3>
                      <p className="text-xs mt-1">Up to 40% off</p>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="grid grid-cols-4 gap-2">
                    {['Toys', 'Clothes', 'Safety', 'Food'].map(cat => (
                      <div key={cat} className="text-center">
                        <div className="h-12 w-12 mx-auto rounded-lg bg-muted flex items-center justify-center mb-1">
                          <LayoutGrid className="h-5 w-5" />
                        </div>
                        <span className="text-xs">{cat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Products */}
                  <div>
                    <h4 className="font-semibold mb-2">Featured Products</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[1, 2].map(i => (
                        <div key={i} className="border rounded-lg overflow-hidden">
                          <div className="aspect-square bg-muted" />
                          <div className="p-2">
                            <p className="text-xs font-medium line-clamp-1">Product Name</p>
                            <p className="text-xs text-muted-foreground">$29.99</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <div className="lg:col-span-2 space-y-6">
          {/* Theme Customizer */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                <CardTitle>Theme & Branding</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Primary Color</label>
                  <div className="flex gap-2">
                    <div className="h-10 w-10 rounded-lg bg-primary border-2 border-foreground cursor-pointer" />
                    <div className="h-10 w-10 rounded-lg bg-secondary border cursor-pointer" />
                    <div className="h-10 w-10 rounded-lg bg-accent border cursor-pointer" />
                    <Button variant="outline" size="icon" className="h-10 w-10">
                      <Palette className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">App Icon</label>
                  <div className="flex gap-2">
                    <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold cursor-pointer border-2 border-foreground">
                      M
                    </div>
                    <Button variant="outline" size="icon" className="h-10 w-10">
                      <Image className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Homepage Builder */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LayoutGrid className="h-5 w-5" />
                  <CardTitle>Homepage Sections</CardTitle>
                </div>
                <Button variant="outline" size="sm">
                  Add Section
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {mobileAppSections.map((section) => (
                  <div
                    key={section.id}
                    className="flex items-center justify-between p-3 rounded-lg border hover:border-primary transition-smooth"
                  >
                    <div className="flex items-center gap-3">
                      <GripVertical className="h-4 w-4 text-muted-foreground cursor-move" />
                      <div>
                        <p className="font-medium">{section.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {section.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            Order: {section.order}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Switch checked={section.visible} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Feature Toggles */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Menu className="h-5 w-5" />
                <CardTitle>Feature Controls</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Push Notifications", description: "Send promotional alerts", enabled: true },
                  { name: "In-App Chat", description: "Customer support messaging", enabled: true },
                  { name: "Dark Mode", description: "Allow users to switch themes", enabled: false },
                  { name: "Guest Checkout", description: "Checkout without account", enabled: true },
                  { name: "Social Login", description: "Sign in with Google/Apple", enabled: true },
                  { name: "Wishlist", description: "Save favorite products", enabled: true },
                ].map((feature) => (
                  <div
                    key={feature.name}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-smooth"
                  >
                    <div>
                      <p className="font-medium">{feature.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                    <Switch checked={feature.enabled} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
