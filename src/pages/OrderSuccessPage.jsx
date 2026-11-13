import { Link } from 'react-router'
import { PackageCheck } from 'lucide-react'
import CartHeader from '../components/cart/CartHeader'

function OrderSuccessPage() {
  return (
    <div className="flex min-h-svh flex-col bg-[#F1EFEA] text-left font-sans text-sm text-black">
      <CartHeader title="Pengiriman" />

      <main className="flex flex-1 flex-col px-3 pt-6 md:px-[32px] md:pt-[32px]">
        <section className="flex flex-1 flex-col items-center justify-center gap-10 bg-white px-4 py-16 md:flex-row md:gap-20">
          <div className="flex size-48 items-center justify-center rounded-full bg-[#fdecea] md:size-64">
            <PackageCheck className="size-24 text-[#E53935] md:size-32" strokeWidth={1.2} />
          </div>

          <div className="flex w-full max-w-xs flex-col gap-4">
            <p className="text-base">Pengiriman</p>
            <h1 className="text-3xl font-bold leading-tight">
              Pesanan <br /> tercatat!
            </h1>
            <p className="text-xs">
              Kamu bisa lanjut melihat detail atau <br /> lanjut mengeksplorasi catalog
            </p>
            <Link
              to="/"
              className="mt-6 flex h-10 items-center justify-center rounded bg-[#E53935] text-sm text-white hover:bg-[#c62f2c]"
            >
              Continue
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default OrderSuccessPage
