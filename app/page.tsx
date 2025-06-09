"use client";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Rocket, Camera, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import ProjectCard from "@/components/features/ProjectCard";
import FadeInSection from "@/components/FadeInSection";
import StaggeredFadeInList from "@/components/StaggeredFadeInList";
import { data } from "@/config/site";
import Aurora from "@/components/Aurora/Aurora";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
      {/* Hero Section */}

      <FadeInSection>
        <section className="relative overflow-hidden rounded-b-3xl">
          <div className="absolute inset-0">
            <Aurora
              amplitude={1.0}
              blend={0.5}
              // colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
              speed={0.5}
            />
          </div>
          <div className="container relative z-10 px-6 py-24 mx-auto lg:py-32">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Chip
                className="px-1 mb-6 text-white bg-slate-500/40"
                size="lg"
                startContent={<Rocket className="w-4 h-4 ml-2 mr-1" />}
                variant="flat"
              >
                <span>Powered by NASA Open Data</span>
              </Chip>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h1 className="mb-4 text-4xl font-bold text-transparent sm:text-5xl lg:text-7xl bg-gradient-to-r dark:from-blue-600 dark:to-purple-600 bg-clip-text from-indigo-700 to-violet-950">
                  A Universe of NASA Projects
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <p className="max-w-2xl mx-auto mb-8 text-xl dark:text-slate-300 lg:text-2xl text-slate-800">
                  Discover a curated set of web experiments built using NASA’s
                  public APIs. Each project dives into a unique corner of our
                  cosmos.
                </p>
              </motion.div>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  as={Link}
                  className="font-medium"
                  color="primary"
                  endContent={<Camera className="w-5 h-5" />}
                  href="/apod"
                  size="lg"
                >
                  Start Exploring APOD
                </Button>

                <Button
                  as={Link}
                  className="border bg-slate-200 border-slate-300 font-mediumtext-blue-600 hover:bg-slate-100 dark:text-blue-400 dark:bg-slate-800 dark:hover:bg-slate-700"
                  endContent={<ArrowRight className="w-4 h-4" />}
                  href="/projects"
                  size="lg"
                  variant="flat"
                >
                  View All Projects
                </Button>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Features Section */}
      <FadeInSection>
        <section className="py-16">
          <div className="w-full max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
                NASA Data at Your Fingertips
              </h2>
              <p className="max-w-2xl mx-auto text-xl text-default-600">
                Access real-time astronomical data through beautifully crafted
                interfaces.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <StaggeredFadeInList>
                {data.features.map((feature, index) => (
                  <Card
                    key={index}
                    className="h-full transition-all hover:shadow-lg"
                  >
                    <CardBody className="p-6">
                      <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-lg dark:bg-blue-900/30">
                        {feature.icon}
                      </div>
                      <h3 className="mb-2 text-lg font-semibold">
                        {feature.title}
                      </h3>
                      <p className="text-default-500">{feature.description}</p>
                    </CardBody>
                  </Card>
                ))}
              </StaggeredFadeInList>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Projects Preview */}
      <FadeInSection>
        <section className="py-16">
          <div className="w-full max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
                Featured Projects
              </h2>
              <p className="max-w-2xl mx-auto text-xl text-default-600">
                Each project showcases different NASA APIs and datasets.
              </p>
            </div>

            <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
              <StaggeredFadeInList>
                {data.featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    project={{ id: index.toString(), ...project }}
                  />
                ))}
              </StaggeredFadeInList>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Why nasa apis */}
      <FadeInSection>
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="w-full max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
                Why Choose NASA APIs?
              </h2>
              <p className="max-w-2xl mx-auto text-xl text-default-600">
                NASA’s APIs provide reliable, real-time access to space data
                used by researchers, educators, and enthusiasts worldwide.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <StaggeredFadeInList>
                {data.reasons.map((item, i) => (
                  <div
                    key={i}
                    className="p-6 border rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                  >
                    <div className="mb-3">{item.icon}</div>
                    <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-default-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </StaggeredFadeInList>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Tech Stack */}
      <FadeInSection>
        <section className="py-16 bg-slate-100 dark:bg-slate-900">
          <div className="w-full max-w-screen-xl px-4 mx-auto text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              Built With Modern Tools
            </h2>
            <p className="max-w-xl mx-auto mb-8 text-default-600">
              This platform is built using React, Next.js, HeroUI, Lucide,
              Tailwind, and real-time data from NASA APIs.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-default-500">
              <span>🔧 React</span>
              <span>🚀 Next.js</span>
              <span>🎨 HeroUI</span>
              <span>💡 Lucide Icons</span>
              <span>🌌 NASA APIs</span>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection>
        <section className="py-16 text-white bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container px-6 mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              Ready to Explore Space?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-xl text-blue-100">
              Start your cosmic journey with today&apos;s featured astronomical
              image.
            </p>

            <Button
              as={Link}
              className="font-medium text-blue-600 bg-white"
              color="primary"
              endContent={<Rocket className="w-5 h-5" />}
              href="/apod"
              size="lg"
              variant="solid"
            >
              Launch Explorer
            </Button>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
