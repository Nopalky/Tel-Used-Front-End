import { useState } from 'react'
import Chip from './Chip'

function ChipGroup({ items, selected, onToggle, limit = 4, format }) {
  const [semua, setSemua] = useState(false)

  const tampil = semua ? items : items.slice(0, limit)
  const adaSisa = items.length > limit

  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        {tampil.map((item) => (
          <Chip
            key={item}
            label={format ? format(item) : item}
            selected={selected.includes(item)}
            onClick={() => onToggle(item)}
          />
        ))}
      </div>
      {adaSisa && (
        <button
          type="button"
          onClick={() => setSemua(!semua)}
          className="mt-1.5 text-[11px] text-gray-400 hover:text-brand cursor-pointer"
        >
          {semua ? 'Lihat lebih sedikit' : `Lihat semua (${items.length})`}
        </button>
      )}
    </div>
  )
}

export default ChipGroup
