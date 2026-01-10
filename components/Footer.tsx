
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-cyan flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-charcoal"></div>
              </div>
              <span className="text-xl font-display font-bold text-white">
                FrameCoach
              </span>
            </div>
            <p className="text-lightgrey max-w-xs">
              Empowering directors and solo creators to master light and lens with AI-assisted decision making.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-lightgrey">
              <li><a href="#" className="hover:text-cyan transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Beta Access</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-lightgrey">
              <li><a href="#" className="hover:text-cyan transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-lightgrey text-sm">
            © 2024 FrameCoach Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            {/* Social SVGs typically go here */}
            <div className="w-5 h-5 bg-lightgrey/20 rounded-full"></div>
            <div className="w-5 h-5 bg-lightgrey/20 rounded-full"></div>
            <div className="w-5 h-5 bg-lightgrey/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
