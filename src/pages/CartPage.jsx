import { useState } from 'react'
import CartHeader from '../components/cart/CartHeader'
import Checkbox from '../components/cart/Checkbox'
import VoucherList from '../components/cart/VoucherList'
import {
  ChatIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TrashIcon,
  VoucherIcon,
} from '../components/cart/icons'
import sampleSneaker from '../assets/cart/sample-sneaker.png'
import sampleAvatar from '../assets/cart/sample-avatar.png'
import voucherFreeShip from '../assets/cart/voucher-freeship.png'

// Data dummy (belum pakai backend)
const firstItems = [
  {
    id: 1,
    storeName: 'SuperStar',
    name: 'Nike Dunk Low "Sanddrift"',
    price: 200000,
    image: sampleSneaker,
    checked: true,
  },
]

const firstVouchers = [
  {
    id: 1,
    code: 'FASTSHIP877',
    minSpend: 50000,
    label: 'GRATIS ONGKIR',
    expiry: '01 Agustus 2025',
    quantity: 1,
    image: voucherFreeShip,
    checked: false,
  },
]

function formatRupiah(number) {
  return 'Rp' + number.toLocaleString('id-ID')
}

function CartPage() {
  const [items, setItems] = useState(firstItems)
  const [vouchers, setVouchers] = useState(firstVouchers)
  const [showVoucher, setShowVoucher] = useState(false)

  const checkedItems = items.filter((item) => item.checked)
  const total = checkedItems.reduce((sum, item) => sum + item.price, 0)
  const allChecked = items.length > 0 && checkedItems.length === items.length

  const checkedVoucher = vouchers.find((voucher) => voucher.checked)
  const voucherName = checkedVoucher ? checkedVoucher.code : 'Voucher'

  function toggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    )
  }

  function toggleStore(storeName) {
    const storeItems = items.filter((item) => item.storeName === storeName)
    const newValue = !storeItems.every((item) => item.checked)
    setItems(
      items.map((item) =>
        item.storeName === storeName ? { ...item, checked: newValue } : item,
      ),
    )
  }

  function toggleAll() {
    setItems(items.map((item) => ({ ...item, checked: !allChecked })))
  }

  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id))
  }

  function deleteCheckedItems() {
    if (checkedItems.length === 0) {
      alert('Pilih produk yang mau dihapus dulu ya')
      return
    }
    setItems(items.filter((item) => !item.checked))
  }

  function checkout() {
    if (checkedItems.length === 0) {
      alert('Pilih minimal 1 produk untuk checkout')
      return
    }
    alert('Checkout ' + checkedItems.length + ' produk, total ' + formatRupiah(total))
  }

  return (
    <div className="flex min-h-svh flex-col bg-[#F1EFEA] text-left font-sans text-sm text-black">
      <CartHeader avatarSrc={sampleAvatar} />

      <main className="flex flex-1 flex-col px-3 pt-6 md:px-[32px] md:pt-[32px]">
        {showVoucher ? (
          <VoucherList
            vouchers={vouchers}
            setVouchers={setVouchers}
            onBack={() => setShowVoucher(false)}
          />
        ) : (
          <section className="bg-white">
            <div className="px-4 pt-3 md:px-[24px] md:pt-[8px]">
              <button
                type="button"
                onClick={() => window.history.back()}
                aria-label="Kembali"
                className="-ml-1 flex h-6 w-6 cursor-pointer items-center justify-center"
              >
                <ChevronLeftIcon width="18" height="18" />
              </button>
            </div>

            <div className="grid grid-cols-[1fr_auto] items-center border-b border-neutral-300 px-4 pb-[20px] pt-3 md:grid-cols-[35%_1fr_7rem] md:px-[24px] md:pt-2">
              <div className="flex items-center gap-4">
                <Checkbox checked={allChecked} onChange={toggleAll} label="Pilih semua produk" />
                <span className="font-medium">Produk</span>
              </div>
              <span className="hidden w-32 text-center font-medium md:block">Harga</span>
              <span className="hidden text-center font-medium md:block">Aksi</span>
            </div>

            {items.length === 0 && (
              <p className="px-4 py-12 text-center text-neutral-500">
                Keranjang belanjamu masih kosong.
              </p>
            )}

            {items.map((item, index) => {
              const showStore = index === 0 || items[index - 1].storeName !== item.storeName
              const storeChecked = items
                .filter((i) => i.storeName === item.storeName)
                .every((i) => i.checked)

              return (
                <div key={item.id}>
                  {showStore && (
                    <div className="flex items-center gap-4 border-b border-neutral-300 px-4 py-[16px] md:px-[24px]">
                      <Checkbox
                        checked={storeChecked}
                        onChange={() => toggleStore(item.storeName)}
                        label={'Pilih semua produk dari ' + item.storeName}
                      />
                      <span className="font-medium">{item.storeName}</span>
                      <button
                        type="button"
                        onClick={() => alert('Fitur chat belum tersedia')}
                        aria-label="Chat toko"
                        className="-ml-2 cursor-pointer text-[#E53935]"
                      >
                        <ChatIcon width="16" height="16" />
                      </button>
                    </div>
                  )}

                  <div className="grid grid-cols-[1fr_auto] items-center gap-y-2 px-4 py-4 md:grid-cols-[35%_1fr_7rem] md:px-[24px]">
                    <div className="flex items-center gap-4">
                      <Checkbox
                        checked={item.checked}
                        onChange={() => toggleItem(item.id)}
                        label={'Pilih ' + item.name}
                      />
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 shrink-0 rounded-lg object-cover md:h-[72px] md:w-[72px]"
                      />
                      <div>
                        <p className="text-sm">{item.name}</p>
                        <p className="mt-1 font-semibold text-[#E53935] md:hidden">
                          {formatRupiah(item.price)}
                        </p>
                      </div>
                    </div>

                    <p className="hidden w-32 text-center text-base font-semibold text-[#E53935] md:block">
                      {formatRupiah(item.price)}
                    </p>

                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={() => deleteItem(item.id)}
                        aria-label="Hapus produk"
                        className="cursor-pointer text-neutral-500 hover:text-[#E53935]"
                      >
                        <TrashIcon width="22" height="22" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </section>
        )}

        <div className="flex-1" />

        <section className="sticky bottom-0 mt-4 bg-white">
          <div className="flex h-[48px] items-center border-b border-neutral-300 px-4 md:px-[24px]">
            <button
              type="button"
              onClick={() => setShowVoucher(true)}
              className="flex w-full cursor-pointer items-center justify-between gap-3 md:ml-auto md:w-[28%]"
            >
              <span className="flex items-center gap-3 text-[#E53935]">
                <VoucherIcon width="20" height="20" />
                <span className="text-black">{voucherName}</span>
              </span>
              <ChevronRightIcon width="18" height="18" className="text-neutral-500" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-[12px] md:px-[24px]">
            <div className="flex items-center gap-4 text-neutral-500">
              <Checkbox checked={allChecked} onChange={toggleAll} label="Pilih semua" />
              <span>Semua ({items.length})</span>
              <button
                type="button"
                onClick={deleteCheckedItems}
                className="ml-6 cursor-pointer hover:text-[#E53935] md:ml-[40px]"
              >
                Hapus
              </button>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-neutral-500">
                <span className="text-xs">Total ({checkedItems.length} produk) :</span>{' '}
                <span className="text-lg text-[#E53935]">{formatRupiah(total)}</span>
              </p>
              <button
                type="button"
                onClick={checkout}
                className="h-8 w-[130px] cursor-pointer rounded-full bg-[#E53935] text-sm text-white hover:bg-[#c62f2c]"
              >
                Checkout
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default CartPage