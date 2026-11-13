import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { MapPin } from 'lucide-react'
import CartHeader from '../components/cart/CartHeader'
import Checkbox from '../components/cart/Checkbox'
import { ChatIcon, ChevronLeftIcon, ChevronRightIcon } from '../components/cart/icons'
import sampleSneaker from '../assets/cart/sample-sneaker.png'
import sampleAvatar from '../assets/cart/sample-avatar.png'

// Data dummy (belum pakai backend)
const address = {
  name: 'Arzuuw',
  phone: '+1232353735',
  detail: 'Alamat random, Sukapura, Bojongsoang, Jl.aksgdkagkaksdgha, 789001',
}

const item = {
  storeName: 'SuperStar',
  name: 'Nike Dunk Low "Sanddrift"',
  price: 200000,
  image: sampleSneaker,
}

const qris = [{ id: 'qris', label: 'QRIS', logo: 'QRIS', color: 'text-[#E53935]' }]

const wallets = [
  { id: 'dana', label: 'DANA', sub: '081287880900', logo: 'dana', color: 'text-sky-500' },
  { id: 'ovo', label: 'OVO', sub: '081287880900', logo: 'ovo', color: 'text-purple-600' },
  { id: 'gopay', label: 'GoPay', sub: '081287880900', logo: 'gopay', color: 'text-cyan-500' },
]

function formatRupiah(number) {
  return 'Rp' + number.toLocaleString('id-ID')
}

function PaymentRow({ option, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(option.id)}
      className="flex w-full cursor-pointer items-center gap-3 text-left"
    >
      <Checkbox checked={selected === option.id} onChange={() => onSelect(option.id)} label={option.label} />
      <span className={`w-12 shrink-0 text-xs font-bold ${option.color}`}>{option.logo}</span>
      <span className="flex-1">
        <span className="block text-sm">{option.label}</span>
        {option.sub && <span className="block text-xs text-neutral-400">{option.sub}</span>}
      </span>
      <ChevronRightIcon width="18" height="18" className="text-neutral-500" />
    </button>
  )
}

function PaymentGroup({ title, children }) {
  return (
    <div className="grid gap-3 md:grid-cols-[35%_1fr]">
      <p className="text-sm">{title}</p>
      <div className="flex flex-col gap-4 md:max-w-xs">{children}</div>
    </div>
  )
}

function CheckoutPage() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)

  function checkout() {
    if (!selected) {
      alert('Pilih metode pembayaran dulu ya')
      return
    }
    navigate('/checkout/success')
  }

  return (
    <div className="flex min-h-svh flex-col bg-[#F1EFEA] text-left font-sans text-sm text-black">
      <CartHeader title="Keranjang Belanja" />

      <main className="flex flex-1 flex-col px-3 pt-6 md:px-[32px] md:pt-[32px]">
        <section className="bg-white">
          <div className="px-4 pt-3 md:px-[24px] md:pt-[8px]">
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Kembali"
              className="-ml-1 flex h-6 w-6 cursor-pointer items-center justify-center"
            >
              <ChevronLeftIcon width="18" height="18" />
            </button>
          </div>

          <div className="grid grid-cols-[1fr_auto] items-center gap-y-2 border-b border-neutral-300 px-4 pb-[20px] pt-3 md:grid-cols-[35%_1fr_auto] md:px-[24px]">
            <p className="flex items-center gap-3 text-base text-[#E53935]">
              <MapPin className="size-5 fill-[#E53935] text-white" />
              Alamat Pengiriman
            </p>
            <Link to="/checkout/address" className="text-xs text-[#E53935] md:order-3">
              Ubah
            </Link>
            <div className="col-span-2 flex flex-col gap-1 text-xs md:col-span-1 md:flex-row md:gap-8">
              <span>
                <span className="block font-semibold">{address.name}</span>
                <span className="block">{address.phone}</span>
              </span>
              <span className="max-w-xs">{address.detail}</span>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_auto] items-center border-b border-neutral-300 px-4 py-[16px] md:grid-cols-[35%_1fr] md:px-[24px]">
            <span className="font-medium">Produk</span>
            <span className="hidden font-medium md:block">Harga</span>
          </div>

          <div className="flex items-center gap-3 px-4 pt-4 md:px-[24px]">
            <img src={sampleAvatar} alt={item.storeName} className="size-5 rounded-full object-cover" />
            <span className="text-xs font-medium">{item.storeName}</span>
            <ChatIcon width="14" height="14" className="text-[#E53935]" />
          </div>

          <div className="grid grid-cols-[1fr_auto] items-center gap-y-2 border-b border-neutral-300 px-4 py-4 md:grid-cols-[35%_1fr] md:px-[24px]">
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 shrink-0 rounded-lg object-cover md:h-[72px] md:w-[72px]"
              />
              <div>
                <p className="text-xs">{item.name}</p>
                <p className="mt-1 font-semibold text-[#E53935] md:hidden">{formatRupiah(item.price)}</p>
              </div>
            </div>
            <p className="hidden text-base font-semibold text-[#E53935] md:block">{formatRupiah(item.price)}</p>
          </div>

          <div className="flex flex-col gap-6 px-4 py-5 md:px-[24px]">
            <p className="text-base font-medium">Metode Pembayaran</p>

            <div className="flex flex-col gap-6 md:pl-8">
              <PaymentGroup title="QRIS">
                {qris.map((q) => (
                  <PaymentRow key={q.id} option={q} selected={selected} onSelect={setSelected} />
                ))}
              </PaymentGroup>

              <PaymentGroup title="E-Wallet">
                {wallets.map((w) => (
                  <PaymentRow key={w.id} option={w} selected={selected} onSelect={setSelected} />
                ))}
              </PaymentGroup>
            </div>
          </div>
        </section>

        <div className="flex-1" />

        <section className="sticky bottom-0 mt-4 bg-white">
          <div className="flex flex-wrap items-center justify-end gap-4 px-4 py-[12px] md:px-[24px]">
            <p className="text-neutral-500">
              <span className="text-xs">Total (1 produk) :</span>{' '}
              <span className="text-lg text-[#E53935]">{formatRupiah(item.price)}</span>
            </p>
            <button
              type="button"
              onClick={checkout}
              className="h-8 w-[130px] cursor-pointer rounded-full bg-[#E53935] text-sm text-white hover:bg-[#c62f2c]"
            >
              Checkout
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default CheckoutPage
