import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import FeaturedProducts from '../components/Home/FeaturedProducts'
import BannerSection from '../components/Home/BannerSection'
import CustomerTestimonials from '../components/Home/CustomerTestimonials'
import ShopByCategory from '../components/Home/ShopByCategory'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import NewsletterSignup from '../components/Home/NewsletterSignup'
import InstagramFeed from '../components/Home/InstagramFeed'
function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedProducts/>
      <ShopByCategory/>
      <BannerSection/>
      <WhyChooseUs/>
      <CustomerTestimonials/>
      <NewsletterSignup/>
      <InstagramFeed/>
    </div>
  )
}

export default Home