import { Award, FileText, Link, Video } from "lucide-react";
import { Talk } from "../shared/schema.ts";
import { Skeleton } from "./ui/skeleton.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";

interface TalksProps {
  talks: Talk[] | undefined;
  isLoading: boolean;
}

export default function TalksSection({ talks, isLoading }: TalksProps) {
  const renderSkeletonTalk = () => (
    <div className="mb-10 last:mb-0">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          <Skeleton className="h-6 w-24" />
        </div>
        <div className="md:w-3/4">
          <Skeleton className="h-7 w-80 mb-2" />
          <Skeleton className="h-6 w-48 mb-3" />
          <Skeleton className="h-20 w-full mb-3" />
          <div className="flex gap-3">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
          </div>
        </div>
      </div>
    </div>
  );

  // Filter talks and awards based on title patterns
  const isAward = (talk: Talk) =>
    talk.title.toLowerCase().includes("award") ||
    talk.title.toLowerCase().includes("top 5%") ||
    talk.title.toLowerCase().includes("excellence");

  const awards = talks?.filter(isAward) || [];
  const talksList = talks?.filter((talk) => !isAward(talk)) || [];

  return (
    <section id="talks" className="py-16 md:py-24 bg-gray-50 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Talks & Awards</h2>

        <div className="max-w-4xl mx-auto">
          {isLoading || !talks || talks.length === 0 ? (
            <>
              {renderSkeletonTalk()}
              {renderSkeletonTalk()}
            </>
          ) : (
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="talks">Talks</TabsTrigger>
                  <TabsTrigger value="awards">Awards</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-8">
                {talks
                  .sort((a, b) => {
                    // Parse dates to compare - assumes format like "Mar 2024"
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return dateB.getTime() - dateA.getTime(); // Sort descending (newest first)
                  })
                  .map((talk) => (
                    <div
                      key={talk.id}
                      className="mb-10 last:mb-0 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/4">
                          <span className="text-gray-500 font-medium">
                            {talk.date}
                          </span>
                          <div className="mt-2">
                            {isAward(talk) ? (
                              <Badge
                                variant="outline"
                                className="bg-amber-50 text-amber-700 border-amber-200"
                              >
                                <Award className="h-3 w-3 mr-1" /> Award
                              </Badge>
                            ) : (
                              <Badge
                                variant="outline"
                                className="bg-blue-50 text-blue-700 border-blue-200"
                              >
                                <FileText className="h-3 w-3 mr-1" /> Talk
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="md:w-3/4">
                          <h3 className="text-xl font-semibold mb-2">
                            {talk.title}
                          </h3>
                          <h4 className="text-gray-700 font-medium mb-3">
                            {talk.event}
                          </h4>
                          <p className="text-gray-600 mb-3">
                            {talk.description}
                          </p>
                          <div className="flex gap-3">
                            {talk.slides_link && (
                              <a
                                href={talk.slides_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                              >
                                <Link className="h-4 w-4" /> LinkedIn Post
                              </a>
                            )}
                            {talk.video_link && (
                              <a
                                href={talk.video_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                              >
                                <Video className="h-4 w-4" /> Video
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </TabsContent>

              <TabsContent value="talks" className="space-y-8">
                {talksList
                  .sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return dateB.getTime() - dateA.getTime();
                  })
                  .map((talk) => (
                    <div
                      key={talk.id}
                      className="mb-10 last:mb-0 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/4">
                          <span className="text-gray-500 font-medium">
                            {talk.date}
                          </span>
                          <div className="mt-2">
                            <Badge
                              variant="outline"
                              className="bg-blue-50 text-blue-700 border-blue-200"
                            >
                              <FileText className="h-3 w-3 mr-1" /> Talk
                            </Badge>
                          </div>
                        </div>
                        <div className="md:w-3/4">
                          <h3 className="text-xl font-semibold mb-2">
                            {talk.title}
                          </h3>
                          <h4 className="text-gray-700 font-medium mb-3">
                            {talk.event}
                          </h4>
                          <p className="text-gray-600 mb-3">
                            {talk.description}
                          </p>
                          <div className="flex gap-3">
                            {talk.slides_link && (
                              <a
                                href={talk.slides_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                              >
                                <Link className="h-4 w-4" /> LinkedIn Post
                              </a>
                            )}
                            {talk.video_link && (
                              <a
                                href={talk.video_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                              >
                                <Video className="h-4 w-4" /> Video
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </TabsContent>

              <TabsContent value="awards" className="space-y-8">
                {awards
                  .sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return dateB.getTime() - dateA.getTime();
                  })
                  .map((award) => (
                    <div
                      key={award.id}
                      className="mb-10 last:mb-0 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/4">
                          <span className="text-gray-500 font-medium">
                            {award.date}
                          </span>
                          <div className="mt-2">
                            <Badge
                              variant="outline"
                              className="bg-amber-50 text-amber-700 border-amber-200"
                            >
                              <Award className="h-3 w-3 mr-1" /> Award
                            </Badge>
                          </div>
                        </div>
                        <div className="md:w-3/4">
                          <h3 className="text-xl font-semibold mb-2">
                            {award.title}
                          </h3>
                          <h4 className="text-gray-700 font-medium mb-3">
                            {award.event}
                          </h4>
                          <p className="text-gray-600 mb-3">
                            {award.description}
                          </p>
                          <div className="flex gap-3">
                            {award.slides_link && (
                              <a
                                href={award.slides_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                              >
                                <Link className="h-4 w-4" /> LinkedIn Post
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
    </section>
  );
}
