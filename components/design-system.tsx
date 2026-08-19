'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, ChevronLeft, ChevronRight, Command, Layers3, Sparkles } from 'lucide-react'
import { screens } from '@/components/screen-data'


export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Return to design index">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Command className="size-4" /></span>
          <span className="font-mono text-sm font-semibold tracking-tight">/archive<span className="text-primary">.studio</span></span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Design screens">
          {screens.map((screen) => <Link key={screen.slug} href={`/designs/${screen.slug}`} className={`rounded-md px-3 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors hover:bg-accent hover:text-accent-foreground ${pathname.includes(screen.slug) ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}>{screen.label}</Link>)}
        </nav>
        <Link href="/designs/ai-builder" className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground hover:text-foreground"><span className="hidden sm:inline">Enter sequence</span><ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
      </div>
    </header>
    {children}
  </div>
}

export function FlowNav({ current }: { current: string }) {
  const index = screens.findIndex((s) => s.slug === current)
  const previous = screens[index - 1]
  const next = screens[index + 1]
  return <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-border px-4 py-6 sm:px-6">
    {previous ? <Link href={`/designs/${previous.slug}`} className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ChevronLeft className="size-4 transition-transform group-hover:-translate-x-1" /><span><span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">Previous</span>{previous.label}</span></Link> : <span />}
    <span className="font-mono text-[10px] tracking-widest text-muted-foreground/60">{String(index + 1).padStart(2, '0')} / {String(screens.length).padStart(2, '0')}</span>
    {next ? <Link href={`/designs/${next.slug}`} className="group flex items-center gap-2 text-right text-sm text-muted-foreground hover:text-foreground"><span><span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">Next</span>{next.label}</span><ChevronRight className="size-4 transition-transform group-hover:translate-x-1" /></Link> : <Link href="/" className="group flex items-center gap-2 text-right text-sm text-muted-foreground hover:text-foreground"><span>Back to index</span><Layers3 className="size-4" /></Link>}
  </div>
}

export function ScreenHeader({ screen }: { screen: typeof screens[number] }) {
  return <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="mb-3 font-mono text-[11px] uppercase tracking-[0.24em] text-primary">{screen.eyebrow}</p><h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-6xl">{screen.label}</h1></div><p className="max-w-xs text-sm leading-6 text-muted-foreground">{screen.description}</p></div>
}

export function AccentIcon({ type }: { type: string }) { return <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary"><Sparkles className="size-5" /></span> }
