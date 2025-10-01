import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, Eye, Clock, Upload, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mockVideos } from "@/lib/mockData";

export const VideoLibrary = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Video Library</CardTitle>
            <Button className="gradient-primary">
              <Upload className="h-4 w-4 mr-2" />
              Upload Video
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockVideos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-smooth">
                {/* Video Thumbnail */}
                <div className="aspect-video bg-muted flex items-center justify-center relative group cursor-pointer">
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {video.duration}
                  </div>
                </div>

                <CardContent className="p-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-semibold line-clamp-2">{video.title}</h4>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Details</DropdownMenuItem>
                        <DropdownMenuItem>View Analytics</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Delete Video
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <p className="text-sm text-muted-foreground">by {video.author}</p>

                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {video.category}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{video.views.toLocaleString()}</span>
                    </div>
                    <span>{video.publishDate}</span>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Upload Card */}
            <Card className="border-2 border-dashed hover:border-primary transition-smooth cursor-pointer">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center p-6">
                  <Upload className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                  <h4 className="font-semibold mb-1">Upload New Video</h4>
                  <p className="text-sm text-muted-foreground">
                    Click to select or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    MP4, MOV up to 500MB
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Upload Progress Example */}
          <Card className="mt-6 border-primary/50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium">Uploading: baby-sleep-guide.mp4</p>
                    <span className="text-sm text-muted-foreground">67%</span>
                  </div>
                  <Progress value={67} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">
                    234 MB of 350 MB • 2 minutes remaining
                  </p>
                </div>
                <Button variant="outline" size="sm">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};
