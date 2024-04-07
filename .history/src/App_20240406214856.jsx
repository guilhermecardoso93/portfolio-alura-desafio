import { AboutMe } from "./components/aboutme";
import { Education } from "./components/education";
import { Hero } from "./components/hero";
import { Hobbies } from "./components/hobbies";
import { Navbar } from "./components/navbar";
import { Skills } from "./components/skills";

export function App() {
  return (
    <div className="flex max-w-[1416px] mx-auto p-5 gap-10 overflow-hidden">
      <Navbar className='fixed'/>
      <Hero />
      <AboutMe/>
      <Skills />
      <Hobbies />
      <Education />
    </div>
  );
}
