import React, { useState } from 'react';
import { Bell, Menu, Edit3, Share2 } from 'lucide-react';
import profileImg from '../assets/hero.png';

export default function ProfilePage() {
  // State untuk tab aktif: 'semua-barang' | 'favorites' | 'reviews'
  const [activeTab, setActiveTab] = useState('favorites');

  /** Untuk Navigasi bar di bawah profile */
  const tabs = [
    { id: 'semua-barang', label: 'Semua Barang' },
    { id: 'favorites', label: 'Favorites' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <div className='min-h-screen bg-[#F2F0EB] font-sans text-gray-800 antialiased'>
      {/* Header */}
      <header className='bg-white border-b border-gray-200 sticky top-0 z-30 shadow-xs'>
        <div className='max-w-6xl mx-auto px-4 py-3 flex items-center justify-between'>
          {/* Logo Tel Used & Title */}
          <div className='flex items-center space-x-4 sm:space-x-6'>
            <div className='leading-tight select-none cursor-pointer'>
              <span className='block text-xl sm:text-2xl font-black tracking-tight text-[#D9383A] font-serif'>
                Tel
              </span>
              <span className='block text-xl sm:text-2xl font-black tracking-tight text-[#D9383A] font-serif -mt-1'>
                Used
              </span>
            </div>

            {/* Pembatas warna merah */}
            <div className='h-7 sm:h-9 w-[1.5px] bg-[#D9383A]' />

            {/* Page Title */}
            <h1 className='text-lg sm:text-xl font-medium text-[#D9383A]'>
              Profile
            </h1>
          </div>

          {/* Icons Interaktif */}
          <div className='flex items-center space-x-3 sm:space-x-4'>
            {/* Icon Notifikasi */}
            <button
              type='button'
              aria-label='Notification'
              className='w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#D9383A] text-white flex items-center justify-center hover:bg-[#c42f31] active:scale-95 transition shadow-sm cursor-pointer'
            >
              <Bell className='w-4 h-4 sm:w-5 sm:h-5' />
            </button>
            <button
              type='button'
              aria-label='Menu'
              className='p-1.5 text-gray-800 hover:text-black rounded hover:bg-gray-100 transition cursor-pointer'
            >
              <Menu className='w-6 h-6 sm:w-7 sm:h-7' />
            </button>
          </div>
        </div>
      </header>

      {/*  Konten Utama */}
      <main className='max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8'>
        <div className='bg-white rounded-lg shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 min-h-[560px]'>
          {/* Profile Information */}
          <div className='flex items-center space-x-4 sm:space-x-5'>
            {/* Foto Profile */}
            <div className='w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D9383A] flex items-center justify-center overflow-hidden border-2 border-white shadow-sm flex-shrink-0'>
              <img src={profileImg} alt="Profile" className='w-full h-full object-cover'/>
            </div>

            {/* Nama & Email */}
            <div>
              <h2 className='text-base sm:text-lg font-bold text-gray-900 leading-snug'>
                Opal
              </h2>
              <p className='text-xs sm:text-sm text-gray-500'>
                nopal@gmail.com
              </p>
            </div>
          </div>

          {/* Info Pengguna */}
          <div className='flex items-center space-x-6 sm:space-x-8 mt-4 sm:mt-5 text-xs sm:text-sm font-semibold text-gray-800'>
            <div>
              <span>0</span> <span className='text-gray-700 font-normal'>Followers</span>
            </div>
            <div>
              <span>0</span> <span className='text-gray-700 font-normal'>Following</span>
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className='flex flex-wrap items-center gap-2.5 sm:gap-3 mt-4 sm:mt-5'>
            <button
              type='button'
              className='inline-flex items-center space-x-2 px-4 py-1.5 border border-gray-300 rounded text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 active:bg-gray-100 transition cursor-pointer'
            >
              <Edit3 className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500' />
              <span>Edit Profile</span>
            </button>
            <button
              type='button'
              className='inline-flex items-center space-x-2 px-5 sm:px-6 py-1.5 sm:py-2 border border-gray-300 rounded text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 active:bg-gray-100 transition cursor-pointer'
            >
              <Share2 className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 hidden' />
              <span>Bagi Toko</span>
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className='border-b border-gray-200 mt-6 sm:mt-8'>
            <nav className='flex space-x-8 sm:space-x-12 -mb-px min-w-max'>
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2.5 sm:py-3 text-xs sm:text-sm transition-all relative font-normal cursor-pointer ${
                      isActive
                        ? 'text-[#D9383A] font-semibold'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {tab.label}
                    {isActive && (
                      <span className='absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#D9383A] rounded-t-sm' />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content: Empty State */}
          <div className='py-16 sm:py-24 flex flex-col items-center justify-center text-center'>
            <div className='w-28 h-28 sm:w-32 sm:h-32 relative flex items-center justify-center'>
              <svg
                viewBox="0 0 140 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M 15 88 C 30 88, 48 78, 55 58 C 62 38, 45 28, 32 40 C 20 54, 34 76, 52 64 C 68 52, 85 35, 96 20"
                  stroke="#F28B82"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                  fill="none"
                />
                <g transform="translate(85, 10) rotate(5)">
                  <polygon
                    points="2,14 36,0 16,36"
                    fill="#E5E7EB"
                    stroke="#D1D5DB"
                    strokeWidth="0.8"
                  />
                  <polygon
                    points="16,36 36,0 12,22"
                    fill="#D1D5DB"
                    stroke="#CBD5E1"
                    strokeWidth="0.8"
                  />
                  <polygon
                    points="36,0 12,22 0,16"
                    fill="#F9FAFB"
                    stroke="#E2E8F0"
                    strokeWidth="0.8"
                  />
                </g>
              </svg>
            </div>

            {/* Empty State Text */}
            <h3 className="text-sm sm:text-base font-bold text-gray-900 mt-5">
              Tidak ada apa-apa
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Masih kosong nih.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}