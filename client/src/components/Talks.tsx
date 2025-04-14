import { FileText, Video } from "lucide-react";
import { Talk } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

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

  return (
    <section id="talks" className="py-16 md:py-24 bg-white px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Talks & Presentations</h2>
        
        <div className="max-w-4xl mx-auto">
          {isLoading || !talks || talks.length === 0 ? (
            <>
              {renderSkeletonTalk()}
              {renderSkeletonTalk()}
            </>
          ) : (
            talks.map((talk) => (
              <div key={talk.id} className="mb-10 last:mb-0">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <span className="text-gray-500 font-medium">{talk.date}</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-2">{talk.title}</h3>
                    <h4 className="text-gray-700 font-medium mb-3">{talk.event}</h4>
                    <p className="text-gray-600 mb-3">{talk.description}</p>
                    <div className="flex gap-3">
                      {talk.slides_link && (
                        <a 
                          href={talk.slides_link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                        >
                          <FileText className="h-4 w-4" /> Slides
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
            ))
          )}
        </div>
      </div>
    </section>
  );
}
