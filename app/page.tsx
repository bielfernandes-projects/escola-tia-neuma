import Header from "@/components/header";
import HeroCarousel from "@/components/hero-carousel";
import EnsinoSection from "@/components/ensino-section";
import ParceriasSection from "@/components/parcerias-section";
import HorariosSection from "@/components/horarios-section";
import InstagramSection from "@/components/instagram-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroCarousel />
      <EnsinoSection />
      <ParceriasSection />
      <HorariosSection />
      <InstagramSection />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
