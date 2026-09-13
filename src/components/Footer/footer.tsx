import FooterImg from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Top section */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Logo section */}
          <div className="max-w-sm">
            <img src={FooterImg} alt="Footer logo" />
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <ul className="mt-5 flex items-center gap-5 text-sm font-medium text-gray-700">
              <li className="cursor-pointer hover:text-gray-900">GitHub</li>
              <li className="cursor-pointer hover:text-gray-900">Twitter</li>
              <li className="cursor-pointer hover:text-gray-900">LinkedIn</li>
            </ul>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {/* Product */}
            <div>
              <h1 className="text-xs font-semibold tracking-wide text-gray-900">
                PRODUCT
              </h1>
              <ul className="mt-4 space-y-3 text-sm text-gray-500">
                <li className="cursor-pointer hover:text-gray-900">Home</li>
                <li className="cursor-pointer hover:text-gray-900">
                  Technologies
                </li>
                <li className="cursor-pointer hover:text-gray-900">Projects</li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h1 className="text-xs font-semibold tracking-wide text-gray-900">
                COMPANY
              </h1>
              <ul className="mt-4 space-y-3 text-sm text-gray-500">
                <li className="cursor-pointer hover:text-gray-900">About</li>
                <li className="cursor-pointer hover:text-gray-900">Contact</li>
                <li className="cursor-pointer hover:text-gray-900">Careers</li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h1 className="text-xs font-semibold tracking-wide text-gray-900">
                LEGAL
              </h1>
              <ul className="mt-4 space-y-3 text-sm text-gray-500">
                <li className="cursor-pointer hover:text-gray-900">
                  Privacy Policy
                </li>
                <li className="cursor-pointer hover:text-gray-900">
                  Terms of Service
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom section */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <ul className="flex items-center gap-5 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-gray-600">Privacy</li>
            <li className="cursor-pointer hover:text-gray-600">Terms</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
