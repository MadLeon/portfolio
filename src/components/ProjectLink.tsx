interface Project {
  year: string;
  name: string;
  organization: string;
  techStack: string[];
  link: string;
}

export default function ProjectLink({ project }: { project: Project }) {
  return (
    <a
      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 text-sm focus-visible:text-teal-300 group/link"
      href={project.link}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${project.link} (opens in a new tab)`}
    >
      <span>
        {" "}
        <span className="inline-block">
          {project.link}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </span>
    </a>
  );
}
