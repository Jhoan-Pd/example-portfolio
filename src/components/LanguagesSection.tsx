export default function LanguagesSection({
  title,
  languages,
}: {
  title: string;
  languages: { name: string; flag: string }[];
}) {
  return (
    <ul className="flex gap-4 items-center col-span-6 rounded-2xl bg-foreground p-10">
      <li className="text-white text-xl font-bold border-r pr-4">{title}</li>
      {languages.map((language) => (
        <li
          key={language.name}
          className="flex items-center bg-background rounded-lg text-white text-sm px-4 py-2"
        >
          <img
            src={language.flag}
            alt={language.name}
            className="w-6 h-6 mr-2"
          />
          {language.name}
        </li>
      ))}
    </ul>
  );
}