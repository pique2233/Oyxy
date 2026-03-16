import Footer from './Footer'
import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ivory text-ink">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(189,218,186,0.35),transparent_38%),radial-gradient(circle_at_20%_20%,rgba(209,74,74,0.14),transparent_24%),radial-gradient(circle_at_80%_15%,rgba(244,224,188,0.55),transparent_22%)]" />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
