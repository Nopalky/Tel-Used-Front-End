import { MapPin } from 'lucide-react'
import { formatRupiah, formatJarak } from '../utils/filterProducts'

function ProductCard({ product }) {
  return (
    <article className="rounded-lg border border-gray-100 bg-white p-2 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex aspect-square items-center justify-center rounded-md bg-gradient-to-br from-gray-100 to-gray-200 text-3xl font-bold text-gray-300">
        {product.name.charAt(0)}
      </div>
      <p className="mt-2 text-[10px] text-gray-400">{product.subcategory}</p>
      <h3 className="line-clamp-2 min-h-8 text-xs font-semibold leading-4 text-gray-900">{product.name}</h3>
      <p className="mt-1 text-xs font-bold text-gray-900">{formatRupiah(product.price)}</p>
      <p className="mt-1.5 flex items-center gap-1 text-[10px] text-gray-400">
        <MapPin className="h-3 w-3 text-brand" aria-hidden="true" />
        {formatJarak(product.distance)} away · {product.location}
      </p>
    </article>
  )
}

export default ProductCard
