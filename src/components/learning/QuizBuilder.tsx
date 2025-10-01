import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plus, GripVertical, X, CheckCircle2 } from "lucide-react";
import { mockQuizzes } from "@/lib/mockData";

export const QuizBuilder = () => {
  return (
    <div className="space-y-6">
      {/* Existing Quizzes */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Existing Quizzes</CardTitle>
            <Button className="gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              Create Quiz
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {mockQuizzes.map((quiz) => (
              <Card key={quiz.id} className="hover:shadow-lg transition-smooth">
                <CardContent className="pt-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">{quiz.title}</h4>
                      <Badge variant="outline" className="mt-1">
                        {quiz.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-3 border-t">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Questions</p>
                      <p className="text-xl font-bold">{quiz.questions}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Completions</p>
                      <p className="text-xl font-bold">{quiz.completions}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Avg Score</p>
                      <p className="text-xl font-bold text-success">{quiz.avgScore}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quiz Builder */}
      <Card>
        <CardHeader>
          <CardTitle>Build New Quiz</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Quiz Metadata */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="quiz-title">Quiz Title</Label>
              <Input id="quiz-title" placeholder="Enter quiz title..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quiz-category">Category</Label>
              <select 
                id="quiz-category"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option>Health & Safety</option>
                <option>Nutrition</option>
                <option>Education</option>
              </select>
            </div>
          </div>

          {/* Question 1 - Multiple Choice */}
          <Card className="border-primary/30">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-2 flex-1">
                  <GripVertical className="h-5 w-5 text-muted-foreground mt-1 cursor-move" />
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">Multiple Choice</Badge>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <Input placeholder="Enter your question..." />
                    
                    <div className="space-y-2">
                      {[1, 2, 3, 4].map((option) => (
                        <div key={option} className="flex items-center gap-3 p-3 rounded-lg border">
                          <Checkbox id={`q1-option-${option}`} />
                          <Input 
                            placeholder={`Option ${option}`}
                            className="border-0 p-0 h-auto focus-visible:ring-0"
                          />
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                      <Button variant="outline" size="sm" className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Option
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Question 2 - True/False */}
          <Card className="border-primary/30">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-2 flex-1">
                  <GripVertical className="h-5 w-5 text-muted-foreground mt-1 cursor-move" />
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">True/False</Badge>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <Input placeholder="Enter your question..." />
                    
                    <RadioGroup defaultValue="true" className="space-y-2">
                      <div className="flex items-center gap-3 p-3 rounded-lg border">
                        <RadioGroupItem value="true" id="true" />
                        <Label htmlFor="true" className="flex-1 cursor-pointer">True</Label>
                        <CheckCircle2 className="h-5 w-5 text-success" />
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg border">
                        <RadioGroupItem value="false" id="false" />
                        <Label htmlFor="false" className="flex-1 cursor-pointer">False</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Add Question Button */}
          <Button variant="outline" className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Add Question
          </Button>

          {/* Save Buttons */}
          <div className="flex gap-3">
            <Button className="flex-1 gradient-primary">
              Save & Publish
            </Button>
            <Button variant="outline" className="flex-1">
              Save as Draft
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
