function Chip({ label, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`rounded px-2.5 py-1 text-[11px] font-medium transition-colors cursor-pointer border ${
        selected
          ? 'bg-brand-soft border-brand text-brand'
          : 'bg-gray-100 border-transparent text-gray-600 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  )
}

export default Chip
