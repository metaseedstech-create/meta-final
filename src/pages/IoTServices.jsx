import React, { useEffect } from 'react';
import { useContent } from '../context/ContentContext';
import { Navbar } from '../components/public/Navbar';
import { Footer } from '../components/public/Footer';
import { ArrowRight, Sparkles, CheckCircle2 as CheckCircle } from '../components/Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ThreeGem } from '../components/ThreeGem';

export const IoTServices = ({ onOpenAdmin, onHome }) => {
  const { content } = useContent();
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const iotServices = [
    {
      title: "Smart Home Automation",
      desc: "Comprehensive smart home setups including lighting, security, climate control, and entertainment systems integrated into a single seamless interface.",
      features: ["Voice Assistant Integration", "Energy Management", "Remote Monitoring"],
      stoneName: "Space Stone",
      colorTheme: "blue",
      hexColor: 0x4d9fff
    },
    {
      title: "Industrial IoT (IIoT)",
      desc: "Optimizing manufacturing processes through sensor-based data collection, predictive maintenance, and real-time operational analytics.",
      features: ["Predictive Maintenance", "Asset Tracking", "Quality Control Sensors"],
      stoneName: "Power Stone",
      colorTheme: "purple",
      hexColor: 0xa855f7
    },
    {
      title: "Smart Agriculture",
      desc: "IoT solutions for precision farming, monitoring soil moisture, weather conditions, and automated irrigation to maximize crop yield.",
      features: ["Automated Irrigation", "Climate Sensors", "Yield Prediction"],
      stoneName: "Time Stone",
      colorTheme: "green",
      hexColor: 0x2dd4bf
    },
    {
      title: "Healthcare Monitoring",
      desc: "Wearable and stationary IoT devices for continuous patient monitoring, remote health diagnostics, and emergency alerts.",
      features: ["Remote Patient Monitoring", "Wearable Integration", "Real-time Alerts"],
      stoneName: "Reality Stone",
      colorTheme: "red",
      hexColor: 0xf43f5e
    },
    {
      title: "Smart City Solutions",
      desc: "Implementing intelligent traffic management, smart street lighting, and waste management systems for municipalities.",
      features: ["Traffic Optimization", "Smart Lighting", "Waste Management"],
      stoneName: "Mind Stone",
      colorTheme: "yellow",
      hexColor: 0xfbbf24
    },
    {
      title: "Custom IoT Prototyping",
      desc: "From concept to working prototype, we build custom IoT hardware and software solutions tailored to your unique business needs.",
      features: ["Hardware Prototyping", "Firmware Development", "Cloud Dashboard Integration"],
      stoneName: "Soul Stone",
      colorTheme: "orange",
      hexColor: 0xf97316
    }
  ];

  // Helper to get Tailwind color classes based on the stone color
  const getColorClasses = (color) => {
    const classes = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', shadow: 'hover:shadow-blue-500/30', hoverBg: 'group-hover:bg-blue-600', check: 'text-blue-500', border: 'border-blue-500', fill: 'text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,1)]', core: 'bg-blue-500', aura: 'bg-blue-400' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', shadow: 'hover:shadow-purple-500/30', hoverBg: 'group-hover:bg-purple-600', check: 'text-purple-500', border: 'border-purple-500', fill: 'text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,1)]', core: 'bg-purple-500', aura: 'bg-purple-400' },
      green: { bg: 'bg-emerald-50', text: 'text-emerald-600', shadow: 'hover:shadow-emerald-500/30', hoverBg: 'group-hover:bg-emerald-600', check: 'text-emerald-500', border: 'border-emerald-500', fill: 'text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,1)]', core: 'bg-emerald-500', aura: 'bg-emerald-400' },
      red: { bg: 'bg-rose-50', text: 'text-rose-600', shadow: 'hover:shadow-rose-500/30', hoverBg: 'group-hover:bg-rose-600', check: 'text-rose-500', border: 'border-rose-500', fill: 'text-rose-400 drop-shadow-[0_0_20px_rgba(244,63,94,1)]', core: 'bg-rose-500', aura: 'bg-rose-400' },
      yellow: { bg: 'bg-amber-50', text: 'text-amber-600', shadow: 'hover:shadow-amber-500/30', hoverBg: 'group-hover:bg-amber-500', check: 'text-amber-500', border: 'border-amber-500', fill: 'text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,1)]', core: 'bg-amber-500', aura: 'bg-amber-400' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', shadow: 'hover:shadow-orange-500/30', hoverBg: 'group-hover:bg-orange-600', check: 'text-orange-500', border: 'border-orange-500', fill: 'text-orange-400 drop-shadow-[0_0_20px_rgba(249,115,22,1)]', core: 'bg-orange-500', aura: 'bg-orange-400' },
    };
    return classes[color] || classes.blue;
  };


  return (
    <div data-theme={content.settings.themeColor || 'blue'} className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar onOpenAdmin={onOpenAdmin} />
      
      <main className="pt-24 pb-16 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 md:py-20 lg:py-24 reveal opacity-0 translate-y-8 transition-all duration-1000 [&.visible]:opacity-100 [&.visible]:translate-y-0">
          <div className="relative text-center max-w-3xl mx-auto z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 font-bold text-xs uppercase tracking-wider mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Infinity Level IoT</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Empower Your Business with <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                IoT Superpowers
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10">
              Harness the ultimate forces of the universe. Our cutting-edge Internet of Things (IoT) solutions bring unprecedented control, automation, and intelligence to your reality.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iotServices.map((service, index) => {
              const theme = getColorClasses(service.colorTheme);
              // Calculate a staggered delay for a cascading reveal effect
              const delay = index * 150;
              return (
                <div 
                  key={index}
                  style={{ transitionDelay: `${delay}ms` }}
                  className={`reveal group bg-slate-900/80 backdrop-blur-md rounded-3xl p-8 border ${theme.border} border-opacity-30 shadow-2xl ${theme.shadow} transition-all duration-700 overflow-hidden relative opacity-0 translate-y-12 [&.visible]:opacity-100 [&.visible]:translate-y-0 hover:-translate-y-2`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 ${theme.bg} rounded-full filter blur-[64px] opacity-10 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  <div className="flex justify-between items-start mb-8">
                    {/* Real 3D Three.js Crystal */}
                    <div className="w-16 h-16 group-[.visible]:scale-100 scale-0 opacity-0 group-[.visible]:opacity-100 transition-all duration-1000 ease-out z-10 group-hover:scale-110 flex items-center justify-center relative">
                      <ThreeGem hexColor={service.hexColor} className="animate-float drop-shadow-2xl z-20" />
                    </div>
                    
                    <div className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${theme.bg} bg-opacity-10 ${theme.text} border ${theme.border} border-opacity-50 drop-shadow-md`}>
                      {service.stoneName}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-[.visible]:group-hover:text-transparent group-[.visible]:group-hover:bg-clip-text group-[.visible]:group-hover:bg-gradient-to-r group-[.visible]:group-hover:from-white group-[.visible]:group-hover:to-slate-400 transition-all">{service.title}</h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-sm font-medium text-slate-300">
                        <CheckCircle className={`w-4 h-4 ${theme.check} shrink-0 mt-0.5 drop-shadow-[0_0_5px_currentColor]`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-24 relative z-10 reveal opacity-0 scale-95 transition-all duration-1000 [&.visible]:opacity-100 [&.visible]:scale-100">
          <div className="bg-gradient-to-br from-slate-900 to-black rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"></div>
            
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Ready to Shape Reality?</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Assemble your ultimate IoT ecosystem. Our engineering team is ready to forge your ideas into powerful, connected solutions.
            </p>
            
            <a 
              href="#/contact" 
              onClick={() => { window.location.hash = '#/'; setTimeout(() => { window.location.hash = '#contact'; }, 100); }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(147,51,234,0.4)]"
            >
              <span>Initiate Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      
      <Footer onOpenAdmin={onOpenAdmin} />
    </div>
  );
};

