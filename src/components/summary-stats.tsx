
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SummaryStatsProps {
  totalModels: number;
  totalAttempts: number;
  avgSuccessRate: number;
  mostVulnerable: {
    model: string;
    rate: number;
  };
  mostResistant: {
    model: string;
    rate: number;
  };
}

const SummaryStats: React.FC<SummaryStatsProps> = ({
  totalModels,
  totalAttempts,
  avgSuccessRate,
  mostVulnerable,
  mostResistant,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="border border-cyber-light bg-cyber-dark">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-muted-foreground">Total Models Tested</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-cyber-cyan glow-cyan">{totalModels}</p>
        </CardContent>
      </Card>
      
      <Card className="border border-cyber-light bg-cyber-dark">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-muted-foreground">Total Jailbreak Attempts</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-cyber-purple glow-purple">{totalAttempts}</p>
        </CardContent>
      </Card>
      
      <Card className="border border-cyber-light bg-cyber-dark">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-muted-foreground">Average Success Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-cyber-green">{avgSuccessRate}%</p>
        </CardContent>
      </Card>
      
      <Card className="border border-cyber-light bg-cyber-dark">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-muted-foreground">Model Vulnerability</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between items-center">
              <span className="text-xs">Most Vulnerable</span>
              <Badge className="bg-cyber-pink text-black">{mostVulnerable.rate}%</Badge>
            </div>
            <p className="text-lg font-semibold">{mostVulnerable.model}</p>
          </div>
          
          <div>
            <div className="flex justify-between items-center">
              <span className="text-xs">Most Resistant</span>
              <Badge variant="outline" className="border-cyber-green text-cyber-green">{mostResistant.rate}%</Badge>
            </div>
            <p className="text-lg font-semibold">{mostResistant.model}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryStats;
