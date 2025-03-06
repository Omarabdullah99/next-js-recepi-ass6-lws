import Delicious from "@/components/Delicious";
import Hero from "@/components/Hero";
import PopularCategory from "@/components/PopularCategory";


export default function Home() {
  return (
  <div>
    <Hero />
    <Delicious />
    <PopularCategory /> 
    <h1 className="text-center text-6xl">hello</h1> 
    </div>
  );
}
