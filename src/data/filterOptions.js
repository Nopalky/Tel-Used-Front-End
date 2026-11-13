export const CATEGORIES = [
  'Elektronik & Gadget',
  'Peralatan Praktikum & Akademik',
  'Aksesori Multimedia',
  'Keperluan Kos',
  'Fashion & Aksesori',
  'Olahraga & Hobi',
]

export const LOCATIONS = ['Bandung', 'Jakarta', 'Purwokerto', 'Surabaya']

export const KEYWORDS = ['vintage', 'adidas', 'casual', 'hitam', 'unisex', 'second', 'bekas rapi']

export const DATE_PRESETS = [
  { label: '1 minggu terakhir', days: 7 },
  { label: '2 minggu terakhir', days: 14 },
  { label: '1 bulan terakhir', days: 30 },
]

export const PRICE_PRESETS = [
  { label: '0-50rb', min: 0, max: 50000 },
  { label: '0-75rb', min: 0, max: 75000 },
  { label: '35rb-75rb', min: 35000, max: 75000 },
  { label: '35rb-100rb', min: 35000, max: 100000 },
]

export const DISTANCE_OPTIONS = [
  { label: 'Semua jarak', value: null },
  { label: '< 500 m', value: 0.5 },
  { label: '< 1 km', value: 1 },
  { label: '< 5 km', value: 5 },
  { label: '< 10 km', value: 10 },
]

export const EMPTY_FILTERS = {
  locations: [],
  categories: [],
  keywords: [],
  dateMin: '',
  dateMax: '',
  datePreset: null,
  priceMin: '',
  priceMax: '',
  maxDistance: null,
}
