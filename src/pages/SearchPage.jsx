import { SlidersHorizontal } from 'lucide-react'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import FilterPanel from '../components/filter/FilterPanel'
import ActiveFilters from '../components/filter/ActiveFilters'
import { MOCK_PRODUCTS } from '../data/mockProducts'
import { EMPTY_FILTERS } from '../data/filterOptions'
import { filterProducts, getActiveTags, removeTag } from '../utils/filterProducts'

function SearchPage() {
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState('terkait')
  const [panelOpen, setPanelOpen] = useState(false)

  const [draft, setDraft] = useState(EMPTY_FILTERS)
  const [applied, setApplied] = useState(EMPTY_FILTERS)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setPanelOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const hasil = filterProducts(MOCK_PRODUCTS, query, applied, sortBy)
  const jumlahFilter = getActiveTags(applied).length

  function handleApply() {
    setApplied(draft)
    setPanelOpen(false)
  }

  function handleReset() {
    setDraft(EMPTY_FILTERS)
    setApplied(EMPTY_FILTERS)
  }

  function handleClose() {
    setDraft(applied)
    setPanelOpen(false)
  }

  function handleRemoveTag(tag) {
    const baru = removeTag(applied, tag)
    setApplied(baru)
    setDraft(baru)
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar query={query} onQueryChange={setQuery} />

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-4 lg:grid-cols-[260px_1fr]">
        <FilterPanel
          draft={draft}
          setDraft={setDraft}
          isOpen={panelOpen}
          onApply={handleApply}
          onReset={handleReset}
          onClose={handleClose}
        />

        <section>
          <div className="mb-4 flex items-center justify-between border-b border-gray-200">
            <div className="flex">
              {[
                { id: 'terkait', label: 'Terkait' },
                { id: 'terbaru', label: 'Terbaru' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSortBy(tab.id)}
                  className={`-mb-px cursor-pointer border-b-2 px-6 py-2.5 text-xs font-medium ${
                    sortBy === tab.id ? 'border-brand text-brand' : 'border-transparent text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setPanelOpen(true)}
              className="mb-1 flex cursor-pointer items-center gap-1.5 rounded-md border border-gray-300 px-3 py-1.5 text-xs font-medium lg:hidden"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Filter
              {jumlahFilter > 0 && (
                <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] text-white">
                  {jumlahFilter}
                </span>
              )}
            </button>
          </div>

          <ActiveFilters filters={applied} onRemove={handleRemoveTag} onClearAll={handleReset} />

          <p className="mb-3 text-[11px] text-gray-500" aria-live="polite">
            {hasil.length} produk ditemukan
          </p>

          {hasil.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
              {hasil.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 px-4 py-16 text-center">
              <p className="text-sm font-semibold text-gray-800">Produk tidak ditemukan</p>
              <p className="mt-1 max-w-xs text-xs text-gray-500">
                Coba ubah kata pencarian atau kurangi filter yang dipakai.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-4 cursor-pointer rounded-md bg-brand px-4 py-2 text-xs font-semibold text-white hover:bg-brand-dark"
              >
                Reset filter
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default SearchPage
