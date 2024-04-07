import { AboutMe } from "./components/aboutme";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Skills } from "./components/skills";

export function App() {
  return (
    <div className="max-w-[1416px] mx-auto p-5 overflow-hidden">
      <Navbar className='fixed'/>
      <Hero />
      <AboutMe/>
      <Skills />
    </div>
  );
}
