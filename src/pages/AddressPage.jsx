import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import CartHeader from '../components/cart/CartHeader'
import { ChevronLeftIcon } from '../components/cart/icons'

// Data dummy (belum pakai backend)
const addressList = [
  {
    id: 1,
    name: 'Arzuuw',
    email: 'Arzu01@gmail.com',
    phone: '+1232353735',
    detail: 'Alamat random, Sukapura, Bojongsoang, Jl.aksgdkagkaksdgha, 789001',
  },
  {
    id: 2,
    name: 'Hannah Lester',
    email: 'yeehannah@gmail.com',
    phone: '+49 179 111 1010',
    detail: 'Leibnizstraße 16, Wohnheim 6, No: 8X Clausthal-Zellerfeld, Germany',
  },
]

function AddressPage() {
  const navigate = useNavigate()
  const [selectedId, setSelectedId] = useState(1)

  return (
    <div className="flex min-h-svh flex-col bg-[#F1EFEA] text-left font-sans text-sm text-black">
      <CartHeader title="Keranjang Belanja" />

      <main className="flex flex-1 flex-col px-3 pt-6 md:px-[32px] md:pt-[32px]">
        <section className="flex min-h-[60vh] flex-col bg-white">
          <div className="relative flex items-center justify-center border-b border-neutral-300 px-4 py-4 md:px-[24px]">
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Kembali"
              className="absolute left-4 flex h-6 w-6 cursor-pointer items-center justify-center md:left-[24px]"
            >
              <ChevronLeftIcon width="18" height="18" />
            </button>
            <h1 className="text-base">Alamat</h1>
          </div>

          {addressList.map((a) => {
            const active = a.id === selectedId
            return (
              <button
                key={a.id}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setSelectedId(a.id)}
                className="flex cursor-pointer items-start gap-6 border-b border-neutral-300 px-4 py-5 text-left md:gap-12 md:px-[24px] md:pl-[64px]"
              >
                <span
                  className={`mt-5 flex size-4 shrink-0 items-center justify-center rounded-full border ${
                    active ? 'border-[#E53935]' : 'border-neutral-400'
                  }`}
                >
                  {active && <span className="size-2 rounded-full bg-[#E53935]" />}
                </span>
                <span className="flex flex-col gap-1 text-xs">
                  <span className="font-semibold">{a.name}</span>
                  <span>{a.email}</span>
                  <span>{a.phone}</span>
                  <span className="max-w-xs">{a.detail}</span>
                </span>
              </button>
            )
          })}

          <div className="flex flex-1 items-center justify-center py-16">
            <Link
              to="/checkout/address/new"
              className="w-full max-w-72 rounded border border-neutral-300 py-3 text-center text-xs text-neutral-500 hover:border-[#E53935] hover:text-[#E53935]"
            >
              + Nambah Alamat
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AddressPage
