import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Menu } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const { toast } = useToast();

  const handleNav = (href: string) => {
    // This would be replaced with proper navigation in a multi-page app
    toast({
      title: "Navigation",
      description: `Navigating to ${href}`,
    });
  };

  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b border-cyber-light bg-cyber-dark/90 backdrop-blur-sm fixed top-0 z-50">
      <div className="flex items-center gap-4">
        {/* Logo and Title */}
        <img 
          src="/assets/logo-sub.png" 
          alt="NLP Alchemy Logo" 
          className="h-10 w-10 rounded-full hover:glow-cyan transition-all"
        />
        <div className="flex items-center">
          <Shield className="h-8 w-8 text-cyber-cyan mr-2" />
          <h1 className="text-xl font-bold">
            <span className="text-cyber-pink glow-pink">NLP</span>{" "}
            <span className="text-cyber-cyan glow-cyan">Alchemy</span>{" "}
            <span className="text-cyber-purple glow-purple">Jailbreak</span>
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6">
        <Button 
          variant="ghost" 
          onClick={() => handleNav('overview')} 
          className="text-foreground hover:text-cyber-cyan hover:bg-cyber-light/20 transition-colors"
        >
          Overview
        </Button>
        <Button variant="ghost" onClick={() => handleNav('methodology')} className="text-foreground hover:text-cyber-cyan hover:bg-cyber-light">
          Methodology
        </Button>
        <Button variant="ghost" onClick={() => handleNav('data')} className="text-foreground hover:text-cyber-cyan hover:bg-cyber-light">
          Data
        </Button>
        <Button variant="ghost" onClick={() => handleNav('examples')} className="text-foreground hover:text-cyber-cyan hover:bg-cyber-light">
          Examples
        </Button>
      </nav>

      {/* Mobile Menu Button */}
      <Button 
        variant="ghost" 
        className="md:hidden hover:bg-cyber-light/20" 
        size="icon"
      >
        <Menu className="h-6 w-6 text-cyber-cyan" />
      </Button>
    </header>
  );
};

export default Header;
