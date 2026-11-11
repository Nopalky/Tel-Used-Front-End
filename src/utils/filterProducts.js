import { DISTANCE_OPTIONS } from '../data/filterOptions'

export function formatRupiah(angka) {
  return 'Rp ' + Number(angka).toLocaleString('id-ID')
}

export function formatJarak(km) {
  if (km < 1) return `${Math.round(km * 1000)} m`
  return `${String(km).replace('.', ',')} km`
}

export function tanggalHariLalu(n) {
  const d = new Date()
  d.setDate(d.getDate() - n)
  const bulan = String(d.getMonth() + 1).padStart(2, '0')
  const tanggal = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${bulan}-${tanggal}`
}

export function cekError(filters) {
  const error = {}
  if (filters.priceMin !== '' && filters.priceMax !== '' && Number(filters.priceMin) > Number(filters.priceMax)) {
    error.price = 'Harga minimum tidak boleh lebih besar dari maksimum'
  }
  if (filters.dateMin && filters.dateMax && filters.dateMin > filters.dateMax) {
    error.date = 'Tanggal awal tidak boleh setelah tanggal akhir'
  }
  return error
}

export function filterProducts(products, query, filters, sortBy) {
  const q = query.trim().toLowerCase()

  const hasil = products.filter((p) => {
    if (q) {
      const teks = `${p.name} ${p.subcategory} ${p.category} ${p.tags.join(' ')}`.toLowerCase()
      if (!teks.includes(q)) return false
    }
    if (filters.locations.length > 0 && !filters.locations.includes(p.location)) return false
    if (filters.categories.length > 0 && !filters.categories.includes(p.category)) return false
    if (filters.keywords.length > 0 && !filters.keywords.some((k) => p.tags.includes(k))) return false

    if (filters.priceMin !== '' && p.price < Number(filters.priceMin)) return false
    if (filters.priceMax !== '' && p.price > Number(filters.priceMax)) return false

    if (filters.dateMin && p.uploadedAt < filters.dateMin) return false
    if (filters.dateMax && p.uploadedAt > filters.dateMax) return false

    if (filters.maxDistance !== null && p.distance > filters.maxDistance) return false

    return true
  })

  if (sortBy === 'terbaru') {
    return [...hasil].sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt))
  }

  return [...hasil].sort((a, b) => {
    const skorA = q && a.name.toLowerCase().includes(q) ? 1 : 0
    const skorB = q && b.name.toLowerCase().includes(q) ? 1 : 0
    return skorB - skorA
  })
}

export function getActiveTags(filters) {
  const tags = []
  filters.locations.forEach((v) => tags.push({ id: `loc-${v}`, label: v, type: 'locations', value: v }))
  filters.categories.forEach((v) => tags.push({ id: `cat-${v}`, label: v, type: 'categories', value: v }))
  filters.keywords.forEach((v) => tags.push({ id: `key-${v}`, label: `#${v}`, type: 'keywords', value: v }))

  if (filters.priceMin !== '' || filters.priceMax !== '') {
    const min = filters.priceMin !== '' ? formatRupiah(filters.priceMin) : 'Rp 0'
    const max = filters.priceMax !== '' ? formatRupiah(filters.priceMax) : '∞'
    tags.push({ id: 'price', label: `${min} - ${max}`, type: 'price' })
  }
  if (filters.dateMin || filters.dateMax) {
    const preset = filters.datePreset ? `${filters.datePreset} hari terakhir` : null
    tags.push({
      id: 'date',
      label: preset || `${filters.dateMin || '...'} s/d ${filters.dateMax || '...'}`,
      type: 'date',
    })
  }
  if (filters.maxDistance !== null) {
    const opsi = DISTANCE_OPTIONS.find((o) => o.value === filters.maxDistance)
    tags.push({ id: 'distance', label: opsi ? opsi.label : `< ${filters.maxDistance} km`, type: 'distance' })
  }
  return tags
}

export function removeTag(filters, tag) {
  switch (tag.type) {
    case 'locations':
    case 'categories':
    case 'keywords':
      return { ...filters, [tag.type]: filters[tag.type].filter((v) => v !== tag.value) }
    case 'price':
      return { ...filters, priceMin: '', priceMax: '' }
    case 'date':
      return { ...filters, dateMin: '', dateMax: '', datePreset: null }
    case 'distance':
      return { ...filters, maxDistance: null }
    default:
      return filters
  }
}
