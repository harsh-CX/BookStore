import React, {useState} from "react";
import Image from "next/image";
import logo4 from "./../../images/logo4.png"
import Link from "next/link"
import { useRouter } from 'next/router';

const Navbar=({bookData})=>{

    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

  const handleSearch = (e) => {
    // e.preventDefault();
  
    router.push({
        pathname: '/ResultPage',
        query: { term: searchTerm},
      });
      setSearchTerm('');
    };
    return(
        <>
       <nav className="bg-white h-20 mt-4">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              <div>
  <Image
    src={logo4}
    alt="Your Alternative Text"
    width={150}  // Set the width according to your design requirements
    height={100} // Set the height according to your design requirements
    className=" mt-4 border-gray-500"  // Add additional styling classes
  />
</div>
              </div>

              <div className="relative ml-8">
             
                <input
                  type="search"
                  placeholder="Title or ISBN number.."
                  onChange={(e)=> setSearchTerm(e.target.value)}
                  id="default-search"
                  className=" mt-4 block w-full md:w-96  p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-2 border-black "
                  required
                  
                />
                {/* </form> */}
                <svg
                onClick={handleSearch}
                  className="mt-5 absolute w-4 h-4 right-3 top-3 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>

            <div className="hidden lg:block   ">
              <div className="flex items-center space-x-4">
                <a
                  href="/"
                  className="mt-3 text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-base font-serif"
                >
                  Best Sellers
                </a>
                <Link
                  href="/"
                  className="mt-3 text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-base font-serif"
                >
                  Fiction Books
                </Link>
                <a
                  href="/"
                  className="mt-3 text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-base font-serif"
                >
                 Non-Fiction Books
                </a>
                <Link
                  href="/"
                  className="mt-3 text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-base font-serif"
                >
                  Request a Book
                </Link>
                
                
               

          
              </div>
            </div>

          
          </div>
        </div>
      </nav>
        </>
    )
}

export default Navbar;