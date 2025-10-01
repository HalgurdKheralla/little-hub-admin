import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Plus, Save, Trash2, GripVertical } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const FAQBuilder = () => {
  const { toast } = useToast();
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: "1",
      question: "What are your shipping options?",
      answer: "We offer standard shipping (5-7 days) and express shipping (2-3 days).",
    },
    {
      id: "2",
      question: "What is your return policy?",
      answer: "You can return items within 30 days of purchase for a full refund.",
    },
  ]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const addFAQ = () => {
    const newFAQ: FAQ = {
      id: Date.now().toString(),
      question: "",
      answer: "",
    };
    setFaqs([...faqs, newFAQ]);
  };

  const updateFAQ = (id: string, field: "question" | "answer", value: string) => {
    setFaqs(
      faqs.map((faq) =>
        faq.id === id ? { ...faq, [field]: value } : faq
      )
    );
  };

  const deleteFAQ = (id: string) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
    toast({
      title: "FAQ deleted",
      description: "The FAQ item has been removed.",
    });
  };

  const handleSave = () => {
    toast({
      title: "FAQs saved",
      description: "All FAQ items have been saved successfully.",
    });
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newFaqs = [...faqs];
    const draggedItem = newFaqs[draggedIndex];
    newFaqs.splice(draggedIndex, 1);
    newFaqs.splice(index, 0, draggedItem);
    
    setFaqs(newFaqs);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>FAQ Builder</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" onClick={addFAQ}>
            <Plus className="mr-2 h-4 w-4" />
            Add FAQ
          </Button>
          <Button onClick={handleSave} className="gradient-primary">
            <Save className="mr-2 h-4 w-4" />
            Save All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
            className={`p-4 border rounded-lg space-y-3 ${
              draggedIndex === index ? "opacity-50" : ""
            }`}
          >
            <div className="flex items-start gap-2">
              <GripVertical className="h-5 w-5 text-muted-foreground mt-7 cursor-move" />
              <div className="flex-1 space-y-3">
                <div className="space-y-2">
                  <Label htmlFor={`question-${faq.id}`}>Question</Label>
                  <Input
                    id={`question-${faq.id}`}
                    value={faq.question}
                    onChange={(e) => updateFAQ(faq.id, "question", e.target.value)}
                    placeholder="Enter question..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`answer-${faq.id}`}>Answer</Label>
                  <Textarea
                    id={`answer-${faq.id}`}
                    value={faq.answer}
                    onChange={(e) => updateFAQ(faq.id, "answer", e.target.value)}
                    placeholder="Enter answer..."
                    rows={3}
                  />
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteFAQ(faq.id)}
                className="mt-7"
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
          </div>
        ))}
        
        {faqs.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No FAQ items yet. Click "Add FAQ" to get started.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
