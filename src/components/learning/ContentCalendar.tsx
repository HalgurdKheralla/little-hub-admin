import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { format, addMonths, subMonths } from "date-fns";

interface ContentItem {
  id: string;
  title: string;
  type: "article" | "video" | "quiz";
  date: Date;
  status: "draft" | "scheduled" | "published";
}

export const ContentCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  const contentItems: ContentItem[] = [
    {
      id: "1",
      title: "Getting Started with React",
      type: "article",
      date: new Date(2025, 9, 15),
      status: "published",
    },
    {
      id: "2",
      title: "Advanced TypeScript Patterns",
      type: "video",
      date: new Date(2025, 9, 20),
      status: "scheduled",
    },
    {
      id: "3",
      title: "JavaScript Quiz - Level 1",
      type: "quiz",
      date: new Date(2025, 9, 25),
      status: "draft",
    },
  ];

  const getItemsForDate = (date: Date) => {
    return contentItems.filter(
      (item) =>
        item.date.getDate() === date.getDate() &&
        item.date.getMonth() === date.getMonth() &&
        item.date.getFullYear() === date.getFullYear()
    );
  };

  const selectedDateItems = selectedDate ? getItemsForDate(selectedDate) : [];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "article":
        return "bg-blue-500/10 text-blue-500 border-blue-500";
      case "video":
        return "bg-purple-500/10 text-purple-500 border-purple-500";
      case "quiz":
        return "bg-green-500/10 text-green-500 border-green-500";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "published":
        return "default";
      case "scheduled":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <CardTitle>{format(currentMonth, "MMMM yyyy")}</CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            month={currentMonth}
            onMonthChange={setCurrentMonth}
            className="rounded-md border"
            modifiers={{
              hasContent: (date) => getItemsForDate(date).length > 0,
            }}
            modifiersClassNames={{
              hasContent: "bg-primary/10 font-bold",
            }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>
            {selectedDate ? format(selectedDate, "MMM dd, yyyy") : "Select a date"}
          </CardTitle>
          <Button size="sm" className="gradient-primary">
            <Plus className="mr-2 h-4 w-4" />
            Add Content
          </Button>
        </CardHeader>
        <CardContent>
          {selectedDateItems.length > 0 ? (
            <div className="space-y-3">
              {selectedDateItems.map((item) => (
                <div
                  key={item.id}
                  className="p-3 border rounded-lg hover:bg-muted/50 transition-smooth"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className="font-medium">{item.title}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className={getTypeColor(item.type)}>
                          {item.type}
                        </Badge>
                        <Badge variant={getStatusVariant(item.status)}>
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>No content scheduled for this date</p>
              <Button variant="link" className="mt-2">
                Schedule content
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
