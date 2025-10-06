import { useState } from "react";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { Profile } from "../shared/schema.ts";
import { Card, CardContent } from "./ui/card.tsx";
import { Button } from "./ui/button.tsx";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useToast } from "../hooks/use-toast";
import { Skeleton } from "./ui/skeleton.tsx";

interface ContactProps {
  profile: Profile | undefined;
  isLoading: boolean;
}

export default function ContactSection({ profile, isLoading }: ContactProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for your message! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setIsSubmitting(false);
    }, 1000);
  };

  const renderContactInfo = () => {
    if (isLoading || !profile) {
      return (
        <Card className="bg-white shadow-sm h-full">
          <CardContent className="p-6">
            <Skeleton className="h-7 w-48 mb-6" />

            <div className="space-y-6">
              <div className="flex items-start">
                <Skeleton className="h-6 w-6 mr-4" />
                <div>
                  <Skeleton className="h-5 w-16 mb-1" />
                  <Skeleton className="h-5 w-48" />
                </div>
              </div>

              <div className="flex items-start">
                <Skeleton className="h-6 w-6 mr-4" />
                <div>
                  <Skeleton className="h-5 w-20 mb-1" />
                  <Skeleton className="h-5 w-36" />
                </div>
              </div>

              <div className="flex items-start">
                <Skeleton className="h-6 w-6 mr-4" />
                <div>
                  <Skeleton className="h-5 w-24 mb-1" />
                  <Skeleton className="h-5 w-48" />
                </div>
              </div>

              <div className="flex items-start">
                <Skeleton className="h-6 w-6 mr-4" />
                <div>
                  <Skeleton className="h-5 w-16 mb-1" />
                  <Skeleton className="h-5 w-40" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }

    return (
      <Card className="bg-white shadow-sm h-full">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-6 text-primary">
            Contact Information
          </h3>

          <div className="space-y-6">
            {profile.email && (
              <div className="flex items-start">
                <div className="text-primary text-xl mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
            )}

            {profile.location && (
              <div className="flex items-start">
                <div className="text-primary text-xl mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-600">{profile.location}</p>
                </div>
              </div>
            )}

            {profile.linkedin && (
              <div className="flex items-start">
                <div className="text-primary text-xl mr-4">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">LinkedIn</h4>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {profile.linkedin.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              </div>
            )}

            {profile.github && (
              <div className="flex items-start">
                <div className="text-primary text-xl mr-4">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">GitHub</h4>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {profile.github.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderContactForm = () => {
    if (isLoading) {
      return (
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <Skeleton className="h-7 w-48 mb-6" />

            <div className="space-y-4">
              <div>
                <Skeleton className="h-5 w-16 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

              <div>
                <Skeleton className="h-5 w-16 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

              <div>
                <Skeleton className="h-5 w-20 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

              <div>
                <Skeleton className="h-5 w-24 mb-2" />
                <Skeleton className="h-32 w-full" />
              </div>

              <Skeleton className="h-12 w-full mt-2" />
            </div>
          </CardContent>
        </Card>
      );
    }

    return (
      <Card className="bg-white shadow-sm">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-6 text-primary">
            Send Message
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Feel free to reach out if you're looking for a developer, have
          questions, or just want to connect.
        </p>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Contact Information */}
          <div className="md:w-2/5">{renderContactInfo()}</div>

          {/* Contact Form */}
          <div className="md:w-3/5">{renderContactForm()}</div>
        </div>
      </div>
    </section>
  );
}
