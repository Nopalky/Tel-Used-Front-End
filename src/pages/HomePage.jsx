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

import useProducts from '../hooks/useProducts'

const categoryList = [
  { id: 'Electronic', name: 'Elektronik & Gadget', image: Electronic},
  { id: 'School', name: 'Peralatan Praktikum & Akademik', image: SchoolStuff},
  { id: 'Multimedia', name: 'Aksesori Multimedia', image: Multimedia},
  { id: 'Kos',name: 'Keperluan Kos', image: Kos},
  { id: 'Fashion', name: 'Fashion & Aksesori', image: Fashion},
  { id: 'Hobbies',name: 'Olahraga & Hobi', image: Hobbies},
];

const HomePage = () => {
  const {products, loading, error} = useProducts();
  return (
    <>
        <div className="homepage pt-5">
          <div className="ads flex px-4 md:px-10 justify-center">
            <img src={ADS_IMAGE} alt="ads" className="md:w-1/2 h-auto" />
          </div>
        </div>

        <hr className='my-5 border-t border-gray-300' />

        <div className="popular-category flex flex-col px-4 md:px-10 gap-6 md:gap-15">
          <h3 className='font-semibold'>Berbelanja dari <span className='text-brand'>Kategori Terpopuler</span>✨</h3>
          <div className="category-list grid grid-cols-3 gap-x-3 gap-y-5 md:flex md:justify-evenly">
            {categoryList.map((item) => (
              <a key={item.id} className='flex flex-col justify-start items-center gap-2 text-center text-sm md:text-base'>
                  <img src={item.image} alt={item.name} className="w-20 md:w-auto" />
                  <p>{item.name}</p>
              </a>
            ))}
          </div>
        </div>

        <hr className='my-5 border-t border-gray-300' />
        
        <div className="searched-item px-4 md:px-10 flex flex-col gap-6 md:gap-15">
            <h3 className='font-semibold'>Lagi <span className='text-brand'>Sering Dicari!</span></h3>
            <div className="searched-list grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3 md:flex md:items-stretch md:justify-start md:gap-4 md:flex-wrap">
              {loading? (
                <div className="flex w-full justify-center py-10">
                <div className="size-8 animate-spin rounded-full border-4 border-gray-200 border-t-brand" />
              </div>
              ) : error ? (
                <p>{error}</p>
              ) : (
                products.slice(0,70).map((p) => (
                  <Card key={p.id} id={p.id} name={p.title} category={p.category} price={p.price} image={p.thumbnail} />
                ))
              )}
            </div>
        </div>
    </>
  )
}

export default HomePage