import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Bold, Italic, List, ListOrdered, Heading1, Heading2, 
  Image as ImageIcon, Link, Save, Eye 
} from "lucide-react";

export const ArticleEditor = () => {
  const [content, setContent] = useState("");

  const toolbarButtons = [
    { icon: Bold, label: "Bold" },
    { icon: Italic, label: "Italic" },
    { icon: Heading1, label: "Heading 1" },
    { icon: Heading2, label: "Heading 2" },
    { icon: List, label: "Bullet List" },
    { icon: ListOrdered, label: "Numbered List" },
    { icon: ImageIcon, label: "Insert Image" },
    { icon: Link, label: "Insert Link" },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Article Editor</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button size="sm" className="gradient-primary">
              <Save className="h-4 w-4 mr-2" />
              Publish
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Article Metadata */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="title">Article Title</Label>
            <Input id="title" placeholder="Enter article title..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <select 
              id="category"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option>Health & Safety</option>
              <option>Nutrition</option>
              <option>Education</option>
              <option>Products</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea 
            id="excerpt"
            placeholder="Brief summary of the article..."
            rows={2}
          />
        </div>

        {/* Rich Text Toolbar */}
        <div className="border rounded-lg p-2 bg-muted/30">
          <div className="flex flex-wrap gap-1">
            {toolbarButtons.map((btn, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                title={btn.label}
              >
                <btn.icon className="h-4 w-4" />
              </Button>
            ))}
          </div>
        </div>

        {/* Content Editor */}
        <div className="space-y-2">
          <Label htmlFor="content">Article Content</Label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing your article..."
            rows={15}
            className="font-mono text-sm"
          />
          <p className="text-xs text-muted-foreground">
            {content.length} characters, ~{Math.ceil(content.split(' ').length / 200)} min read
          </p>
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <Label>Tags</Label>
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge variant="secondary">Baby Sleep</Badge>
            <Badge variant="secondary">Safe Practices</Badge>
            <Badge variant="secondary">New Parents</Badge>
            <Button variant="outline" size="sm">+ Add Tag</Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="space-y-2">
          <Label>Featured Image</Label>
          <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-smooth cursor-pointer">
            <ImageIcon className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              PNG, JPG up to 5MB
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
