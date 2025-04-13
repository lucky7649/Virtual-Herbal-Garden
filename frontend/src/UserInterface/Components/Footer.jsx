import React from 'react'

const FooterLink = ({ href, children }) => {
  return (
    <li>
      <a href={href} className="hover:underline ">
        {children}
      </a>
    </li>
  );
};

const Footer = () => {
  return (
    <div>
      <footer className="bg-emerald-600 text-black border-t-2 border-black">
        <div className="text-center pt-3 pb-3">
          <p>&copy; 2024 AYUSH Virtual Herbal Garden. All rights reserved.</p>

          <div className="flex justify-center space-x-8 mt-6 gap-20">
            <div>
              <h3 className="font-bold">Product</h3>
              <ul className="space-y-4">
                <FooterLink href="/home">Home</FooterLink>
                <FooterLink href="/enterprise">Enterprise</FooterLink>
                <FooterLink href="/pricing">Pricing</FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Company</h3>
              <ul className="space-y-4">
                <FooterLink href="/terms">Terms</FooterLink>
                <FooterLink href="/ai-policy">AI Policy</FooterLink>
                <FooterLink href="/privacy">Privacy</FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Resources</h3>
              <ul className="space-y-4">
                <FooterLink href="/faqs">FAQs</FooterLink>
                <FooterLink href="/vo-legacy">vO Legacy</FooterLink>
                <FooterLink href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Social</h3>
              <ul className="space-y-4">
                <li>
                  <a href="https://x.com/moayush" className="hover:underline">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjljjHnedCRCaCfzQwcK6qkflmLoUHgRpZAw&s"
                      alt="Twitter"
                      className="w-6 h-6 object-contain"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/ministry-of-ayush/" className="hover:underline">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScjcPGbp1efbFP79tFAuvepFdwQI9hnPJ9Nw&s"
                      alt="LinkedIn"
                      className="w-6 h-6 object-contain"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/ministryofayush/" className="hover:underline">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHo1V9_FOjV4Tr7VwJ_NQoCMZ4-Y7Swqzsog&s"
                      alt="Instagram"
                      className="w-6 h-6 object-contain"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
