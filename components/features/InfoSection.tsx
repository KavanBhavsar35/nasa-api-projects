import { Info, Lightbulb } from "lucide-react";

import StaggeredFadeInList from "../StaggeredFadeInList";

import { data } from "@/config/site";

export function InfoSection() {
  return (
    <section className="max-w-6xl px-4 py-10 mx-auto space-y-10">
      {/* About APOD */}
      <div className="p-6 border border-blue-200 rounded-xl bg-blue-50 dark:bg-blue-900/10 dark:border-blue-800">
        <div className="flex items-center gap-2 mb-6">
          <Info className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
            About APOD
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <StaggeredFadeInList>
            {data.apodAbout.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                {item.icon}
                <div>
                  <h3 className="font-medium text-blue-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-default-500">{item.description}</p>
                </div>
              </div>
            ))}
          </StaggeredFadeInList>
        </div>
      </div>

      {/* Tips for Exploration */}
      <div className="p-6 bg-white border border-blue-200 rounded-xl dark:bg-blue-900/5 dark:border-blue-800">
        <div className="flex items-center gap-2 mb-6">
          <Lightbulb className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
            Tips for Exploration
          </h2>
        </div>

        <div className="space-y-4">
          <StaggeredFadeInList>
            {data.apodTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                {tip.icon}
                <div>
                  <h3 className="font-medium text-blue-900 dark:text-white">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-default-500">{tip.description}</p>
                </div>
              </div>
            ))}
          </StaggeredFadeInList>
        </div>
      </div>
    </section>
  );
}
