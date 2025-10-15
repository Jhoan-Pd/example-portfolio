import { Lang, defaultLang } from "./config";

type ExperienceItem = {
  title: string;
  role: string;
  period: string;
  bullets: string[];
};

type EducationItem = {
  title: string;
  field: string;
  location: string;
  period: string;
};

type PortfolioItem = {
  name: string;
  url: string;
  icon: string;
};

type LanguageItem = {
  name: string;
  flag: string;
};

type DetailItem = {
  icon: string;
  value: string;
};

export type Dictionary = {
  intro: string;
  sections: {
    interests: { title: string; items: string[] };
    experience: { freelance: ExperienceItem; meetzed: ExperienceItem };
    designTools: string;
    editingTools: { title: string; tools: string[] };
    languages: { title: string; items: LanguageItem[] };
    education: {
      highSchool: EducationItem;
      diploma: EducationItem;
      graduation: EducationItem;
    };
    portfolio: { title: string; items: PortfolioItem[] };
    details: { title: string; items: DetailItem[] };
  };
  switcher: { label: string; es: string; en: string };
};

const dictionaries: Record<Lang, Dictionary> = {
  es: {
    intro:
      "Mi nombre es Sunil Kumar, diseñador de logotipos/marca autodidacta con más de 4 años de experiencia creando marcas modernas, limpias y minimalistas que dejan una impresión duradera.",
    sections: {
      interests: {
        title: "Intereses",
        items: ["🎮 Videojuegos", "📽️ Cine", "✈️ Viajar"],
      },
      experience: {
        freelance: {
          title: "Freelance",
          role: "Diseñador de logotipos/marca",
          period: "2021 - ahora",
          bullets: [
            "Trabajé en proyectos diversos de logotipos e identidad de marca.",
            "Colaboré con clientes de varios países.",
            "Desarrollé un conjunto de habilidades de diseño versátil.",
            "Me adapté a desafíos y requisitos únicos.",
          ],
        },
        meetzed: {
          title: "Meetzed",
          role: "Diseñador gráfico",
          period: "2020 - 2021",
          bullets: [
            "Colaboración: Apoyé al Diseñador Principal en proyectos.",
            "Branding: Creé identidades de marca únicas.",
            "Herramientas: Usé Illustrator, Photoshop e InDesign.",
          ],
        },
      },
      designTools: "Herramientas de diseño",
      editingTools: {
        title: "Herramientas de edición",
        tools: ["Ae", "Pr", "C4D"],
      },
      languages: {
        title: "Idiomas",
        items: [
          { name: "Inglés", flag: "/flags/uk.png" },
          { name: "Español", flag: "/flags/spain.png" },
          { name: "Hindi", flag: "/flags/india.png" },
        ],
      },
      education: {
        highSchool: {
          title: "Secundaria",
          field: "Humanidades",
          location: "Delhi Cantonment, India",
          period: "2017",
        },
        diploma: {
          title: "Diploma",
          field: "Animación y Diseño Gráfico",
          location: "Delhi, India",
          period: "2017 - 18",
        },
        graduation: {
          title: "Graduación",
          field: "Licenciatura en Bellas Artes",
          location: "IGNOU Delhi, India",
          period: "2017 - 21",
        },
      },
      portfolio: {
        title: "Portafolio",
        items: [
          { name: "Behance", url: "https://behance.net", icon: "/icons/behance.png" },
          { name: "Instagram", url: "https://instagram.com", icon: "/icons/instagram.png" },
          { name: "YouTube", url: "https://youtube.com", icon: "/icons/youtube.png" },
        ],
      },
      details: {
        title: "Detalles",
        items: [
          { icon: "/icons/age.png", value: "26 años" },
          { icon: "/icons/email.png", value: "iam@freelancer.com" },
          { icon: "/icons/phone.png", value: "+91 9896052055" },
        ],
      },
    },
    switcher: { label: "Idioma", es: "Español", en: "Inglés" },
  },
  en: {
    intro:
      "My name is Sunil Kumar, a self-taught logo/brand designer with 4+ years of experience creating modern, clean, and minimal brands that make a lasting impression.",
    sections: {
      interests: {
        title: "Interests",
        items: ["🎮 Gaming", "📽️ Film Making", "✈️ Traveling"],
      },
      experience: {
        freelance: {
          title: "Freelancer",
          role: "Logo/Brand Designer",
          period: "2021 - now",
          bullets: [
            "Worked on diverse logo and brand identity projects.",
            "Collaborated with clients from multiple countries.",
            "Developed a versatile design skill set.",
            "Adapted to unique challenges and requirements.",
          ],
        },
        meetzed: {
          title: "Meetzed",
          role: "Graphic Designer",
          period: "2020 - 2021",
          bullets: [
            "Collaboration: Supported Lead Designer on projects.",
            "Branding: Crafted unique brand identities.",
            "Tools: Used Illustrator, Photoshop & InDesign.",
          ],
        },
      },
      designTools: "Design Tools",
      editingTools: {
        title: "Editing Tools",
        tools: ["Ae", "Pr", "C4D"],
      },
      languages: {
        title: "Languages",
        items: [
          { name: "English", flag: "/flags/uk.png" },
          { name: "Spanish", flag: "/flags/spain.png" },
          { name: "Hindi", flag: "/flags/india.png" },
        ],
      },
      education: {
        highSchool: {
          title: "High School",
          field: "Humanities",
          location: "Delhi Cantonment, India",
          period: "2017",
        },
        diploma: {
          title: "Diploma",
          field: "Animation and Graphic Design",
          location: "Delhi, India",
          period: "2017 - 18",
        },
        graduation: {
          title: "Graduation",
          field: "Bachelor of Fine Arts",
          location: "IGNOU Delhi, India",
          period: "2017 - 21",
        },
      },
      portfolio: {
        title: "Portfolio",
        items: [
          { name: "Behance", url: "https://behance.net", icon: "/icons/behance.png" },
          { name: "Instagram", url: "https://instagram.com", icon: "/icons/instagram.png" },
          { name: "YouTube", url: "https://youtube.com", icon: "/icons/youtube.png" },
        ],
      },
      details: {
        title: "Details",
        items: [
          { icon: "/icons/age.png", value: "26 years" },
          { icon: "/icons/email.png", value: "iam@freelancer.com" },
          { icon: "/icons/phone.png", value: "+91 9896052055" },
        ],
      },
    },
    switcher: { label: "Language", es: "Spanish", en: "English" },
  },
};

export async function getDictionary(lang: Lang): Promise<Dictionary> {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}