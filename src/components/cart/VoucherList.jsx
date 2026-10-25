import Checkbox from './Checkbox'
import { ChevronLeftIcon, TrashIcon } from './icons'

function formatRupiah(number) {
  return 'Rp' + number.toLocaleString('id-ID')
}

function VoucherList({ vouchers, setVouchers, onBack }) {
  const allChecked = vouchers.length > 0 && vouchers.every((voucher) => voucher.checked)

  function toggleVoucher(id) {
    const newVouchers = vouchers.map((voucher) => {
      if (voucher.id === id) {
        return { ...voucher, checked: !voucher.checked }
      }
      return voucher
    })
    setVouchers(newVouchers)
  }

  function toggleAll() {
    const newVouchers = vouchers.map((voucher) => {
      return { ...voucher, checked: !allChecked }
    })
    setVouchers(newVouchers)
  }

  function deleteVoucher(id) {
    const newVouchers = vouchers.filter((voucher) => voucher.id !== id)
    setVouchers(newVouchers)
  }

  return (
    <section className="bg-white">
      <button
        type="button"
        onClick={onBack}
        aria-label="Kembali ke keranjang"
        className="cursor-pointer px-4 pt-3 md:px-6 md:pt-2"
      >
        <ChevronLeftIcon />
      </button>

      <div className="flex items-center border-b border-neutral-300 px-4 pb-5 pt-3 md:px-6">
        <div className="flex flex-1 items-center gap-4">
          <Checkbox checked={allChecked} onChange={toggleAll} label="Pilih semua voucher" />
          <span className="font-medium">Voucher</span>
        </div>
        <span className="hidden w-32 text-center font-medium md:block">Total</span>
        <span className="hidden w-20 text-center font-medium md:block">Aksi</span>
      </div>

      {vouchers.length === 0 && (
        <p className="py-12 text-center text-neutral-500">Kamu belum punya voucher.</p>
      )}

      {vouchers.map((voucher) => (
        <div key={voucher.id} className="flex items-center px-4 py-5 md:px-6">
          <div className="flex flex-1 items-center gap-4">
            <Checkbox
              checked={voucher.checked}
              onChange={() => toggleVoucher(voucher.id)}
              label={'Pilih voucher ' + voucher.code}
            />

            <div className="flex w-full max-w-80 overflow-hidden border border-neutral-200">
              <img
                src={voucher.image}
                alt=""
                className="h-24 w-24 shrink-0 object-cover object-left"
              />
              <div className="px-3 py-2">
                <p className="text-base">{voucher.code}</p>
                <p className="text-xs text-neutral-500">Min. {formatRupiah(voucher.minSpend)}</p>
                <p className="mt-1 text-xs text-green-500">{voucher.label}</p>
                <p className="mt-1 text-xs text-neutral-500">EXP: {voucher.expiry}</p>
              </div>
            </div>
          </div>

          <p className="hidden w-32 text-center font-medium text-[#E53935] md:block">
            ({voucher.quantity})
          </p>

          <div className="flex w-20 justify-center">
            <button
              type="button"
              onClick={() => deleteVoucher(voucher.id)}
              aria-label="Hapus voucher"
              className="cursor-pointer text-neutral-500 hover:text-[#E53935]"
            >
              <TrashIcon />
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}

export default VoucherList