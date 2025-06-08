import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import {
  FolderOpen,
  ExternalLink,
  Code,
  Camera,
  Globe,
  Satellite,
  Stars,
} from "lucide-react";

import ProjectCard from "@/components/features/ProjectCard";
import StaggeredFadeInList from "@/components/StaggeredFadeInList";

export const metadata = {
  title: "Projects",
  description:
    "A collection of web applications showcasing different NASA API endpoints.",
  keywords: ["NASA", "API", "projects", "space", "astronomy"],
  authors: [{ name: "Kavan Bhavsar", url: "https://kavan-bhavsar.vercel.app" }],
};

export default function ProjectsPage() {
  const projects = [
    {
      id: "apod",
      title: "Astronomy Picture of the Day",
      description:
        "Discover the cosmos with daily astronomical images and detailed explanations.",
      status: "live" as const,
      icon: <Camera className="w-5 h-5" />,
      color: "bg-blue-500",
      href: "/apod",
    },
    {
      id: "mars-photos",
      title: "Mars Rover Photos",
      description: "Browse stunning images captured by NASA's Mars rovers.",
      status: "coming-soon" as const,
      icon: <Globe className="w-5 h-5" />,
      color: "bg-red-500",
      href: "/mars-photos",
    },
    {
      id: "earth-imagery",
      title: "Earth Imagery",
      description:
        "View satellite images of Earth from space with date search.",
      status: "coming-soon" as const,
      icon: <Satellite className="w-5 h-5" />,
      color: "bg-green-500",
      href: "/earth",
    },
    {
      id: "asteroids",
      title: "Near Earth Objects",
      description: "Track asteroids and comets approaching Earth.",
      status: "coming-soon" as const,
      icon: <Stars className="w-5 h-5" />,
      color: "bg-purple-500",
      href: "/asteroids",
    },
  ];

  const liveProjects = projects.filter((p) => p.status === "live");
  const upcomingProjects = projects.filter((p) => p.status === "coming-soon");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
      <div className="container px-6 py-12 mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <Chip
            as={Link}
            className="mb-6"
            color="secondary"
            href="/projects"
            size="lg"
            startContent={<FolderOpen className="w-4 h-4 ml-2 mr-1" />}
            variant="flat"
          >
            <span>NASA API Collection</span>
          </Chip>

          <h1 className="mb-4 text-4xl font-bold text-transparent lg:text-5xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
            Explore NASA APIs
          </h1>

          <p className="max-w-3xl mx-auto mb-8 text-xl text-default-600">
            A collection of web applications showcasing different NASA API
            endpoints.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Chip
              color="success"
              startContent={
                <div className="w-2 h-2 ml-2 mr-1 bg-green-500 rounded-full" />
              }
              variant="flat"
            >
              {liveProjects.length} Live
            </Chip>
            <Chip
              color="primary"
              startContent={<Code className="w-3 h-3 ml-2 mr-1" />}
              variant="flat"
            >
              {upcomingProjects.length} In Development
            </Chip>
          </div>
        </div>

        {/* Live Projects */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-green-500 rounded-full" />
            <h2 className="text-2xl font-bold">Live Projects</h2>
            <Chip color="success" variant="flat">
              Ready to Explore
            </Chip>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <StaggeredFadeInList>
              {liveProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </StaggeredFadeInList>
          </div>
        </section>

        {/* Coming Soon Projects */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-blue-500 rounded-full" />
            <h2 className="text-2xl font-bold">Coming Soon</h2>
            <Chip color="primary" variant="flat">
              In Development
            </Chip>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <StaggeredFadeInList>
              {upcomingProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </StaggeredFadeInList>
          </div>
        </section>

        {/* API Information */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold">About NASA Open Data</h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="mb-6 text-default-500">
              NASA&apos;s commitment to open science includes making data easily
              accessible to developers, researchers, and space enthusiasts.
            </p>

            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
              <StaggeredFadeInList>
                {[
                  { value: "50+", label: "Available APIs" },
                  { value: "Free", label: "No Cost Access" },
                  { value: "1000+", label: "Daily Requests" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 text-center rounded-lg bg-blue-50 dark:bg-blue-900/20"
                  >
                    <div className="mb-1 text-2xl font-bold text-blue-600">
                      {stat.value}
                    </div>
                    <p className="text-sm text-default-500">{stat.label}</p>
                  </div>
                ))}
              </StaggeredFadeInList>
            </div>

            <Button
              fullWidth
              as={Link}
              color="primary"
              endContent={<ExternalLink className="w-4 h-4" />}
              href="https://api.nasa.gov/"
              target="_blank"
              variant="flat"
            >
              Explore NASA APIs
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
