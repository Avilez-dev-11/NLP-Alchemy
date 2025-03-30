
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full py-16 px-6 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        <span className="text-cyber-cyan glow-cyan">LLMs</span> - You Can't <span className="text-cyber-purple glow-purple">Please</span> Them All
      </h1>
      <p className="text-xl md:text-2xl max-w-3xl mb-10 text-gray-300">
        Exploring the limits of AI safety through systematic jailbreak attempts on language models.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Button 
          className="bg-cyber-cyan hover:bg-opacity-80 text-black font-bold"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          View Results
        </Button>
        <Button 
          variant="outline" 
          className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:bg-opacity-10 border-glow-purple"
        >
          Learn Methodology
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
