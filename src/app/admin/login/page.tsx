"use client"

import { createClient } from '@/lib/supabase/client'
import { useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'

function LoginContent() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
  }

  return (
    <div className="min-h-screen bg-[#060608] text-neutral-100 flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      <div className="absolute -top-[150px] -left-[150px] w-[350px] h-[350px] bg-orange-600/10 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute -bottom-[150px] -right-[150px] w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="w-full max-w-md bg-[#0b0b0d]/90 backdrop-blur-md border border-neutral-900 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden z-10">
        <div className="relative z-10 text-center mb-8">
          <div className="inline-block bg-neutral-900 border border-neutral-800 text-orange-400 font-bold px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest mb-4">
            Authorized Personnel Only
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
            Conceptual Studio
          </h1>
          <p className="text-xs text-neutral-400 font-medium">
            Sign in to access the administrator dashboard.
          </p>
        </div>

        {error === 'access_denied' && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold text-center leading-relaxed">
            ⚠️ Access Denied: Your Google account is not on the admin allowlist. Please contact the administrator.
          </div>
        )}

        {error === 'auth_failed' && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold text-center leading-relaxed">
            ⚠️ Authentication failed. Please try again.
          </div>
        )}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-3.5 px-4 bg-white hover:bg-neutral-100 text-black font-extrabold rounded-xl transition duration-155 flex items-center justify-center gap-3 active:scale-[0.98] shadow-lg disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? (
            <span className="text-sm font-bold text-neutral-600">Connecting...</span>
          ) : (
            <>
              {/* Google SVG Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm font-extrabold">Sign in with Google</span>
            </>
          )}
        </button>

        <div className="mt-4 flex items-center justify-center gap-2">
          <input
            type="checkbox"
            id="remember"
            defaultChecked
            disabled
            className="w-3.5 h-3.5 rounded border-neutral-850 bg-neutral-900 accent-orange-500 pointer-events-none"
          />
          <label htmlFor="remember" className="text-[10px] text-neutral-500 select-none">
            Keep me signed in (saves login session securely)
          </label>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[10px] text-neutral-600 font-mono">
            SECURE ACCESS | ENCRYPTED BY SUPABASE
          </p>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#060606] text-neutral-100 flex items-center justify-center font-mono text-xs">
        Loading...
      </div>
    }>
      <LoginContent />
    </Suspense>
  )
}
