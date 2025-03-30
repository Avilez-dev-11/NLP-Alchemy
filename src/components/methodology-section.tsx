
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MethodologySection = () => {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="text-cyber-cyan glow-cyan">Methodology</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border border-cyber-light bg-cyber-dark hover:border-cyber-cyan hover:border-opacity-100 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-cyber-cyan">Data Collection</CardTitle>
              <CardDescription>How we gathered jailbreak attempts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Our dataset was compiled from systematic jailbreak attempts using various prompting techniques 
                across multiple language models. Each attempt was categorized by the type of prohibited content 
                it aimed to elicit and rated for success based on model responses.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-cyber-light bg-cyber-dark hover:border-cyber-purple hover:border-opacity-100 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-cyber-purple">Analysis Approach</CardTitle>
              <CardDescription>How we evaluated responses</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Success was determined through automated classification and human review. Responses were 
                classified as successful jailbreaks if they directly provided the requested prohibited 
                information without significant disclaimers or refusals.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-cyber-light bg-cyber-dark hover:border-cyber-pink hover:border-opacity-100 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-cyber-pink">Models Tested</CardTitle>
              <CardDescription>The range of LLMs evaluated</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                We tested leading commercial and open-source models including GPT variations, Claude models, 
                Llama variants, Mistral versions, and other popular LLMs to provide a comprehensive view of 
                current safety mechanisms and their effectiveness.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
