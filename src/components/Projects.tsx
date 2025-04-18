import { ExternalLink, Github } from "lucide-react";
import { Project } from "../shared/schema.ts";
import { Card, CardContent } from "../components/ui/card.tsx";
import { Badge } from "./ui/badge.tsx";
import { Skeleton } from "./ui/skeleton.tsx";

interface ProjectsProps {
  projects: Project[] | undefined;
  isLoading: boolean;
}

export default function ProjectsSection({
  projects,
  isLoading,
}: ProjectsProps) {
  const renderSkeletonProject = () => (
    <Card className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="h-48 bg-gray-200">
        <Skeleton className="w-full h-full" />
      </div>
      <CardContent className="p-6">
        <Skeleton className="h-7 w-48 mb-2" />
        <Skeleton className="h-20 w-full mb-4" />
        <div className="flex flex-wrap gap-2 mb-4">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-24 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>
        <div className="flex gap-3">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-28" />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading || !projects ? (
            <>
              {renderSkeletonProject()}
              {renderSkeletonProject()}
              {renderSkeletonProject()}
            </>
          ) : (
            projects.map((project) => (
              <Card
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={
                      project.image_url ||
                      "https://via.placeholder.com/800x400?text=Project+Image"
                    }
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.demo_link && (
                      <a
                        href={project.demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                      >
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </a>
                    )}
                    {project.code_link && (
                      <a
                        href={project.code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                      >
                        <Github className="h-4 w-4" /> Source Code
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
