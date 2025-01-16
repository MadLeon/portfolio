export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <p className="mb-4">
        I’m a passionate developer dedicated to building intuitive and
        high-performing applications that prioritize user experience and
        maintainability. My expertise spans creating modern user interfaces,
        optimizing back-end performance, and delivering robust web solutions.
      </p>
      <p className="mb-4">
        Currently, I’m pursuing a Bachelor of Technology in Software Engineering
        at McMaster University while working on innovative web development
        projects. I enjoy collaborating with teams to craft user-friendly
        applications and exploring tools like React, Tailwind, and Next.js to
        enhance my technical skillset.
      </p>
      <p className="mb-4">
        In the past, I’ve had the privilege of contributing as a Front-End
        Engineer at BBD Insights, where I developed dynamic user interfaces for
        machine learning models, and as an Application Developer at CIBC, where
        I adapted legacy systems for cloud migration. I’ve also built various
        personal and collaborative projects, including a game-focused social
        media platform and a capital optimization tool.
      </p>
      <p className="mb-4">
        When I’m not coding, I enjoy woodworking and diving into new video
        games, often blending creativity with a love for problem-solving.
      </p>
    </section>
  );
}
