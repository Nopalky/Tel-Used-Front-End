import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Crosshair } from 'lucide-react'
import CartHeader from '../components/cart/CartHeader'
import Checkbox from '../components/cart/Checkbox'
import { ChevronLeftIcon } from '../components/cart/icons'

const cityList = ['Bandung', 'Jakarta', 'Purwokerto', 'Surabaya']

const inputClass =
  'h-11 w-full rounded border border-neutral-300 bg-white px-3 text-xs outline-none focus:border-[#E53935]'

function SectionTitle({ number, children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex size-6 items-center justify-center rounded-full border border-black text-xs">
        {number}
      </span>
      <h2 className="text-xs">{children}</h2>
    </div>
  )
}

function AddAddressPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    title: '',
    city: '',
    address: '',
    zip: '',
    address2: '',
  })
  const [showAddress2, setShowAddress2] = useState(false)
  const [isPersonal, setIsPersonal] = useState(true)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/checkout/address')
  }

  return (
    <div className="flex min-h-svh flex-col bg-[#F1EFEA] text-left font-sans text-sm text-black">
      <CartHeader title="Keranjang Belanja" />

      <main className="flex flex-1 flex-col px-3 pt-6 md:px-[32px] md:pt-[32px]">
        <form onSubmit={handleSubmit} className="flex flex-col bg-white">
          <div className="relative flex items-center justify-center border-b border-neutral-300 px-4 py-4 md:px-[24px]">
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Kembali"
              className="absolute left-4 flex h-6 w-6 cursor-pointer items-center justify-center md:left-[24px]"
            >
              <ChevronLeftIcon width="18" height="18" />
            </button>
            <h1 className="text-base">Nambah Alamat</h1>
          </div>

          <div className="flex flex-col gap-8 px-4 py-6 md:px-[24px] md:pl-[64px]">
            <div className="flex flex-col gap-4">
              <SectionTitle number={1}>Recipients Information</SectionTitle>
              <div className="grid max-w-3xl gap-4 md:grid-cols-2 md:pl-9">
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className={inputClass}
                />
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className={inputClass}
                />
                <div className="flex items-center gap-2 rounded border border-neutral-300 px-3 text-xs focus-within:border-[#E53935]">
                  <span>🇮🇩</span>
                  <span>+62</span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number*"
                    required
                    className="h-11 min-w-0 flex-1 bg-transparent outline-none"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="E-mail Address*"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <SectionTitle number={2}>Shipping Address</SectionTitle>
              <div className="grid max-w-3xl gap-4 md:grid-cols-2 md:pl-9">
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Address Title"
                  className={inputClass}
                />
                <select
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className={`${inputClass} ${form.city ? '' : 'text-neutral-400'}`}
                >
                  <option value="" disabled>
                    City*
                  </option>
                  {cityList.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <div className="relative">
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Address (Street, apartment name etc.)"
                    required
                    className={`${inputClass} pr-9`}
                  />
                  <Crosshair className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />
                </div>
                <input
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  placeholder="Zip Code"
                  inputMode="numeric"
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-4 md:pl-9">
                {showAddress2 ? (
                  <input
                    name="address2"
                    value={form.address2}
                    onChange={handleChange}
                    placeholder="Street Address 2 (Optional)"
                    className={`${inputClass} max-w-sm`}
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowAddress2(true)}
                    className="w-fit cursor-pointer text-xs text-neutral-500"
                  >
                    + Street Address 2 (Optional)
                  </button>
                )}

                <label className="flex w-fit cursor-pointer items-center gap-3 text-xs">
                  <Checkbox
                    checked={isPersonal}
                    onChange={() => setIsPersonal(!isPersonal)}
                    label="Set as personal address"
                  />
                  Set as personal address
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end px-4 pb-8 pt-4 md:px-[24px]">
            <button
              type="submit"
              className="h-10 w-full cursor-pointer rounded bg-[#E53935] text-sm text-white hover:bg-[#c62f2c] md:w-64"
            >
              Confirm
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default AddAddressPage
