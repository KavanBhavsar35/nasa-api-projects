import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { ExternalLink, Github, Heart } from "lucide-react";

import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-divider bg-default-50">
      <div className="container px-6 py-8 mx-auto space-y-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-1 text-sm text-default-600 md:items-start">
            <p className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-danger" />
              <span>by</span>
              <Link
                isExternal
                className="text-sm font-medium"
                color="primary"
                href="https://kavan-bhavsar.vercel.app"
              >
                Kavan Bhavsar
              </Link>
            </p>
            <p>Using NASA’s public APIs to build creative space apps 🚀</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link className="text-sm" color="primary" href="/projects">
              Explore Projects
            </Link>

            <Link
              isExternal
              className="flex items-center gap-1"
              color="foreground"
              href="https://api.nasa.gov/"
            >
              <span>NASA APIs</span>
              <ExternalLink className="w-3 h-3" />
            </Link>

            <Link
              isExternal
              className="flex items-center gap-1"
              color="foreground"
              href={siteConfig.links.github}
            >
              <span>GitHub</span>
              <Github className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <Divider />

        <p className="text-xs text-center text-default-500">
          © {new Date().getFullYear()} Kavan Bhavsar — Data sourced from NASA
          Open Data. Some media may be copyright protected.
        </p>
      </div>
    </footer>
  );
}
