export default function dashboard() {
  return (
    <div>
      <header className="antialiased">
        <nav className="bg-gray-500 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex justify-start items-center">
              <a href="https://flowbite.com" className="flex mr-4">
                <img
                  src="https://flowbite.s3.amazonaws.com/logo.svg"
                  className="mr-3 h-8"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Worksheet Management
                </span>
              </a>
            </div>
            <div className="px-0 lg:py-3 lg:px-6">
              <div className="flex items-center">
                <ul className="flex flex-col mt-0 w-full text-sm font-medium lg:mr-6 lg:flex-row">
                  <li className="block border-b dark:border-gray-800 lg:hidden">
                    <button
                      type="button"
                      data-dropdown-toggle="userDropdown"
                      className="flex justify-between items-center py-3 px-4 w-full text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                    >
                      <span>
                        Account{" "}
                        <span className="ml-2 text-base text-gray-500 dark:text-gray-400">
                          Bonnie @ 1234-567-890
                        </span>
                      </span>
                      <svg
                        className="w-2.5 h-2.5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        {" "}
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                        />{" "}
                      </svg>
                    </button>
                  </li>
                  <li className="block border-b dark:border-gray-800 lg:hidden">
                    <button
                      type="button"
                      data-dropdown-toggle="regionDropdown"
                      className="flex justify-between items-center py-3 px-4 w-full text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                    >
                      <span>
                        Regions{" "}
                        <span className="ml-2 text-base text-gray-500 dark:text-gray-400">
                          US East (N. Virginia)
                        </span>
                      </span>
                      <svg
                        className="w-2.5 h-2.5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        {" "}
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                        />{" "}
                      </svg>
                    </button>
                  </li>
                  <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0 lg:mr-8">
                    <a
                      href="/dashboard"
                      className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0 lg:mr-8">
                    <a
                      href="/worksheet"
                      className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                    >
                      Worksheet
                    </a>
                  </li>
                  {/* <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0 lg:mr-8">
                  <a
                    href="#"
                    className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                  >
                    Team
                  </a>
                </li> */}
                  {/* <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0 lg:mr-8">
                  <a
                    href="#"
                    className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                  >
                    Features
                  </a>
                </li> */}
                  {/* <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0 lg:mr-8">
                  <a
                    href="#"
                    className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                  >
                    Marketplace
                  </a>
                </li> */}
                  {/* <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0 lg:mr-8">
                  <a
                    href="#"
                    className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                  >
                    Resources
                  </a>
                </li> */}
                  {/* <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0 lg:mr-8">
                  <a
                    href="#"
                    className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                  >
                    Forum
                  </a>
                </li> */}
                  {/* <li className="block lg:inline">
                  <a
                    href="#"
                    className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                  >
                    Support
                  </a>
                </li> */}
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <nav
          id="toggleMobileMenu"
          className="hidden bg-white lg:bg-gray-50 lg:dark:bg-gray-800 dark:bg-gray-900 lg:block"
        ></nav>
      </header>
    </div>
  );
}
