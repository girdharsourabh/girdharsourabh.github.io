import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { Compass, Users, Building, Cloud, Sparkles, FileSearch } from "lucide-react";

interface ConsultingService {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface ConsultingServicesProps {
  services: ConsultingService[];
  isLoading: boolean;
}

const iconMap: { [key: string]: any } = {
  Compass,
  Users,
  Building,
  Cloud,
  Sparkles,
  FileSearch,
};

export default function ConsultingServices({ services, isLoading }: ConsultingServicesProps) {
  if (isLoading || !services) {
    return (
      <section id="consulting" className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <Skeleton className="h-12 w-64 mb-4 mx-auto" />
          <Skeleton className="h-6 w-96 mb-12 mx-auto" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-64" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="consulting" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Consulting Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Helping organizations transform their technology landscape, build
            high-performing teams, and drive innovation through strategic guidance
            and hands-on expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Compass;
            return (
              <Card
                key={service.id}
                className="hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Interested in working together?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                window.scrollTo({
                  top: element.offsetTop - 80,
                  behavior: "smooth",
                });
              }
            }}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
