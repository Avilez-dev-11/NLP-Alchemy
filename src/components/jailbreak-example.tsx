
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Check } from 'lucide-react';

interface JailbreakExampleProps {
  modelName: string;
  prompt: string;
  response: string;
  category: 'ethics' | 'legal' | 'harm' | 'bias';
  success: boolean;
}

const getCategoryColor = (category: 'ethics' | 'legal' | 'harm' | 'bias'): string => {
  switch(category) {
    case 'ethics': return 'bg-cyber-cyan text-black';
    case 'legal': return 'bg-cyber-purple text-black';
    case 'harm': return 'bg-cyber-pink text-black';
    case 'bias': return 'bg-cyber-green text-black';
    default: return 'bg-cyber-cyan text-black';
  }
};

const JailbreakExample: React.FC<JailbreakExampleProps> = ({
  modelName,
  prompt,
  response,
  category,
  success,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="border border-cyber-light bg-cyber-darker hover:border-opacity-100 transition-all duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{modelName}</CardTitle>
            <CardDescription className="mt-1">Jailbreak Attempt</CardDescription>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className={getCategoryColor(category)}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Badge>
            <Badge variant={success ? "default" : "outline"} className={success ? "bg-cyber-green text-black" : "border-destructive text-destructive"}>
              {success ? "Success" : "Failed"}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-semibold text-cyber-cyan">Prompt</h4>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6" 
              onClick={() => handleCopy(prompt)}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          <div className="bg-cyber-light p-3 rounded-md text-sm font-mono whitespace-pre-wrap">
            {prompt}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-cyber-purple mb-2">Response</h4>
          <div className="bg-cyber-light p-3 rounded-md text-sm font-mono whitespace-pre-wrap">
            {response}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JailbreakExample;
