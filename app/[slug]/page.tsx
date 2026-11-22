import type { Metadata } from "next";
import { isValidElement, type ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { cardTitle, getProject, projects } from "../../data/projects";
import { OptimizedImage } from "../../components/OptimizedImage";
import { ProjectPlaceholder } from "../../components/ProjectCard";
import { Footer } from "../../components/Footer";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

const normalize = (src: string) => src.replace(/^\//, "");

/** True if any element inside `node` shows the file `src` (e.g. an image or video in the description). */
function containsMedia(node: ReactNode, src: string): boolean {
  if (Array.isArray(node)) return node.some((n) => containsMedia(n, src));
  if (!isValidElement(node)) return false;
  const props = node.props as { src?: unknown; children?: ReactNode };
  if (typeof props.src === "string" && normalize(props.src) === normalize(src)) return true;
  return containsMedia(props.children, src);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.title} | Marcos Oriol`,
    description: project.description,
    openGraph: project.image ? { images: [`/${project.image.replace(/^\//, "")}`] } : undefined,
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.theme === project.theme && p.slug !== project.slug);
  // Skip the header media when the same file is already shown in the explanation.
  const showCover = !(project.image && containsMedia(project.detailedDescription, project.image));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/#projects"
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-black/10 bg-white/80 backdrop-blur-md text-sm text-neutral-700 hover:text-neutral-900 hover:border-black/20 transition-all duration-300"
        >
          <ArrowLeft size={16} />
          <span>Projects</span>
        </Link>
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 text-balance">{project.title}</h1>
        <p className="text-lg text-neutral-600 leading-relaxed mb-8">{project.description}</p>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          {project.skills}
          <div className="flex items-center gap-4">
            {project.websiteLink && (
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <span>Website</span>
                <ExternalLink size={14} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <span>Repo</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {showCover &&
          (project.image ? (
            // Full image at its natural proportions, never cropped.
            <div className="mb-12 overflow-hidden rounded-2xl border border-black/10">
              <OptimizedImage
                src={project.image}
                alt={project.title}
                width={1600}
                height={1000}
                priority
                quality={80}
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="block w-full h-auto"
              />
            </div>
          ) : (
            <div className="relative h-64 lg:h-[28rem] mb-12 overflow-hidden rounded-2xl border border-black/10">
              <ProjectPlaceholder icon={project.placeholderIcon} />
            </div>
          ))}

        {project.detailedDescription}

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-sm text-neutral-500 mb-4">More in {project.theme}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-black/[0.08] bg-white p-3 pr-5 hover:border-black/[0.16] transition-colors"
                >
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-neutral-100">
                    {p.image ? (
                      <OptimizedImage src={p.image} alt="" fill playOnHover quality={60} sizes="96px" className="object-cover" />
                    ) : (
                      <ProjectPlaceholder />
                    )}
                  </div>
                  <p className="flex-1 font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {cardTitle(p)}
                  </p>
                  <ArrowRight size={18} className="shrink-0 text-neutral-500 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
