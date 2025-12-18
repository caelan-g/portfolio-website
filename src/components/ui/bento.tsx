"use client";

import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type BentoItemBase = {
  id: string;
  title: string;
  description: string;
  image?: string;
  color?: string;
  size?: "tiny" | "small" | "medium" | "large";
};

type BentoItemModal = BentoItemBase & {
  type: "modal";
  modalContent: {
    details: string;
    features?: string[];
  };
};

type BentoItemLink = BentoItemBase & {
  type: "link";
  href: string;
  external?: boolean;
};

type BentoItem = BentoItemModal | BentoItemLink;

const portfolioItems: BentoItem[] = [
  {
    id: "1",
    type: "modal",
    title: "Task Manager App",
    description: "Productivity app with team collaboration",
    image: "/task-management-dashboard.png",
    color: "from-green-500/10 to-emerald-500/10",
    size: "medium",
    modalContent: {
      details:
        "A collaborative task management application with drag-and-drop functionality, real-time updates, and team workspaces.",
      features: [
        "Drag & drop interface",
        "Real-time collaboration",
        "Calendar integration",
        "Progress tracking",
      ],
    },
  },
  {
    id: "2",
    type: "link",
    title: "GitHub Profile",
    description: "Check out my open source work",
    href: "https://github.com",
    external: true,
    color: "from-orange-500/10 to-red-500/10",
    size: "small",
  },
  {
    id: "2",
    type: "link",
    title: "GitHub Profile",
    description: "Check out my open source work",
    href: "https://github.com",
    external: true,
    color: "from-orange-500/10 to-red-500/10",
    size: "tiny",
  },
  {
    id: "2",
    type: "link",
    title: "GitHub Profile",
    description: "Check out my open source work",
    href: "https://github.com",
    external: true,
    color: "from-orange-500/10 to-red-500/10",
    size: "tiny",
  },
  {
    id: "5",
    type: "modal",
    title: "Weather Dashboard",
    description: "Real-time weather data visualization",
    image: "/weather-forecast-dashboard.jpg",
    color: "from-sky-500/10 to-blue-500/10",
    size: "large",
    modalContent: {
      details:
        "Interactive weather dashboard that displays real-time weather data, forecasts, and historical trends with beautiful visualizations.",
      features: [
        "7-day forecast",
        "Interactive maps",
        "Weather alerts",
        "Historical data charts",
      ],
    },
  },
  {
    id: "6",
    type: "link",
    title: "Blog",
    description: "Read my technical articles",
    href: "/blog",
    external: false,
    color: "from-yellow-500/10 to-orange-500/10",
    size: "small",
  },
];

export function BentoPortfolio() {
  const [selectedItem, setSelectedItem] = useState<BentoItemModal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item: BentoItem) => {
    if (item.type === "modal") {
      setSelectedItem(item);
      setIsModalOpen(true);
    } else if (item.type === "link") {
      if (item.external) {
        window.open(item.href, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = item.href;
      }
    }
  };

  const getSizeClasses = (size?: string) => {
    switch (size) {
      case "large":
        return "md:col-span-4 md:row-span-2";
      case "medium":
        return "md:col-span-2 md:row-span-2";
      case "small":
        return "md:col-span-2 md:row-span-1";
      case "tiny":
        return "md:col-span-1 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <section className="w-screen flex flex-col px-8 lg:px-48 py-36 ">
      <div className="text-sm text-neutral-500">2022-Present</div>
      <div className="text-4xl lg:text-6xl font-semibold animate-fade-in">
        Experiments
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[200px] mt-8">
        {portfolioItems.map((item) => (
          <Card
            key={item.id}
            className={cn(
              "group relative cursor-pointer overflow-hidden border-border transition-all hover:shadow-lg",
              getSizeClasses(item.size)
            )}
            onClick={() => handleItemClick(item)}
          >
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-50",
                item.color || "from-muted to-muted"
              )}
            />

            {item.image && (
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform group-hover:scale-105"
              />
            )}

            <div className="relative z-10 flex h-full flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2 text-balance">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground text-pretty">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                {item.type === "modal" ? (
                  <>
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                ) : (
                  <>
                    Visit
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedItem?.title}
            </DialogTitle>
            <DialogDescription className="text-base">
              {selectedItem?.description}
            </DialogDescription>
          </DialogHeader>

          {selectedItem?.image && (
            <div className="overflow-hidden rounded-lg">
              <img
                src={selectedItem.image || "/placeholder.svg"}
                alt={selectedItem.title}
                className="w-full h-64 object-cover"
              />
            </div>
          )}

          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              {selectedItem?.modalContent.details}
            </p>

            {selectedItem?.modalContent.features && (
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {selectedItem.modalContent.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Button onClick={() => setIsModalOpen(false)} className="w-full">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
