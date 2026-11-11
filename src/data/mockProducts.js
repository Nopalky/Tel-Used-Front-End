function hariLalu(n) {
  const d = new Date()
  d.setDate(d.getDate() - n)
  const bulan = String(d.getMonth() + 1).padStart(2, '0')
  const tanggal = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${bulan}-${tanggal}`
}

export const MOCK_PRODUCTS = [
  { id: 1, name: 'Nike Dunk Low "Sanddrift"', subcategory: 'Sepatu', category: 'Fashion & Aksesori', price: 200000, location: 'Bandung', distance: 1.2, uploadedAt: hariLalu(2), tags: ['casual', 'unisex'] },
  { id: 2, name: 'Converse 70s maroon', subcategory: 'Sepatu', category: 'Fashion & Aksesori', price: 550000, location: 'Jakarta', distance: 8.4, uploadedAt: hariLalu(5), tags: ['vintage', 'casual'] },
  { id: 3, name: 'Puma Speedcat OG', subcategory: 'Sepatu', category: 'Fashion & Aksesori', price: 200000, location: 'Bandung', distance: 0.4, uploadedAt: hariLalu(1), tags: ['casual'] },
  { id: 4, name: "Men's 530 Shoes - New Balance", subcategory: 'Sepatu', category: 'Fashion & Aksesori', price: 200000, location: 'Surabaya', distance: 120, uploadedAt: hariLalu(20), tags: ['unisex', 'second'] },
  { id: 5, name: 'Adidas Samba unused 5day old - Men', subcategory: 'Sepatu', category: 'Fashion & Aksesori', price: 200000, location: 'Bandung', distance: 2.5, uploadedAt: hariLalu(9), tags: ['adidas', 'bekas rapi'] },
  { id: 6, name: 'Jual Dunk low Team Red size 41', subcategory: 'Sepatu', category: 'Fashion & Aksesori', price: 550000, location: 'Purwokerto', distance: 95, uploadedAt: hariLalu(13), tags: ['casual', 'unisex'] },
  { id: 7, name: 'Adidas Originals Campus 00s Women', subcategory: 'Sepatu', category: 'Fashion & Aksesori', price: 200000, location: 'Bandung', distance: 3.1, uploadedAt: hariLalu(28), tags: ['adidas', 'vintage'] },
  { id: 8, name: 'Nike Blazer Mid 77 White', subcategory: 'Sepatu', category: 'Fashion & Aksesori', price: 200000, location: 'Jakarta', distance: 140, uploadedAt: hariLalu(45), tags: ['vintage', 'second'] },
  { id: 9, name: 'Kalkulator Casio fx-991EX', subcategory: 'Kalkulator', category: 'Peralatan Praktikum & Akademik', price: 180000, location: 'Bandung', distance: 0.8, uploadedAt: hariLalu(3), tags: ['bekas rapi'] },
  { id: 10, name: 'Jas Lab putih size L', subcategory: 'Jas Lab', category: 'Peralatan Praktikum & Akademik', price: 45000, location: 'Bandung', distance: 1.7, uploadedAt: hariLalu(6), tags: ['second', 'unisex'] },
  { id: 11, name: 'Mouse Logitech G102 hitam', subcategory: 'Mouse', category: 'Elektronik & Gadget', price: 150000, location: 'Bandung', distance: 0.3, uploadedAt: hariLalu(4), tags: ['hitam', 'bekas rapi'] },
  { id: 12, name: 'Powerbank 10000mAh Anker', subcategory: 'Powerbank', category: 'Elektronik & Gadget', price: 120000, location: 'Jakarta', distance: 150, uploadedAt: hariLalu(11), tags: ['hitam'] },
  { id: 13, name: 'Tripod HP + remote', subcategory: 'Tripod', category: 'Aksesori Multimedia', price: 65000, location: 'Purwokerto', distance: 90, uploadedAt: hariLalu(16), tags: ['bekas rapi'] },
  { id: 14, name: 'Kipas angin mini kos', subcategory: 'Kipas', category: 'Keperluan Kos', price: 40000, location: 'Bandung', distance: 0.6, uploadedAt: hariLalu(7), tags: ['second'] },
  { id: 15, name: 'Rak sepatu susun 4 tingkat', subcategory: 'Rak', category: 'Keperluan Kos', price: 75000, location: 'Bandung', distance: 4.2, uploadedAt: hariLalu(22), tags: ['hitam', 'second'] },
  { id: 16, name: 'Raket badminton Yonex Astrox', subcategory: 'Raket', category: 'Olahraga & Hobi', price: 350000, location: 'Surabaya', distance: 125, uploadedAt: hariLalu(35), tags: ['bekas rapi', 'unisex'] },
]
