import { Check } from 'lucide-react'

function Checkbox({ checked, onChange, label }) {
  const color = checked ? 'border-[#E33E38] bg-[#E33E38]' : 'border-neutral-400 bg-white'

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={`flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded border text-white ${color}`}
    >
      {checked && <Check size={14} strokeWidth={3} />}
    </button>
  )
}

export default Checkbox