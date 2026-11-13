import { X } from 'lucide-react'
import { getActiveTags } from '../../utils/filterProducts'

function ActiveFilters({ filters, onRemove, onClearAll }) {
  const tags = getActiveTags(filters)
  if (tags.length === 0) return null

  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      {tags.map((tag) => (
        <span
          key={tag.id}
          className="inline-flex items-center gap-1 rounded-full border border-brand bg-brand-soft px-2.5 py-1 text-[11px] font-medium text-brand"
        >
          {tag.label}
          <button
            type="button"
            onClick={() => onRemove(tag)}
            aria-label={`Hapus filter ${tag.label}`}
            className="cursor-pointer hover:text-brand-dark"
          >
            <X className="h-3 w-3" />
          </button>
        </span>
      ))}
      <button type="button" onClick={onClearAll} className="cursor-pointer text-[11px] text-gray-500 underline hover:text-brand">
        Hapus semua
      </button>
    </div>
  )
}

export default ActiveFilters
