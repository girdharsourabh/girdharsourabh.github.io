import { Experience } from "../shared/schema";
import { Skeleton } from "../components/ui/skeleton";
import { Badge } from "../components/ui/badge";

interface ExperienceProps {
  experiences: Experience[] | undefined;
  isLoading: boolean;
}

export default function ExperienceSection({
  experiences,
  isLoading,
}: ExperienceProps) {
  const renderSkeletonExperience = () => (
    <div className="relative mb-16">
      <div className="flex flex-col md:flex-row items-start">
        <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 w-4 h-4 rounded-full bg-primary transform -translate-y-1/2 md:-translate-x-1/2"></div>

        <div className="hidden md:block w-1/2 pr-12 text-right">
          <Skeleton className="h-6 w-32 ml-auto" />
        </div>

        <div className="pl-10 md:pl-0 md:w-1/2 md:pl-12">
          <Skeleton className="md:hidden h-6 w-32 mb-2" />
          <Skeleton className="h-7 w-64 mb-2" />
          <Skeleton className="h-6 w-48 mb-3" />
          <Skeleton className="h-20 w-full mb-4" />
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-28 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-16 md:py-24 bg-white px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Professional Experience
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline bar */}
          <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 w-0.5 h-full bg-gray-200 transform md:-translate-x-1/2"></div>

          {isLoading || !experiences ? (
            <>
              {renderSkeletonExperience()}
              {renderSkeletonExperience()}
              {renderSkeletonExperience()}
            </>
          ) : (
            experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative ${
                  index !== experiences.length - 1 ? "mb-16" : ""
                }`}
              >
                <div className="flex flex-col md:flex-row items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 w-4 h-4 rounded-full bg-primary transform -translate-y-1/2 md:-translate-x-1/2"></div>

                  {/* Left content (date for desktop) */}
                  <div className="hidden md:block w-1/2 pr-12 text-right">
                    <span className="text-gray-500 font-medium">
                      {experience.date_range}
                    </span>
                  </div>

                  {/* Right content (or full content on mobile) */}
                  <div className="pl-10 md:pl-0 md:w-1/2 md:pl-12">
                    {/* Mobile date display */}
                    <span className="md:hidden text-gray-500 font-medium block mb-2">
                      {experience.date_range}
                    </span>

                    <h3 className="text-xl font-semibold">
                      {experience.title}
                    </h3>
                    <h4 className="text-gray-700 font-medium mb-3">
                      {experience.company}
                    </h4>
                    <div 
                      className="text-gray-600 mb-4"
                      dangerouslySetInnerHTML={{ __html: experience.description }}
                    />
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 rounded-full"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
