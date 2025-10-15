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
    <div className="font-sans flex justify-center">
      <LanguageSwitcher currentLang={lang} />
      <main className="grid grid-cols-12 container mt-20 gap-10">
        <AvatarSection />
        <IntroSection intro={dict.intro} />
        <InterestsSection
          title={dict.sections.interests.title}
          items={dict.sections.interests.items}
        />
        <ExperienceCard
          title={dict.sections.experience.freelance.title}
          role={dict.sections.experience.freelance.role}
          period={dict.sections.experience.freelance.period}
          bullets={dict.sections.experience.freelance.bullets}
        />
        <ExperienceCard
          title={dict.sections.experience.meetzed.title}
          role={dict.sections.experience.meetzed.role}
          period={dict.sections.experience.meetzed.period}
          bullets={dict.sections.experience.meetzed.bullets}
        />
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
            { name: "English", flag: "/flags/uk.png" },
            { name: "Spanish", flag: "/flags/spain.png" },
            { name: "Hindi", flag: "/flags/india.png" },
          ]}
        />
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
        <PortfolioSection
          title={dict.sections.portfolio.title}
          links={[
            { name: "Behance", url: "https://behance.net", icon: "/icons/behance.png" },
            { name: "Instagram", url: "https://instagram.com", icon: "/icons/instagram.png" },
            { name: "YouTube", url: "https://youtube.com", icon: "/icons/youtube.png" },
          ]}
        />
        <DetailsSection
          details={[
            { icon: "/icons/age.png", value: "26 years" },
            { icon: "/icons/email.png", value: "iam@freelancer.com" },
            { icon: "/icons/phone.png", value: "+91 9896052055" },
          ]}
        />
      </main>
    </div>
  );
}