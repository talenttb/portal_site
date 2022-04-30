// import { Fragment } from 'react';
// import { Popover, Transition } from '@headlessui/react';
// import {
//   BookmarkAltIcon,
//   CalendarIcon,
//   ChartBarIcon,
//   CursorClickIcon,
//   MenuIcon,
//   PhoneIcon,
//   PlayIcon,
//   RefreshIcon,
//   ShieldCheckIcon,
//   SupportIcon,
//   ViewGridIcon,
//   XIcon,
// } from '@heroicons/react/outline';
// import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="/"
          >
            <img
              //   className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              //   alt="hero"
              src="/images/yg_logo.png"
            />
            <span className="ml-3 text-xl">鶯歌人本道路</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">
              <Link to="infos">活動</Link>
            </a>
            <a className="mr-5 hover:text-gray-900">
              <Link to="infos">願景</Link>
            </a>
          </nav>
          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </div>
      </header>
    </>
  );
}
