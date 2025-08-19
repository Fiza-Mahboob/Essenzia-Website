import { Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Category from '../pages/Category'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Wishlist from '../pages/Wishlist'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Layout from '../components/shared/Layout'
import NotFound from '../pages/NotFound'
import 'swiper/css';
import 'swiper/css/pagination';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="category/:categoryName" element={<Category />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="products/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route path='wishlist' element={<Wishlist/>}/>
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)

export default AppRoutes
