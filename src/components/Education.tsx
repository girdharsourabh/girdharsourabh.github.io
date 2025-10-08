import { Education } from "../shared/schema.ts";
import { Card, CardContent } from "./ui/card.tsx";
import { Skeleton } from "./ui/skeleton.tsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface EducationProps {
  education: Education[] | undefined;
  isLoading: boolean;
}

export default function EducationSection({
  education,
  isLoading,
}: EducationProps) {
  const renderSkeletonEducation = () => (
    <Card className="bg-gray-50 shadow-sm">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Skeleton className="h-7 w-64 mb-2" />
          <Skeleton className="h-5 w-16 ml-2" />
        </div>
        <Skeleton className="h-6 w-48 mb-3" />
        <Skeleton className="h-16 w-full" />
      </CardContent>
    </Card>
  );

  return (
    <section id="education" className="py-16 md:py-24 bg-white px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>

        <div className="max-w-4xl mx-auto">
          {isLoading || !education ? (
            <>
              {renderSkeletonEducation()}
              {renderSkeletonEducation()}
            </>
          ) : (
            <Carousel opts={{ align: "start" }}>
              <CarouselContent>
                {education.map((edu) => (
                  <CarouselItem key={edu.id} className="md:basis-1/2 lg:basis-1/2 h-full">
                    <Card className="bg-gray-50 shadow-sm h-full">
                      <CardContent className="p-6 h-full flex flex-col min-h-[26rem] md:min-h-[30rem]">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold">{edu.degree}</h3>
                          <span className="text-gray-500 text-sm whitespace-nowrap ml-2">
                            {edu.year}
                          </span>
                        </div>
                        <h4 className="text-gray-700 font-medium mb-3">
                          {edu.institution}
                        </h4>
                        <div
                          className="text-gray-600"
                          dangerouslySetInnerHTML={{ __html: edu.description }}
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
}
