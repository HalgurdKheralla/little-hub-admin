import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Percent, DollarSign, Calendar, Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockPromotions, mockDiscountCodes } from "@/lib/mockData";

export const PromotionBuilder = () => {
  return (
    <div className="space-y-6">
      {/* Promotions Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Promotion Campaigns</CardTitle>
            <Button className="gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              Create Campaign
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Discount</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPromotions.map((promo) => (
                <TableRow key={promo.id}>
                  <TableCell className="font-medium">{promo.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{promo.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {promo.type === "Percentage" ? (
                        <Percent className="h-4 w-4 text-accent" />
                      ) : (
                        <DollarSign className="h-4 w-4 text-accent" />
                      )}
                      <span className="font-bold">{promo.value}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{promo.startDate} - {promo.endDate}</span>
                    </div>
                  </TableCell>
                  <TableCell>{promo.products} products</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        promo.status === "Active" ? "default" : "secondary"
                      }
                    >
                      {promo.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Discount Codes Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Discount Codes</CardTitle>
            <Button className="gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              Generate Code
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Discount</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockDiscountCodes.map((code) => (
                <TableRow key={code.id}>
                  <TableCell>
                    <code className="px-2 py-1 rounded bg-muted font-mono text-sm">
                      {code.code}
                    </code>
                  </TableCell>
                  <TableCell className="font-bold">
                    {code.type === "Percentage" ? `${code.discount}%` : code.type}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{code.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <span className="font-medium">{code.uses}</span>
                      {code.limit && (
                        <span className="text-muted-foreground"> / {code.limit}</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{code.expiryDate}</TableCell>
                  <TableCell>
                    <Badge variant="default">{code.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quick Code Generator */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Code Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <Label>Code</Label>
              <Input placeholder="NEWCODE24" />
            </div>
            <div className="space-y-2">
              <Label>Discount %</Label>
              <Input type="number" placeholder="20" />
            </div>
            <div className="space-y-2">
              <Label>Usage Limit</Label>
              <Input type="number" placeholder="100" />
            </div>
            <div className="space-y-2">
              <Label>Expiry Date</Label>
              <Input type="date" />
            </div>
          </div>
          <Button className="mt-4 gradient-primary">Generate & Activate</Button>
        </CardContent>
      </Card>
    </div>
  );
};
