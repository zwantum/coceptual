import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
// import "./admin.css"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()

  // Authenticate user
  const { data: { user } } = await supabase.auth.getUser()

  // Check allowlist
  const allowedEmails = (process.env.ADMIN_ALLOWED_EMAILS || '')
    .split(',')
    .map(e => e.trim().toLowerCase())
  const isAllowed = user && allowedEmails.includes(user.email?.toLowerCase() || '')

  // If not logged in or not allowed, render children directly (this is for login page or denied screen)
  if (!user || !isAllowed) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen min-w-screen bg-[#060608] text-neutral-100 flex flex-col font-sans antialiased selection:bg-orange-500 selection:text-white relative overflow-hidden">
      {/* Premium Dashboard Background Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-900/60 bg-[#08080a]/80 backdrop-blur-md">
        <div className="admin-nav max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="flex items-center gap-3 group">
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent group-hover:opacity-90 transition">
                Conceptual Studio
              </span>
              <span className="text-[10px] bg-neutral-900 text-orange-400 font-bold px-2 py-0.5 rounded-full border border-orange-500/10 font-mono tracking-widest uppercase">
                Admin
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">Logged in as</span>
              <span className="text-xs text-neutral-300 font-semibold">{user.email}</span>
            </div>

            <form action="/api/admin/logout" method="POST">
              <button
                type="submit"
                className="text-xs font-bold bg-neutral-900/80 hover:bg-red-500/10 hover:text-red-400 text-neutral-300 px-4 py-2 rounded-xl border border-neutral-800 transition-all duration-200 active:scale-95 cursor-pointer shadow-sm hover:border-red-500/20"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-950 bg-[#050507] py-6 text-center text-[10px] text-neutral-600 font-mono relative z-10">
        &copy; {new Date().getFullYear()} Conceptual Studio. All rights reserved. Internal Administration Panel.
      </footer>
    </div>
  )
}
