import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="px-6 py-4 flex justify-between items-center bg-white shadow-sm">
        <div className="text-2xl font-bold text-blue-600 tracking-tight">ECE CHAMPS</div>
        <nav className="flex gap-4">
          <Link href="/auth/signin" className="px-4 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-full transition-colors">
            Sign In
          </Link>
          <Link href="/auth/signup" className="px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 rounded-full transition-colors shadow-md">
            Sign Up
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Enterprise Meetings, <br />
          <span className="text-blue-600">Elevated.</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl">
          Connect with your team using crystal clear video, seamless collaboration tools, and bank-grade security.
        </p>
        <Link href="/auth/signup" className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
          Start for free
        </Link>
      </main>
    </div>
  );
}
