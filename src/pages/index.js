import { Inter } from "next/font/google"
import Navbar from "@/components/NavBar"
import Landing from "@/components/Landing"
import FeaturesSection from "@/components/FeaturesSection"
import Footer from "@/components/Footer"
import FAQSection from "@/components/Faqs"
import Reviews from "@/components/Reviews"
import ReviewsDisplay from "@/components/ReviewsDisplay"
import ReviewForm from "@/components/ReviewForm"


const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <FeaturesSection />
        <Reviews />
      <FAQSection />
      <Footer />
      <ReviewForm />
    </>
  )
}
