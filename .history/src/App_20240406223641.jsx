import { AboutMe } from "./components/aboutme";
import { Education } from "./components/education";
import { Hero } from "./components/hero";
import { Hobbies } from "./components/hobbies";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

//flex flex-col max-w-[1416px] mx-auto   overflow-hidden
export function App() {
  return (
    <div className="">
      <Navbar className='fixed'/>
      <Hero />
      <AboutMe/>
      <Skills />
      <Hobbies />
      <Education />
      <Projects />
    </div>
  );
}
