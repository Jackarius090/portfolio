"use client";

import { Button } from "./ui/button";
import ProjectCards from "./ProjectCards";
import CourseCards from "./CourseCards";
import { useState } from "react";

export default function ViewContentBox() {
  const [view, setView] = useState<"projects" | "courses">("projects");

  return (
    <div>
      <div className="flex gap-2">
        <Button
          variant={view === "projects" ? "default" : "outline"}
          onClick={() => setView("projects")}
        >
          Projects
        </Button>

        <Button
          variant={view === "courses" ? "default" : "outline"}
          onClick={() => setView("courses")}
        >
          Courses
        </Button>
      </div>

      <main className="py-4">
        {view === "projects" && <ProjectCards />}
        {view === "courses" && <CourseCards />}
      </main>
    </div>
  );
}
