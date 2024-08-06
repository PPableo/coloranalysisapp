import { Inter } from "next/font/google"
import Navbar from "@/components/NavBar"
import Landing from "@/components/Landing"
import FeaturesSection from "@/components/FeaturesSection"
import Footer from "@/components/Footer"
import FAQSection from "@/components/Faqs"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <FeaturesSection />
      <FAQSection />
      <Footer />
    </>
  )
}
