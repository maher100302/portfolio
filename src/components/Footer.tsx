
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="text-red-400" size={16} fill="currentColor" />
            <span>and</span>
            <Code className="text-blue-400" size={16} />
            <span>by Maher Alaya</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Maher Alaya. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;