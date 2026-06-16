export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-24 px-8 md:px-16 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 relative z-10">

        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none">
            Dhaagaa
          </h2>
          <p className="font-sans text-lg md:text-xl text-gray-400 max-w-sm font-light">
            Building the next generation of Indian brands.
          </p>
        </div>

        <div className="grid grid-cols-2 md:flex md:gap-24 gap-12 font-sans font-light">

          <div className="space-y-4">
            <h4 className="text-xs tracking-widest text-gray-500 uppercase font-medium">Founder</h4>
            <ul className="space-y-2 text-lg">
              <li className="text-gray-300">Sarthak Ghoderao</li>
            </ul>
            <h4 className="text-xs tracking-widest text-gray-500 uppercase font-medium mt-8">Strategic Partner</h4>
            <ul className="space-y-2 text-lg">
              <li className="text-gray-300">NYX Studios</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs tracking-widest text-gray-500 uppercase font-medium">Socials</h4>
            <ul className="space-y-2 text-lg">
              <li><a href="https://www.instagram.com/wearedhaagaa/?utm_source=ig_web_button_share_sheet" className="hover:text-accent transition-colors" data-cursor="hover">Instagram</a></li>
              {/* <li><a href="#" className="hover:text-accent transition-colors" data-cursor="hover">LinkedIn</a></li> */}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs tracking-widest text-gray-500 uppercase font-medium">Contact</h4>
            <ul className="space-y-2 text-lg">
              <li><a href="mailto:support@dhaagaa.tech " className="hover:text-accent transition-colors" data-cursor="hover">[EMAIL_ADDRESS]</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="mt-24 pt-8 border-t border-gray-800 flex justify-between items-center text-xs text-gray-600 font-sans uppercase tracking-widest font-medium">
        <span>© DHAAGAA 2026</span>
        <span>All Rights Reserved</span>
      </div>

      {/* Massive Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-display font-black text-white/[0.03] whitespace-nowrap pointer-events-none select-none">
        DHAAGAA
      </div>
    </footer>
  );
}
