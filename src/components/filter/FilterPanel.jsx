import { SlidersHorizontal, X } from 'lucide-react'
import ChipGroup from './ChipGroup'
import Chip from './Chip'
import FilterSection from './FilterSection'
import RangeInput from './RangeInput'
import {
  CATEGORIES,
  LOCATIONS,
  KEYWORDS,
  DATE_PRESETS,
  PRICE_PRESETS,
  DISTANCE_OPTIONS,
} from '../../data/filterOptions'
import { cekError, tanggalHariLalu } from '../../utils/filterProducts'

function FilterPanel({ draft, setDraft, isOpen, onApply, onReset, onClose }) {
  const error = cekError(draft)
  const adaError = Object.keys(error).length > 0

  function toggleItem(field, value) {
    const sudahAda = draft[field].includes(value)
    setDraft({
      ...draft,
      [field]: sudahAda ? draft[field].filter((v) => v !== value) : [...draft[field], value],
    })
  }

  function pilihPresetTanggal(days) {
    if (draft.datePreset === days) {
      setDraft({ ...draft, dateMin: '', dateMax: '', datePreset: null })
      return
    }
    setDraft({ ...draft, dateMin: tanggalHariLalu(days), dateMax: '', datePreset: days })
  }

  function pilihPresetHarga(preset) {
    const aktif = draft.priceMin === String(preset.min) && draft.priceMax === String(preset.max)
    if (aktif) {
      setDraft({ ...draft, priceMin: '', priceMax: '' })
      return
    }
    setDraft({ ...draft, priceMin: String(preset.min), priceMax: String(preset.max) })
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={onClose} aria-hidden="true" />
      )}

      <aside
        aria-label="Filter produk"
        className={`fixed inset-y-0 left-0 z-40 flex w-[88%] max-w-sm flex-col bg-white shadow-xl transition-transform duration-200 lg:sticky lg:top-[76px] lg:z-auto lg:max-h-[calc(100vh-92px)] lg:w-full lg:max-w-none lg:translate-x-0 lg:self-start lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-gray-800" aria-hidden="true" />
            <span className="rounded bg-yellow-300 px-1.5 text-xs font-semibold text-gray-900">Filter</span>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={onReset} className="cursor-pointer text-xs font-medium text-brand hover:underline">
              Reset
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup filter"
              className="cursor-pointer text-gray-500 lg:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 divide-y divide-gray-100 overflow-y-auto px-4">
          <FilterSection title="Lokasi">
            <p className="mb-1.5 text-[11px] text-gray-400">Cabang</p>
            <ChipGroup items={LOCATIONS} selected={draft.locations} onToggle={(v) => toggleItem('locations', v)} />
          </FilterSection>

          <FilterSection title="Kategori">
            <ChipGroup
              items={CATEGORIES}
              selected={draft.categories}
              onToggle={(v) => toggleItem('categories', v)}
              limit={CATEGORIES.length}
            />
          </FilterSection>

          <FilterSection title="Jarak">
            <div className="flex flex-wrap gap-1.5">
              {DISTANCE_OPTIONS.map((opsi) => (
                <Chip
                  key={opsi.label}
                  label={opsi.label}
                  selected={draft.maxDistance === opsi.value}
                  onClick={() => setDraft({ ...draft, maxDistance: opsi.value })}
                />
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Kata kunci">
            <ChipGroup
              items={KEYWORDS}
              selected={draft.keywords}
              onToggle={(v) => toggleItem('keywords', v)}
              format={(k) => `#${k}`}
            />
          </FilterSection>

          <FilterSection title="Tanggal unggah">
            <RangeInput
              type="date"
              label="Tanggal"
              minValue={draft.dateMin}
              maxValue={draft.dateMax}
              onMinChange={(v) => setDraft({ ...draft, dateMin: v, datePreset: null })}
              onMaxChange={(v) => setDraft({ ...draft, dateMax: v, datePreset: null })}
            />
            {error.date && <p className="mt-1 text-[11px] text-brand">{error.date}</p>}
            <div className="mt-2 flex flex-wrap gap-1.5">
              {DATE_PRESETS.map((p) => (
                <Chip
                  key={p.days}
                  label={p.label}
                  selected={draft.datePreset === p.days}
                  onClick={() => pilihPresetTanggal(p.days)}
                />
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Price range">
            <RangeInput
              prefix="Rp"
              label="Harga"
              minValue={draft.priceMin}
              maxValue={draft.priceMax}
              onMinChange={(v) => setDraft({ ...draft, priceMin: v })}
              onMaxChange={(v) => setDraft({ ...draft, priceMax: v })}
            />
            {error.price && <p className="mt-1 text-[11px] text-brand">{error.price}</p>}
            <div className="mt-2 flex flex-wrap gap-1.5">
              {PRICE_PRESETS.map((p) => (
                <Chip
                  key={p.label}
                  label={p.label}
                  selected={draft.priceMin === String(p.min) && draft.priceMax === String(p.max)}
                  onClick={() => pilihPresetHarga(p)}
                />
              ))}
            </div>
          </FilterSection>
        </div>

        <div className="border-t border-gray-200 p-4">
          <button
            type="button"
            onClick={onApply}
            disabled={adaError}
            className="w-full cursor-pointer rounded-md bg-brand py-2.5 text-xs font-semibold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Done
          </button>
        </div>
      </aside>
    </>
  )
}

export default FilterPanel
