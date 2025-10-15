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
    <div className="font-sans flex flex-col items-center">
      <LanguageSwitcher currentLang={lang} />
      <main className="grid grid-cols-12 gap-6 container mt-20 px-4 sm:px-6 md:px-10">
        {/* Avatar and Interests Section */}
        <div className="col-span-12 sm:col-span-4 md:col-span-3 flex flex-col gap-4">
          <AvatarSection />
          <InterestsSection
            title={dict.sections.interests.title}
            items={dict.sections.interests.items}
          />
        </div>

        {/* Intro Section */}
        <div className="col-span-12 sm:col-span-8 md:col-span-9">
          <IntroSection intro={dict.intro} />
        </div>

        {/* Education and Small Modules */}
        <div className="col-span-12 md:col-span-6">
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
        <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
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
        <div className="col-span-12 sm:col-span-6 md:col-span-6">
          <ExperienceCard
            title={dict.sections.experience.freelance.title}
            role={dict.sections.experience.freelance.role}
            period={dict.sections.experience.freelance.period}
            bullets={dict.sections.experience.freelance.bullets}
          />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-6">
          <ExperienceCard
            title={dict.sections.experience.meetzed.title}
            role={dict.sections.experience.meetzed.role}
            period={dict.sections.experience.meetzed.period}
            bullets={dict.sections.experience.meetzed.bullets}
          />
        </div>

        {/* Portfolio Section */}
        <div className="col-span-12">
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
        <div className="col-span-12">
          <DetailsSection
            details={[
              { icon: "/age.png", value: "26 years" },
              { icon: "/email.png", value: "iam@freelancer.com" },
              { icon: "/phone.png", value: "+91 9896052055" },
            ]}
          />
        </div>
      </main>
    </div>
  );
}