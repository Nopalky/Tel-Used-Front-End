import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import ADS_IMAGE from '../assets/home_ads.jpg'
import Electronic from '../assets/Electronic.png'
import SchoolStuff from '../assets/School_Stuff.png'
import Multimedia from '../assets/Multimedia.png'
import Kos from '../assets/Kos.png'
import Fashion from '../assets/Fashion.png'
import Hobbies from '../assets/Hobbies.png'
import Sneaker from '../assets/image.jpg'
import Jacket from '../assets/image-1.jpg'
import Cooker from '../assets/image-2.jpg'
import Camera from '../assets/image-3.jpg'
import Fan from '../assets/image-4.jpg'

import Card from '../components/Card'

const categoryList = [
  { id: 'Electronic', name: 'Elektronik & Gadget', image: Electronic},
  { id: 'School', name: 'Peralatan Praktikum & Akademik', image: SchoolStuff},
  { id: 'Multimedia', name: 'Aksesori Multimedia', image: Multimedia},
  { id: 'Kos',name: 'Keperluan Kos', image: Kos},
  { id: 'Fashion', name: 'Fashion & Aksesori', image: Fashion},
  { id: 'Hobbies',name: 'Olahraga & Hobi', image: Hobbies},
];

const searchedItemList = [
  { id: 1, category: 'Sepatu', name: 'Nike Dunk Low "Sanddrift"', price: 200000, distance: 1.2, image: Sneaker },
  { id: 2, category: 'Jaket', name: 'Leather Jacket', price: 550000, distance: 1.2, image: Jacket },
  { id: 3, category: 'Kompor listrik', name: 'Kompor listrik + teflon', price: 200000, distance: 1.2, image: Cooker },
  { id: 4, category: 'Kamera', name: 'Sony Alpha a6000 Mirrorless Digital Camera', price: 200000, distance: 1.2, image: Camera },
  { id: 5, category: 'Kipas', name: 'Kipas tangan warna putih', price: 200000, distance: 1.2, image: Fan },
]

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
          <h3 className='font-semibold'>Berbelanja dari <span className='text-brand'>Kategori Terpopuler</span>✨</h3>
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
        
        <div className="searched-item px-10 flex flex-col gap-15">
            <h3 className='font-semibold'>Lagi <span className='text-brand'>Sering Dicari!</span></h3>
            <div className="searched-list flex items-start justify-evenly">
              {searchedItemList.map((item) => (
                <Card {...item} />
              ))}
            </div>
        </div>
        <Footer />
    </>
  )
}

export default HomePage