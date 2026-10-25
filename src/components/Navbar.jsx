import { Search, ShoppingCart, MessageSquare } from 'lucide-react'

function Navbar({ query, onQueryChange }) {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:gap-6">
        <a href="/" className="text-lg font-bold italic leading-5 text-brand sm:text-xl">
          Tel
          <br />
          Used
        </a>

        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Cari barang, contoh: sepatu"
            aria-label="Cari produk"
            className="w-full rounded-full border border-gray-300 bg-white py-2 pl-9 pr-4 text-sm focus:border-brand focus:outline-none"
          />
        </div>

        <button type="button" aria-label="Keranjang" className="hidden cursor-pointer text-brand sm:block">
          <ShoppingCart className="h-6 w-6" />
        </button>
        <button type="button" aria-label="Chat" className="hidden cursor-pointer text-brand sm:block">
          <MessageSquare className="h-6 w-6" />
        </button>
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
          U
        </div>
      </div>
    </header>
  )
}

export default Navbar
