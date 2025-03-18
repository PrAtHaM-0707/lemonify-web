import React from 'react';
import Navbar from '../components/Navbar';

function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] opacity-10 mix-blend-overlay"></div>
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-16 relative">
        <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
        
        <div className="prose prose-invert">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
          <p className="mb-6 text-white/80">
            We collect certain information when you use Lemonify. This includes server IDs, channel IDs,
            and message content necessary for bot functionality. We do not collect or store personal messages
            or sensitive information.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
          <p className="mb-6 text-white/80">
            The information we collect is used solely for providing and improving Lemonify's features.
            This includes moderation, welcome messages, ticket system, and other bot functionalities.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">3. Data Security</h2>
          <p className="mb-6 text-white/80">
            We implement appropriate security measures to protect your information. Access to data is
            strictly limited to bot administrators and is never shared with third parties.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">4. Your Rights</h2>
          <p className="mb-6 text-white/80">
            You have the right to request deletion of your server's data at any time. Contact us through
            our support server to exercise this right.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">5. Updates to This Policy</h2>
          <p className="mb-6 text-white/80">
            We may update this privacy policy from time to time. We will notify users of any material
            changes through our Discord support server.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;