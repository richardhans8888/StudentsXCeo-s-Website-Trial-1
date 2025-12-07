export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-lg font-bold tracking-[0.28em]">STUDENTS<span className="mx-1 text-[0.75em] font-semibold tracking-normal align-baseline">x</span>CEO<span className="text-[0.75em] font-semibold tracking-normal align-baseline">S</span></div>
            <p className="mt-3 text-sm text-white/70">Jakarta</p>
            <p className="mt-4 text-sm text-white/70 max-w-xs">Developing future leaders through programs, mentorship, and industry connections.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white/80">Programs</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-blue-400">Scholarship</a></li>
              <li><a href="#" className="hover:text-blue-400">Consulting</a></li>
              <li><a href="#" className="hover:text-blue-400">Connect & Empower</a></li>
              <li><a href="#" className="hover:text-blue-400">Business Case Competition</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white/80">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-blue-400">About</a></li>
              <li><a href="#careers" className="hover:text-blue-400">Careers</a></li>
              <li><a href="#insights" className="hover:text-blue-400">Insights</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white/80">Follow</h4>
            <div className="mt-3 flex items-center gap-3">
              <a aria-label="Instagram" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 hover:bg-white/10">IG</a>
              <a aria-label="LinkedIn" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 hover:bg-white/10">in</a>
              <a aria-label="YouTube" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 hover:bg-white/10">YT</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} StudentsxCEOs Jakarta. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-white/60">
            <a href="#" className="hover:text-blue-400">Privacy</a>
            <a href="#" className="hover:text-blue-400">Terms</a>
            <a href="#" className="hover:text-blue-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
