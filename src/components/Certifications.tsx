import { Award, ExternalLink } from "lucide-react";
import { Certification } from "../shared/schema";
import { Skeleton } from "../components/ui/skeleton";
import { Badge } from "../components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

interface CertificationsProps {
  certifications: Certification[] | undefined;
  isLoading: boolean;
}

export default function CertificationsSection({
  certifications,
  isLoading,
}: CertificationsProps) {
  const renderSkeletonCertification = () => (
    <div className="mb-4">
      <Card>
        <CardHeader className="space-y-1">
          <Skeleton className="h-5 w-36 mb-1" />
          <Skeleton className="h-4 w-24" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4" />
        </CardContent>
        <CardFooter>
          <Skeleton className="h-8 w-24" />
        </CardFooter>
      </Card>
    </div>
  );

  const renderCertificationGrid = (certs: Certification[]) => {
    const columns: Certification[][] = [];
    for (let i = 0; i < certs.length; i += 2) {
      columns.push(certs.slice(i, i + 2));
    }

    return (
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {columns.map((pair, idx) => (
            <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
              <div className="flex flex-col gap-6">
                {pair.map((cert) => (
                  <Card
                    key={cert.id}
                    className="h-full hover:shadow-md transition-shadow"
                  >
                    <CardHeader className="space-y-1">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg font-semibold">
                          {cert.title}
                        </CardTitle>
                        <Award className="h-5 w-5 text-amber-500" />
                      </div>
                      <CardDescription className="font-medium text-primary">
                        {cert.issuer}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-1">
                      <p className="text-sm text-gray-500 mb-3">
                        Issued: {cert.issue_date}
                      </p>
                      {cert.credential_id && (
                        <p className="text-sm text-gray-500 mb-3">
                          Credential ID: {cert.credential_id}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {cert.skills &&
                          cert.skills.length > 0 &&
                          cert.skills.map((skill, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="bg-gray-50 text-gray-700"
                            >
                              {skill}
                            </Badge>
                          ))}
                      </div>
                    </CardContent>
                    {cert.credential_url && (
                      <CardFooter>
                        <a
                          href={cert.credential_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm font-medium"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> Verify credential
                        </a>
                      </CardFooter>
                    )}
                  </Card>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  };

  // Group certifications by year for the timeline view
  const groupByYear = (certs: Certification[]) => {
    const groups: Record<string, Certification[]> = {};

    certs.forEach((cert) => {
      const year = cert.issue_date.split(" ").pop() || "Unknown";
      if (!groups[year]) {
        groups[year] = [];
      }
      groups[year].push(cert);
    });

    return Object.entries(groups)
      .sort((a, b) => Number(b[0]) - Number(a[0])) // Sort years in descending order
      .map(([year, certs]) => ({ year, certs }));
  };

  return (
    <section id="certifications" className="py-8 md:py-12 bg-gray-50 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>

        {isLoading || !certifications || certifications.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={i}>{renderSkeletonCertification()}</div>
              ))}
          </div>
        ) : (
          <Tabs defaultValue="grid" className="w-full">
            {/* <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="grid">Grid View</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
              </TabsList>
            </div> */}

            <TabsContent value="grid">
              {renderCertificationGrid(certifications)}
            </TabsContent>

            <TabsContent value="timeline">
              <div className="max-w-5xl mx-auto">
                {(() => {
                  const flat = [...certifications];
                  // Optional: sort by year desc using the last token in issue_date
                  flat.sort((a, b) => {
                    const ya = Number((a.issue_date || "").split(" ").pop()) || 0;
                    const yb = Number((b.issue_date || "").split(" ").pop()) || 0;
                    return yb - ya;
                  });
                  const pairs: Certification[][] = [];
                  for (let i = 0; i < flat.length; i += 2) {
                    pairs.push(flat.slice(i, i + 2));
                  }
                  return (
                    <Carousel opts={{ align: "start" }}>
                      <CarouselContent>
                        {pairs.map((pair, idx) => (
                          <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                            <div className="flex flex-col gap-4">
                              {pair.map((cert) => (
                                <Card
                                  key={cert.id}
                                  className="hover:shadow-md transition-shadow"
                                >
                                  <CardHeader className="flex flex-row items-start justify-between pb-2">
                                    <div>
                                      <CardTitle className="text-lg">
                                        {cert.title}
                                      </CardTitle>
                                      <CardDescription className="mt-1">
                                        {cert.issuer}
                                      </CardDescription>
                                    </div>
                                    <Badge
                                      variant="outline"
                                      className="bg-gray-50 text-gray-700"
                                    >
                                      {cert.issue_date}
                                    </Badge>
                                  </CardHeader>
                                  <CardContent>
                                    {cert.credential_id && (
                                      <p className="text-sm text-gray-500 mb-2">
                                        Credential ID: {cert.credential_id}
                                      </p>
                                    )}
                                    <div className="flex flex-wrap gap-1.5 mt-3">
                                      {cert.skills &&
                                        cert.skills.length > 0 &&
                                        cert.skills.map((skill, index) => (
                                          <Badge
                                            key={index}
                                            variant="outline"
                                            className="bg-blue-50 text-blue-700 border-blue-200"
                                          >
                                            {skill}
                                          </Badge>
                                        ))}
                                    </div>
                                  </CardContent>
                                  {cert.credential_url && (
                                    <CardFooter>
                                      <a
                                        href={cert.credential_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm font-medium"
                                      >
                                        <ExternalLink className="h-3.5 w-3.5" /> Verify
                                        credential
                                      </a>
                                    </CardFooter>
                                  )}
                                </Card>
                              ))}
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  );
                })()}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </section>
  );
}
