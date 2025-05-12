'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link
          href="/"
          className="text-3xl font-semibold text-black dark:text-white"
        >
          applefather.eth
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="line"
          className="text-lg text-zinc-600 dark:text-zinc-500"
          delay={0}
        >
          building @goatcast - a programmable social network.
        </TextEffect>
      </div>
    </header>
  )
}
