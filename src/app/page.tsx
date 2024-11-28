import { HomeSection } from "@/components/home";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <HomeSection />
      <Footer />
    </div>
  );
}
