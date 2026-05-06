import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-brand-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black italic tracking-tighter text-brand-orange uppercase">
          Ride<span className="text-white">Logs</span>
        </Link>
        
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-zinc-400">
          <Link href="/trips" className="hover:text-brand-orange transition-colors">Trips</Link>
          <Link href="/garage" className="hover:text-brand-orange transition-colors">The Garage</Link>
          <Link href="/gear" className="hover:text-brand-orange transition-colors">Gear</Link>
          <Link href="/contact" className="hover:text-brand-orange transition-colors">Contact</Link>
        </div>

        <button className="px-5 py-2 bg-brand-orange text-black font-bold text-xs uppercase italic hover:skew-x-[-12deg] transition-transform">
          Subscribe
        </button>
      </div>
    </nav>
  );
}