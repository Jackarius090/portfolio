import { Button } from "./ui/button";
import ProjectCards from "./ProjectCards";
import SkillsAndCourses from "./SkillsAndCourses";

export default function ViewContentBox() {
  return (
    <div>
      <div className="flex gap-2">
        <a href="#projects">
          <Button variant={"outline"}>Projects</Button>
        </a>
        <a href="#courses">
          <Button variant={"outline"}>Skills and Courses</Button>
        </a>
      </div>

      <main className="py-4">
        <ProjectCards />
        <SkillsAndCourses />
      </main>
    </div>
  );
}
