function CartHeader({ title = 'Keranjang Belanja', userName = 'User', avatarSrc }) {
  return (
    <header className="flex h-20 items-center justify-between bg-white px-4 shadow-md md:px-12">
      <div className="flex items-center gap-4 md:gap-8">
        <div className="text-2xl font-bold italic leading-7">
          <p className="text-[#972925]">Tel</p>
          <p className="text-[#E33D37]">Used</p>
        </div>

        <div className="h-14 w-px bg-[#E33E38]" />

        <p className="text-lg text-[#E33E38]">{title}</p>
      </div>

      {avatarSrc ? (
        <img src={avatarSrc} alt="Foto profil" className="h-12 w-12 rounded-full object-cover" />
      ) : (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E33E38] text-2xl font-semibold text-white">
          {userName.charAt(0).toUpperCase()}
        </div>
      )}
    </header>
  )
}

export default CartHeader