import React from 'react'
import MainSlider from "../components/main/MainSlider";
import Brand from "../components/main/Brand";
import AboutArea from "../components/main/AboutArea";
import GalleryArea from '../components/main/GalleryArea';
import Token from "../components/main/Token";
import Hero from "../components/main/Hero";
import Ecosystem from "../components/main/Ecosystem";
import KatanaArea from "../components/main/KatanaArea";
import Partners from "../components/main/Partners";
import Roadmap from "../components/main/Roadmap";
import TeamArea from "../components/main/TeamArea";
import BlogArea from "../components/main/BlogArea";
import PurchaseArea from "../components/main/PurchaseArea";
import Contact from "../components/main/Contact";
import FaqSection from "../components/faq/FaqSection";

function Home() {
  return (
	  <main>
	   <MainSlider/>
	   <Brand/>
	   <AboutArea/>
	   <GalleryArea/>
	   <Token/>
	   <Hero/>
	   <Ecosystem/>
	   <KatanaArea/>
	   <Partners/>
	   <Roadmap/>
	   <TeamArea/>
	   <BlogArea/>
	   <PurchaseArea/>
	   <FaqSection/>
	   <Contact/>

	  </main>
	
  )
}

export default Home