import React from 'react';
import Navbar from '../components/Navbar';

function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] opacity-10 mix-blend-overlay"></div>
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-16 relative">
        <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
        
        <div className="prose prose-invert">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
          <p className="mb-6 text-white/80">
            By inviting Lemonify to your Discord server, you agree to these terms of service and any
            future modifications.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">2. Use License</h2>
          <p className="mb-6 text-white/80">
            We grant you a revocable, non-exclusive license to use Lemonify in your Discord server(s)
            in accordance with these terms.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">3. Limitations</h2>
          <p className="mb-6 text-white/80">
            You agree not to:
            - Use the bot for any unlawful purpose
            - Attempt to abuse or exploit bot features
            - Reverse engineer or modify the bot
            - Resell or redistribute bot services
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">4. Service Availability</h2>
          <p className="mb-6 text-white/80">
            While we strive for 99.9% uptime, we make no guarantees about the availability of the service
            and reserve the right to modify or discontinue features at any time.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">5. Termination</h2>
          <p className="mb-6 text-white/80">
            We reserve the right to terminate service to any server that violates these terms or Discord's
            Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;