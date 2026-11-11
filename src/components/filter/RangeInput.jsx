function RangeInput({ type = 'number', minValue, maxValue, onMinChange, onMaxChange, prefix, label }) {
  const inputClass =
    'w-full rounded border border-gray-300 bg-white py-1.5 text-xs text-gray-700 placeholder:text-gray-400 focus:border-brand focus:outline-none'
  const padding = prefix ? 'pl-7 pr-2' : 'px-2'

  return (
    <div className="flex items-center gap-2">
      <div className="relative min-w-0 flex-1">
        {prefix && <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[11px] text-gray-400">{prefix}</span>}
        <input
          type={type}
          min={type === 'number' ? 0 : undefined}
          placeholder="Min"
          aria-label={`${label} minimum`}
          value={minValue}
          onChange={(e) => onMinChange(e.target.value)}
          className={`${inputClass} ${padding}`}
        />
      </div>
      <span className="h-px w-3 bg-gray-300" />
      <div className="relative min-w-0 flex-1">
        {prefix && <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[11px] text-gray-400">{prefix}</span>}
        <input
          type={type}
          min={type === 'number' ? 0 : undefined}
          placeholder="Max"
          aria-label={`${label} maksimum`}
          value={maxValue}
          onChange={(e) => onMaxChange(e.target.value)}
          className={`${inputClass} ${padding}`}
        />
      </div>
    </div>
  )
}

export default RangeInput
