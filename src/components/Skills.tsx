import { Skills } from "../shared/schema.ts";
import { Card, CardContent } from "./ui/card.tsx";
import { Skeleton } from "./ui/skeleton.tsx";

interface SkillsProps {
  skills: Skills[] | undefined;
  isLoading: boolean;
}

export default function SkillsSection({ skills, isLoading }: SkillsProps) {
  const renderSkeletonSkillCategory = () => (
    <Card>
      <CardContent className="p-6">
        <Skeleton className="h-7 w-48 mb-4" />
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-10 w-24 rounded-md" />
          <Skeleton className="h-10 w-32 rounded-md" />
          <Skeleton className="h-10 w-20 rounded-md" />
          <Skeleton className="h-10 w-28 rounded-md" />
          <Skeleton className="h-10 w-16 rounded-md" />
        </div>
      </CardContent>
    </Card>
  );

  const categoryNames: Record<string, string> = {
    languages: "Programming Languages",
    frontend: "Frontend",
    backend: "Backend",
    databases: "Databases",
    devops: "DevOps & Tools",
    soft: "Soft Skills",
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Skills & Expertise
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {isLoading || !skills ? (
              <>
                {renderSkeletonSkillCategory()}
                {renderSkeletonSkillCategory()}
                {renderSkeletonSkillCategory()}
                {renderSkeletonSkillCategory()}
                {renderSkeletonSkillCategory()}
                {renderSkeletonSkillCategory()}
              </>
            ) : (
              skills.map((skill) => (
                <Card key={skill.id} className="bg-white shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      {categoryNames[skill.category] || skill.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
