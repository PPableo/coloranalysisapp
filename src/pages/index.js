import { Inter } from "next/font/google"
import Navbar from "@/components/NavBar"
import Landing from "@/components/Landing"
import FeaturesSection from "@/components/FeaturesSection"
import Footer from "@/components/Footer"
import FAQSection from "@/components/Faqs"
import Reviews from "@/components/Reviews"


const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <FeaturesSection />
      <FAQSection />
      <Footer />
      {/* <Reviews /> if this line is uncommented then it puts the leave a review at the bottom of the page */}
    </>
  )
}
