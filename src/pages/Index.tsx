
import React, { useState } from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ModelStatCard from '@/components/model-stat-card';
import JailbreakExample from '@/components/jailbreak-example';
import SummaryStats from '@/components/summary-stats';
import MethodologySection from '@/components/methodology-section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getModels, getJailbreakExamples, getSummaryData } from '@/lib/data';

const Index = () => {
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'ethics' | 'legal' | 'harm' | 'bias'>('all');

  const models = getModels();
  const examples = getJailbreakExamples();
  const summaryData = getSummaryData();

  const filteredExamples = categoryFilter === 'all' 
    ? examples 
    : examples.filter(example => example.category === categoryFilter);

  return (
    <div className="min-h-screen bg-cyber-dark matrix-bg">
      <Header />
      
      <main className="container mx-auto px-4">
        <HeroSection />
        
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-cyber-purple glow-purple">Research</span> <span className="text-cyber-cyan glow-cyan">Overview</span>
          </h2>
          
          <SummaryStats 
            totalModels={summaryData.totalModels}
            totalAttempts={summaryData.totalAttempts}
            avgSuccessRate={summaryData.avgSuccessRate}
            mostVulnerable={summaryData.mostVulnerable}
            mostResistant={summaryData.mostResistant}
          />
        </section>
        
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-cyber-cyan glow-cyan">Model</span> <span className="text-cyber-purple glow-purple">Vulnerability</span> <span className="text-white">Analysis</span>
          </h2>
          
          <Tabs defaultValue="ethics" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-cyber-light">
              <TabsTrigger value="ethics" className="data-[state=active]:bg-cyber-cyan data-[state=active]:text-black">Ethics</TabsTrigger>
              <TabsTrigger value="legal" className="data-[state=active]:bg-cyber-purple data-[state=active]:text-black">Legal</TabsTrigger>
              <TabsTrigger value="harm" className="data-[state=active]:bg-cyber-pink data-[state=active]:text-black">Harm</TabsTrigger>
              <TabsTrigger value="bias" className="data-[state=active]:bg-cyber-green data-[state=active]:text-black">Bias</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ethics" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {models.map(model => (
                  <ModelStatCard 
                    key={`ethics-${model.id}`}
                    modelName={model.name}
                    successRate={model.stats.ethics}
                    totalAttempts={model.stats.totalAttempts}
                    category="ethics"
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="legal" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {models.map(model => (
                  <ModelStatCard 
                    key={`legal-${model.id}`}
                    modelName={model.name}
                    successRate={model.stats.legal}
                    totalAttempts={model.stats.totalAttempts}
                    category="legal"
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="harm" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {models.map(model => (
                  <ModelStatCard 
                    key={`harm-${model.id}`}
                    modelName={model.name}
                    successRate={model.stats.harm}
                    totalAttempts={model.stats.totalAttempts}
                    category="harm"
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="bias" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {models.map(model => (
                  <ModelStatCard 
                    key={`bias-${model.id}`}
                    modelName={model.name}
                    successRate={model.stats.bias}
                    totalAttempts={model.stats.totalAttempts}
                    category="bias"
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        <MethodologySection />
        
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-cyber-cyan glow-cyan">Example</span> <span className="text-cyber-purple glow-purple">Jailbreaks</span>
          </h2>
          
          <div className="flex justify-end mb-6">
            <div className="w-full max-w-xs">
              <Select 
                onValueChange={(value) => setCategoryFilter(value as any)} 
                defaultValue="all"
              >
                <SelectTrigger className="bg-cyber-dark border-cyber-light">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent className="bg-cyber-dark border-cyber-light">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="ethics">Ethics</SelectItem>
                  <SelectItem value="legal">Legal</SelectItem>
                  <SelectItem value="harm">Harm</SelectItem>
                  <SelectItem value="bias">Bias</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredExamples.map(example => (
              <JailbreakExample 
                key={example.id}
                modelName={example.modelName}
                prompt={example.prompt}
                response={example.response}
                category={example.category}
                success={example.success}
              />
            ))}
          </div>
        </section>
      </main>
      
      <footer className="border-t border-cyber-light py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>LLMs: You Can't Please Them All - Kaggle Competition Results</p>
          <p className="mt-2">© {new Date().getFullYear()} - Data presented for research purposes only</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
