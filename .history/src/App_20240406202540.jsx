import { AboutMe } from "./components/aboutme";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";

export function App() {
  return (
    <div className="max-w-[1416px] mx-auto py-5">
      <Navbar />
      <Hero />
      <AboutMe/>
    </div>
  );
}
