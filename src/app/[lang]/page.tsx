import { getDictionary } from "../i18n/dictionaries";
import { Lang, languages } from "../i18n/config";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import AvatarSection from "@/components/AvatarSection";
import IntroSection from "@/components/IntroSection";
import InterestsSection from "@/components/InterestsSection";
import ExperienceCard from "@/components/ExperienceCard";
import DesignToolsSection from "@/components/DesignToolsSection";
import EditingToolsSection from "@/components/EditingToolsSection";
import LanguagesSection from "@/components/LanguagesSection";
import EducationSection from "@/components/EducationSection";
import PortfolioSection from "@/components/PortfolioSection";
import DetailsSection from "@/components/DetailsSection";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="font-sans flex flex-col items-center min-h-screen w-full overflow-x-hidden">
      <LanguageSwitcher currentLang={lang} />
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-16 lg:mt-20 pb-8 sm:pb-12 overflow-x-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 w-full max-w-full">
          
          {/* Avatar and Interests Section */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col gap-4 w-full max-w-full">
            <AvatarSection />
            <InterestsSection
              title={dict.sections.interests.title}
              items={dict.sections.interests.items}
            />
          </div>

          {/* Intro Section */}
          <div className="sm:col-span-2 lg:col-span-9 w-full max-w-full">
            <IntroSection intro={dict.intro} />
          </div>

          {/* Education Section */}
          <div className="sm:col-span-2 lg:col-span-6 w-full max-w-full">
            <EducationSection
              title="Education"
              items={[
                {
                  name: "High School",
                  description: "Humanities, Delhi Cantonment, India",
                  year: "2017",
                },
                {
                  name: "Diploma",
                  description: "Animation and Graphic Design, Delhi, India",
                  year: "2017-18",
                },
                {
                  name: "Graduation",
                  description: "Bachelor of Fine Arts, IGNOU Delhi, India",
                  year: "2017-21",
                },
              ]}
            />
          </div>

          {/* Small Modules - Design Tools, Editing Tools, Languages */}
          <div className="sm:col-span-2 lg:col-span-6 flex flex-col gap-4 w-full max-w-full">
            <DesignToolsSection
              title={dict.sections.designTools}
              tools={[
                { name: "Ai", bgColor: "bg-[#360300]", textColor: "text-[#da9f4c]" },
                { name: "Ps", bgColor: "bg-[#0b172a]", textColor: "text-[#74aaf2]" },
                { name: "Id", bgColor: "bg-[#59051e]", textColor: "text-[#d84b6f]" },
                { name: "Xd", bgColor: "bg-[#480d30]", textColor: "text-[#de6ff0]" },
              ]}
            />
            <EditingToolsSection
              title={dict.sections.editingTools.title}
              tools={[
                { name: "Ae", bgColor: "bg-[#0b172a]", textColor: "text-[#74aaf2]" },
                { name: "Pr", bgColor: "bg-[#59051e]", textColor: "text-[#d84b6f]" },
                { name: "C4D", bgColor: "bg-[#480d30]", textColor: "text-[#de6ff0]" },
              ]}
            />
            <LanguagesSection
              title={dict.sections.languages.title}
              languages={[
                { name: "English", flag: "/uk.png" },
                { name: "Spanish", flag: "/spain.png" },
                { name: "Hindi", flag: "/india.png" },
              ]}
            />
          </div>

          {/* Experience Cards */}
          <div className="sm:col-span-1 lg:col-span-6 w-full max-w-full">
            <ExperienceCard
              title={dict.sections.experience.freelance.title}
              role={dict.sections.experience.freelance.role}
              period={dict.sections.experience.freelance.period}
              bullets={dict.sections.experience.freelance.bullets}
            />
          </div>
          <div className="sm:col-span-1 lg:col-span-6 w-full max-w-full">
            <ExperienceCard
              title={dict.sections.experience.meetzed.title}
              role={dict.sections.experience.meetzed.role}
              period={dict.sections.experience.meetzed.period}
              bullets={dict.sections.experience.meetzed.bullets}
            />
          </div>

          {/* Portfolio Section */}
          <div className="sm:col-span-2 lg:col-span-12 w-full max-w-full">
            <PortfolioSection
              title={dict.sections.portfolio.title}
              links={[
                { name: "Behance", url: "https://behance.net", icon: "/behance.jpg" },
                { name: "Instagram", url: "https://instagram.com", icon: "/instagram.png" },
                { name: "YouTube", url: "https://youtube.com", icon: "/youtube.png" },
              ]}
            />
          </div>

          {/* Details Section */}
          <div className="sm:col-span-2 lg:col-span-12 w-full max-w-full">
            <DetailsSection
              details={[
                { icon: "/age.png", value: "26 years" },
                { icon: "/email.png", value: "iam@freelancer.com" },
                { icon: "/phone.png", value: "+91 9896052055" },
              ]}
            />
          </div>
        </div>
      </main>
    </div>
  );
}