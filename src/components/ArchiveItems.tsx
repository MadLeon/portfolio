import TopRightArrow from "./TopRightArrow";
import projects from "@/data/projects";

export default function ArchiveItems() {
  return (
    <tbody>
      {projects.map((project, index) => {
        return (
          <tr
            key={index}
            className="border-b border-slate-300/10 last:border-none"
          >
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">{project.year}</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 sm:hidden group/link text-base"
                    href={project.link}
                    target="_blank"
                    aria-label={`${project.name} (opens in a new tab)`}
                  >
                    <span>
                      {project.name}
                      <TopRightArrow />
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">{project.name}</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                {project.organization}
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                {project.techStack.map((tech, index) => {
                  return (
                    <li key={index} className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        {tech}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 text-sm focus-visible:text-teal-300 group/link"
                    href={project.link}
                    target="_blank"
                    aria-label={`${project.name} (opens in a new tab)`}
                  >
                    <span>
                      <span className="inline-block">
                        {project.link}
                        <TopRightArrow />
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
