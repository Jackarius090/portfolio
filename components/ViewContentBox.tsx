import { Button } from "./ui/button";
import ProjectCards from "./ProjectCards";
import CourseCards from "./CourseCards";

export default function ViewContentBox() {
  return (
    <div>
      <div className="flex gap-2">
        <a href="#projects">
          <Button variant={"outline"}>Projects</Button>
        </a>
        <a href="#courses">
          <Button variant={"outline"}>Courses</Button>
        </a>
      </div>

      <main className="py-4">
        <ProjectCards />
        <CourseCards />
      </main>
    </div>
  );
}
