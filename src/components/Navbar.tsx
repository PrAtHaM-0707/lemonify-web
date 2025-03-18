import React from 'react';
import { Diamond as Lemon, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navigation = [
    { name: 'Features', href: '/#features' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Support Server', href: 'https://discord.gg/gjKsAeBuUF' },
  ];

  const handleFeatureClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href === '/#features') {
      e.preventDefault();
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="bg-white/10 backdrop-blur-sm border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              {/* <Lemon className="h-8 w-8 text-yellow-300" /> */}
              <span className="text-xl font-bold text-white">Lemonify</span>
            </Link>
          </div>
          
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleFeatureClick}
                className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://discord.com/oauth2/authorize?client_id=1252893802193096806&permissions=8&integration_type=0&scope=bot+applications.commands"
              className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-yellow-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 transition-all duration-200"
            >
              Add to Discord
            </a>
          </div>

         
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/20 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleFeatureClick}
                className="block rounded-md px-3 py-2 text-base font-medium text-white/80 hover:bg-white/20 hover:text-white"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://discord.com/oauth2/authorize?client_id=1252893802193096806&permissions=8&integration_type=0&scope=bot+applications.commands"
              className="block rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-2 text-base font-medium text-white hover:from-yellow-500 hover:to-orange-600"
            >
              Add to Discord
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;