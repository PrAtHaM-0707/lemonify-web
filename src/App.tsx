import React from 'react';
import { Bot, Shield, MessageSquare, BarChart3, Bell, Settings, ExternalLink, Zap, Ticket, Pin, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import FeatureCard from './components/FeatureCard';

function App() {
  const features = [
    { icon: Bell, title: 'Welcome System', description: 'Customize welcome messages and greet new members in style' },
    { icon: Shield, title: 'AutoMod', description: 'Automatic content moderation to keep your server safe' },
    { icon: BarChart3, title: 'Levelling', description: 'Engage your community with XP and level progression' },
    { icon: MessageSquare, title: 'Moderation', description: 'Powerful tools to manage and moderate your server' },
    { icon: Settings, title: 'Logging', description: 'Comprehensive logging of all server activities' },
    { icon: Ticket, title: 'Ticket System', description: 'Streamline support with an advanced ticket management system' },
    { icon: Pin, title: 'Sticky Messages', description: 'Keep important messages pinned to your channels automatically' },
    { icon: Users, title: 'Join to Create', description: 'Dynamic voice channels that users can create on demand' },
    { icon: Zap, title: 'Fast & Reliable', description: '99.9% uptime with lightning-fast response times' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] opacity-10 mix-blend-overlay"></div>
      <Navbar />
      
     
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-7xl py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Meet <span className="text-yellow-300">Lemonify</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              The all-in-one Discord bot that brings life to your server with powerful moderation,
              engaging features, and seamless automation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://discord.com/oauth2/authorize?client_id=1252893802193096806&permissions=8&integration_type=0&scope=bot+applications.commands"
                className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:from-yellow-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 transition-all duration-200 flex items-center gap-2 hover:shadow-yellow-500/25"
              >
                <Bot className="w-5 h-5" />
                Add to Discord
              </a>
              <a
                href="https://discord.gg/gjKsAeBuUF"
                className="rounded-full bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Join Our Server
              </a>
            </div>
          </div>
        </div>
      </div>

    
      <div id="features" className="py-24 sm:py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Everything you need in one bot
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Lemonify comes packed with all the essential features to make your Discord server thrive.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:gap-y-12 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;