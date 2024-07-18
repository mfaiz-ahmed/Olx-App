import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Services from '../Components/Services'
import Products from '../Components/Products'
import SalePart from '../Components/SalePart'
import Blog from '../Components/Blog'
import Footer from '../Components/Footer'

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Services/>
      <Products/>
      <SalePart/>
      <Blog/>
      <Footer/>
    </div>
  )
}
