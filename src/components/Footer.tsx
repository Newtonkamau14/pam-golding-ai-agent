export default function Footer() {
  return (
    <footer className="bg-[#10692E] text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Pam Golding. All rights reserved.</p>
        <nav>
          <ul className="flex justify-center space-x-4 mt-4">
            <li>
              <a href="/" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-white hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="text-white hover:text-gray-300">
                Terms of Service
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
