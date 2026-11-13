import { Heart, ShieldCheck, Truck, ShoppingCart, MessageSquareText } from 'lucide-react'

import { useParams } from 'react-router'

import Card from '../components/Card'

import useProducts from '../hooks/useProducts'

const shipping = { cost: 'Rp 12.000 - Rp 15.000', courier: 'Sukabirus' }

const seller = {
  name: 'SuperStar',
  lastActive: 'Aktif 2 hari lalu',
}

const ProductDetailPage = () => {
  const { id } = useParams()
  const { products, loading, error } = useProducts()

  if (loading) {
    return (
      <div className="flex w-full justify-center py-20">
        <div className="size-8 animate-spin rounded-full border-4 border-gray-200 border-t-brand" />
      </div>
    )
  }

  if (error) return <p className="px-4 py-10 md:px-10">{error}</p>

  const item = products.find((p) => p.id === Number(id))

  if (!item) return <p className="px-4 py-10 md:px-10">Produk tidak ditemukan</p>

  const relatedList = products
    .filter((p) => p.category === item.category && p.id !== item.id)
    .slice(0, 5)

  return (
    <>
      <div className="product-detail flex flex-col gap-6 px-4 py-6 md:flex-row md:gap-10 md:px-10 md:py-10">
        <div className="relative w-full shrink-0 md:w-80">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="aspect-square w-full rounded-xl object-cover"
          />
          <button
            type="button"
            aria-label="Add to wishlist"
            className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-white/70 text-gray-500 hover:text-brand"
          >
            <Heart className="size-4" />
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-5">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-xl font-semibold">{item.title}</h1>
            <button type="button" className="text-sm text-muted hover:text-brand">
              Laporkan
            </button>
          </div>

          <p className="bg-gray-50 px-6 py-4 text-3xl font-bold text-brand">
            $ {item.price}
          </p>

          <p className="flex items-start gap-2 text-sm">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 fill-brand text-white" />
            Semua pembelian melalui TelUsed dilindungi oleh Perlindungan Pembeli.
          </p>

          <div className="flex gap-6 text-sm">
            <p className="flex items-center gap-2 text-muted">
              Pengiriman <Truck className="size-4" />
            </p>
            <div className="flex flex-col gap-2">
              <p className="flex gap-6">
                <span className="text-muted">Ongkos Kirim</span>
                <span className="font-semibold">{shipping.courier}</span>
              </p>
              <p className="flex gap-6">
                <span className="text-muted">Pengiriman Ke</span>
                <span className="text-muted">{shipping.cost}</span>
              </p>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-8">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-md border border-brand bg-brand-soft px-6 py-3 text-sm text-brand hover:bg-brand hover:text-white duration-200 hover:cursor-pointer"
            >
              <ShoppingCart className="size-4" />
              Masukkan Keranjang
            </button>
            <button
              type="button"
              className="rounded-md bg-brand px-10 py-3 text-sm font-semibold text-white hover:bg-brand-dark duration-200 hover:cursor-pointer"
            >
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-300" />

      <div className="seller flex flex-wrap items-center gap-4 px-4 py-5 md:px-10">
        <div className="flex size-14 items-center justify-center rounded-full bg-gray-900 text-xl font-bold text-white">
          {seller.name[0]}
        </div>
        <div className="mr-4">
          <p className="font-semibold">{seller.name}</p>
          <p className="text-sm text-muted">{seller.lastActive}</p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-brand bg-brand-soft px-4 py-1.5 text-sm text-brand hover:cursor-pointer"
        >
          <MessageSquareText className="size-4" />
          Chat Sekarang
        </button>
        <button
          type="button"
          className="rounded-full border border-brand px-4 py-1.5 text-sm text-brand hover:cursor-pointer"
        >
          Kunjungi Toko
        </button>
      </div>

      <hr className="border-t border-gray-300" />

      <div className="related flex flex-col gap-6 px-4 py-6 md:px-10">
        <h3 className="font-semibold">Anda mungkin menyukai</h3>
        <div className="grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3 md:flex md:flex-wrap md:gap-4">
          {relatedList.map((p) => (
            <Card
              key={p.id}
              id={p.id}
              name={p.title}
              category={p.category}
              price={p.price}
              image={p.thumbnail}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductDetailPage
