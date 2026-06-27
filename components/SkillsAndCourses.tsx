export default function SkillsAndCourses() {
  return (
    <section id="courses" className="my-8 flex flex-col gap-4">
      <article>
        <h1 className="font-bold">Skills</h1>
        <ul className="flex flex-col gap-4">
          <li>Typescript</li>
          <li>React JS</li>
          <li>NextJS</li>
        </ul>
      </article>
      <article>
        <h1 className="font-bold">Courses</h1>
        <ul className="flex flex-col gap-4">
          <li>The Web Developer Bootcamp 2026 - Colt Steele course on Udemy</li>
          <li>Modern React with Redux - Stephen Grider course on Udemy</li>
        </ul>
      </article>
    </section>
  );
}
