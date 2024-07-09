export default function Header() {
  return (
    <header className="bg-[#004D1E] shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <img className="w-16" src="public/logo.png" alt="the logo" />
          <span className="text-xl font-extrabold text-white">Pam Golding</span>
        </a>{" "}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/properties" className="text-white hover:text-gray-300">
                Properties
              </a>
            </li>
            <li>
              <a href="/services" className="text-white hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
