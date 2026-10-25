import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import ADS_IMAGE from '../assets/home_ads.jpg'
import Electronic from '../assets/Electronic.png'
import SchoolStuff from '../assets/School_Stuff.png'
import Multimedia from '../assets/Multimedia.png'
import Kos from '../assets/Kos.png'
import Fashion from '../assets/Fashion.png'
import Hobbies from '../assets/Hobbies.png'

const categoryList = [
  { id: 'Electronic', name: 'Elektronik & Gadget', image: Electronic},
  { id: 'School', name: 'Peralatan Praktikum & Akademik', image: SchoolStuff},
  { id: 'Multimedia', name: 'Aksesori Multimedia', image: Multimedia},
  { id: 'Kos',name: 'Keperluan Kos', image: Kos},
  { id: 'Fashion', name: 'Fashion & Aksesori', image: Fashion},
  { id: 'Hobbies',name: 'Olahraga & Hobi', image: Hobbies},
];

const HomePage = () => {
  return (
    <>
        <Navbar />
        <div className="homepage pt-5">
          <div className="ads flex px-10 justify-center">
            <img src={ADS_IMAGE} alt="ads" />
          </div>
        </div>

        <hr className='my-5 border-t border-gray-300' />

        <div className="popular-category flex flex-col px-10 gap-15">
          <h3 className='font-semibold'>Berbelanja dari <span className='bg-brand border-0 px-3 py-2 mx-1 rounded-lg text-white font-bold'>Kategori Terpopuler</span>✨</h3>
          <div className="category-list flex justify-evenly">
            {categoryList.map((item) => (
              <a key={item.id} className='flex flex-col justify-center items-center gap-2'>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
              </a>
            ))}
          </div>
        </div>

        <hr className='my-5 border-t border-gray-300' />
        
        <Footer />
    </>
  )
}

export default HomePage