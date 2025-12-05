import Link from 'next/link'

export default function Sidebar() {
  const items = [
    { href: '/docs/whitepaper', label: 'Whitepaper' },
    { href: '/docs/one-pager', label: 'One-Pager' },
    { href: '/docs/how-it-works', label: 'How It Works' },
    { href: '/docs/architecture', label: 'Architecture' },
    { href: '/docs/tokenomics', label: 'Tokenomics' },
    { href: '/docs/roadmap', label: 'Roadmap' },
    { href: '/docs/team', label: 'Team' },
    { href: '/docs/vesting', label: 'Vesting' },
    { href:`/docs/liquidity-locker`, label: `Liquidity Locker`},
    { href: '/docs/faq', label: 'FAQ' }
  ]

  return (
    <aside className="sidebar col-span-3 pr-6 sticky top-6">
      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-md bg-white/5 flex items-center justify-center overflow-hidden">
            <img 
              src="/logo.png" 
              alt="APM Logo" 
              className="w-10 h-10 object-contain" 
            />
          </div>
          <div>
            <h3 className="text-lg header-gold font-semibold">APM Docs</h3>
            <p className="text-muted text-sm">Agro Predict — Developer Docs</p>
          </div>
        </div>
        <nav className="space-y-1 text-sm">
          {items.map((i) => (
            <Link key={i.href} href={i.href} passHref>
              <a className="sidebar-link">{i.label}</a>
            </Link>
          ))}
        </nav>
        <div className="mt-6 text-xs text-muted">Version 1.2</div>
      </div>
    </aside>
  )
                }
