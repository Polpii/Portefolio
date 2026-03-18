"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="text-[15px] font-semibold tracking-tight text-gray-950">
            Paul-Peter Arslan
          </Link>

          <div className="hidden items-center gap-1 sm:flex">
            <Link href="/" className="rounded-lg px-3 py-1.5 text-sm text-gray-500 transition hover:text-gray-950">
              Home
            </Link>
            <Link href="/resume" className="rounded-lg px-3 py-1.5 text-sm text-gray-500 transition hover:text-gray-950">
              Resume
            </Link>
            <Link href="/publications" className="rounded-lg px-3 py-1.5 text-sm text-gray-500 transition hover:text-gray-950">
              Publications
            </Link>
            <Link href="/about" className="rounded-lg px-3 py-1.5 text-sm text-gray-500 transition hover:text-gray-950">
              About
            </Link>
            <a
              href="/api/doc/resume_2026.pdf"
              target="_blank"
              rel="noopener"
              className="ml-2 rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-700 transition hover:border-gray-400"
            >
              CV
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 sm:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-white px-5 pb-4 pt-2 sm:hidden">
          <div className="flex flex-col gap-1">
            <Link href="/" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-50">
              Home
            </Link>
            <Link href="/resume" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-50">
              Resume
            </Link>
            <Link href="/publications" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-50">
              Publications
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-50">
              About
            </Link>
            <a
              href="/api/doc/resume_2026.pdf"
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
