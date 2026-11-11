function FilterSection({ title, children }) {
  return (
    <section className="py-3">
      <h3 className="mb-2 text-xs font-semibold text-gray-800">{title}</h3>
      {children}
    </section>
  )
}

export default FilterSection
