// Icons
import { Menu, Search, BellIcon, PenSquare, ExternalLink } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <div className="block sm:hidden bg-white text-xs text-center py-2 border-b w-full overflow-x-hidden">
        <a href="#" className="inline-flex items-center justify-center text-gray-600 hover:underline gap-1">
          Open in app <ExternalLink size={14} className="inline-block text-gray-500" />
        </a>
      </div>

      <nav className="flex justify-between items-center px-4 md:px-6 py-3 border-b border-gray-200 w-full overflow-x-hidden">

        {/*Logo + Search Box */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Left - Hamburger */}
          <button className="">
            <Menu size={20} className="text-gray-700 hover:text-purple-600" />
          </button>

          <h1 className="text-2xl md:text-3xl font-bold tracking-tight hover:text-purple-600" style={{ fontFamily: "'Playfair Display', serif" }}>
          Medium
          </h1>

          <div className="relative hidden sm:block">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400"
            />
            <input
              type="text"
              placeholder="Search"
              className="border border-white rounded-2xl pl-10 pr-3 py-1 w-40 md:w-52 focus:outline-none bg-slate-50"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <button className="hidden md:flex items-center gap-1 text-sm hover:text-purple-600">
            <PenSquare size={18} className="text-gray-700 hover:text-purple-600" />
            Write
          </button>
          <BellIcon className="hidden md:block w-5 h-5 hover:text-purple-600" />
          <Search className="block sm:hidden w-5 h-5 text-gray-700 hover:text-purple-600 mx-4 " />
          <div className="w-8 h-8 bg-black rounded-full"></div>
        </div>
       </nav>
    </>
    
  );
}
