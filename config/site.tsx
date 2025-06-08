import {
  Archive,
  Calendar,
  Camera,
  FileText,
  Globe,
  ImageIcon,
  Maximize2,
  RefreshCw,
  Rocket,
  Satellite,
  Stars,
} from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Nasa API Projects | Kavan Bhavsar",
  description:
    "Explore NASA's open data APIs through beautifully crafted web applications.",
  links: {
    github: "https://github.com/KavanBhavsar35",
    twitter: "https://x.com/kavanbhavsar35",
  },
};

export const data = {
  features: [
    {
      icon: <Camera className="w-6 h-6 text-blue-600" />,
      title: "Daily Discoveries",
      description:
        "New astronomical images and explanations updated daily from NASA's APOD service.",
    },
    {
      icon: <Globe className="w-6 h-6 text-green-600" />,
      title: "Real-time Data",
      description:
        "Access live data from Mars rovers, Earth satellites, and space telescopes.",
    },
    {
      icon: <Stars className="w-6 h-6 text-purple-600" />,
      title: "Interactive Experience",
      description:
        "Explore space through intuitive interfaces designed for discovery.",
    },
  ],
  featuredProjects: [
    {
      title: "Astronomy Picture of the Day",
      description:
        "Discover daily astronomical images with detailed explanations.",
      icon: <Camera className="w-5 h-5" />,
      color: "bg-blue-500",
      href: "/apod",
      status: "live" as const,
    },
    {
      title: "Mars Rover Photos",
      description: "Browse stunning images captured by NASA's Mars rovers.",
      icon: <Globe className="w-5 h-5" />,
      color: "bg-red-500",
      href: "/mars-photos",
      status: "coming-soon" as const,
    },
  ],
  reasons: [
    {
      icon: <Stars className="w-6 h-6 text-yellow-500" />,
      title: "Publicly Accessible",
      description:
        "No cost, no authentication hurdles — just plug and play with open data.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-rose-500" />,
      title: "Reliable Sources",
      description:
        "Backed by NASA’s official infrastructure and curated datasets.",
    },
    {
      icon: <Camera className="w-6 h-6 text-indigo-500" />,
      title: "Visual Richness",
      description:
        "Stunning imagery from telescopes, satellites, and missions in space.",
    },
  ],
  projects: [
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
  ],
  apiFeatures: [
    { value: "50+", label: "Available APIs" },
    { value: "Free", label: "No Cost Access" },
    { value: "1000+", label: "Daily Requests" },
  ],
  apodAbout: [
    {
      icon: <Calendar className="w-4 h-4 text-blue-500" />,
      title: "Daily Updates",
      description: "New images published every day since June 16, 1995",
    },
    {
      icon: <ImageIcon className="w-4 h-4 text-blue-500" />,
      title: "High Quality",
      description: "HD versions available for most images",
    },
    {
      icon: <FileText className="w-4 h-4 text-blue-500" />,
      title: "Expert Explanations",
      description: "Detailed descriptions by professional astronomers",
    },
    {
      icon: <Archive className="w-4 h-4 text-blue-500" />,
      title: "Historical Archive",
      description: "Access nearly three decades of astronomical images",
    },
  ],
  apodTips: [
    {
      icon: <Calendar className="w-4 h-4 text-blue-500" />,
      title: "Date Selection",
      description: "Explore images from any day since June 16, 1995",
    },
    {
      icon: <RefreshCw className="w-4 h-4 text-blue-500" />,
      title: "Random Discovery",
      description: "See randomly selected images from NASA's archive",
    },
    {
      icon: <Maximize2 className="w-4 h-4 text-blue-500" />,
      title: "High Definition",
      description: "View images in full resolution for detailed examination",
    },
  ],
};
