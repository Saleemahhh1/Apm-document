// components/Layout.js
import Sidebar from './Sidebar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#06110d] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-12 gap-6">
        {/* Sidebar: hidden on small screens */}
        <aside className="hidden md:block col-span-3 sticky top-6">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="col-span-12 md:col-span-9">
          {children}
        </main>
      </div>
    </div>
  )
}
