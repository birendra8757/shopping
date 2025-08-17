import { Search, Phone, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <header className='bg-gray-100 py-3 border-b fixed top-0 left-0 right-0 z-50 shadow-sm'>
      <div className='max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6'>
        {/* Left: Logo */}
        <div className='flex items-center space-x-2'>
          <Link to={"/"}>
            <img src='/logo.jpeg' alt='Quantum Web' className='h-6' />
          </Link>
        </div>

        {/* Center: Search */}
        <form onSubmit={handleSearch} className='flex w-full max-w-lg mx-6'>
          <input
            type='text'
            placeholder='Search...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
          />
          <button
            type='submit'
            className='bg-black text-white px-4 flex items-center justify-center rounded-r-md'
          >
            <Search className='h-5 w-5' />
          </button>
        </form>

        {/* Right: Call */}
        <div className='flex items-center space-x-6'>
          <div className='flex items-center space-x-2'>
            <Phone className='h-5 w-5 text-yellow-500' />
            <div>
              <span className='block font-semibold'>Call To</span>
              <div className='flex items-center space-x-1'>
                <a
                  href='tel:+18444033240'
                  className='text-sm whitespace-nowrap  hover:text-blue-600'
                >
                  +1 (844)-403-3240 /
                </a>
                <a
                  href='mailto:abc@gmail.com'
                  className='text-sm flex items-center whitespace-nowrap  hover:text-blue-600'
                >
                  <Mail className='h-4 w-4 mr-1 text-gray-500 ' />
                  abc@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5 text-yellow-500" />
            <div>
              <span className="block font-semibold">Call To</span>
              <a href="tel:+18444033240" className="text-sm">
                +1 (844)-403-3240 /
              </a>
               <Mail className="h-4 w-4 mr-1 text-gray-500" />
              <a href="mailto:abc@gmail.com" className="text-sm ml-1">
                
                abc@gmail.com
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
}
