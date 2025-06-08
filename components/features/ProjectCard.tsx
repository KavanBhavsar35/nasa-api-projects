import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";

import { Project } from "@/types/apod";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
        project.status === "coming-soon" ? "opacity-75" : ""
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br opacity-5 ${project.color}`}
      />

      <CardHeader className="relative flex flex-col items-start gap-4 p-6 transition-colors duration-300 group-hover:bg-white dark:group-hover:bg-slate-900">
        <div className="flex items-center justify-between w-full">
          <div className={`p-3 rounded-lg ${project.color} bg-opacity-10`}>
            {project.icon}
          </div>
          {project.status === "live" ? (
            <Chip
              className="flex gap-1 text-xs"
              color="success"
              size="sm"
              startContent={
                <div className="w-2 h-2 ml-2 bg-green-500 rounded-full animate-pulse" />
              }
              variant="flat"
            >
              Live
            </Chip>
          ) : (
            <Chip
              className="text-xs"
              color="default"
              size="sm"
              startContent={<Clock className="w-3 h-3 ml-2" />}
              variant="flat"
            >
              Coming Soon
            </Chip>
          )}
        </div>

        <h3 className="text-xl transition-colors group-hover:text-blue-600">
          {project.title}
        </h3>
      </CardHeader>

      <CardBody className="relative">
        <p className="mb-4 text-slate-600 dark:text-slate-400 line-clamp-3">
          {project.description}
        </p>

        <div className="flex items-center justify-between">
          {project?.endpoint && (
            <code className="px-2 py-1 text-xs rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              {project?.endpoint}
            </code>
          )}

          {project.status === "live" ? (
            <Button
              className="group/btn"
              color="primary"
              endContent={
                <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
              }
              size="sm"
              variant="light"
            >
              <Link href={`/${project.id}`}>
                Explore
                {/* <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover/btn:translate-x-1" /> */}
              </Link>
            </Button>
          ) : (
            <Button disabled size="sm">
              Coming Soon
            </Button>
          )}
        </div>
      </CardBody>

      {project.status === "live" && (
        <div className="absolute bottom-0 left-0 w-full h-1 transition-transform duration-300 origin-left transform scale-x-0 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:scale-x-100" />
      )}
    </Card>
  );
}
