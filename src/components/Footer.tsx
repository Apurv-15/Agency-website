export default function Footer() {
  const year = new Date().getFullYear();
  
  const links = [
    { name: "Showcase", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Reviews", href: "#reviews" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Email Contact", href: "mailto:hello@warmframe.com" },
    { name: "Twitter / X", href: "https://x.com" }
  ];

  return (
    <footer className="w-full bg-white border-t border-border-muted/50 py-8 px-6">
      <div className="w-full max-w-[1024px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Copyright */}
        <p className="text-[12px] text-text-secondary font-inter">
          &copy; {year} WarmFrame. All rights reserved.
        </p>

        {/* Right Side: 7 Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href}
              className="text-[12px] font-bold text-text-secondary hover:text-text-primary transition-colors font-inter"
            >
              {link.name}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
