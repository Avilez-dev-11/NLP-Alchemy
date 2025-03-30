
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { InfoIcon } from 'lucide-react';

interface ModelStatCardProps {
  modelName: string;
  successRate: number;
  totalAttempts: number;
  category: 'ethics' | 'legal' | 'harm' | 'bias';
}

const getCategoryColor = (category: 'ethics' | 'legal' | 'harm' | 'bias'): string => {
  switch(category) {
    case 'ethics': return 'bg-cyber-cyan';
    case 'legal': return 'bg-cyber-purple';
    case 'harm': return 'bg-cyber-pink';
    case 'bias': return 'bg-cyber-green';
    default: return 'bg-cyber-cyan';
  }
};

const getCategoryLabel = (category: 'ethics' | 'legal' | 'harm' | 'bias'): string => {
  switch(category) {
    case 'ethics': return 'Ethical Violations';
    case 'legal': return 'Legal Infractions';
    case 'harm': return 'Harmful Content';
    case 'bias': return 'Biased Responses';
    default: return 'Jailbreak Success';
  }
};

const ModelStatCard: React.FC<ModelStatCardProps> = ({ modelName, successRate, totalAttempts, category }) => {
  return (
    <Card className="border border-cyber-light bg-cyber-dark hover:border-opacity-100 hover:border-glow-cyan transition-all duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between items-center">
          <span>{modelName}</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Based on {totalAttempts} jailbreak attempts</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span>{getCategoryLabel(category)}</span>
            <span className="font-bold">{successRate}%</span>
          </div>
          <div className="progress-container">
            <div 
              className={`progress-fill ${getCategoryColor(category)}`} 
              style={{ width: `${successRate}%` }} 
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModelStatCard;
