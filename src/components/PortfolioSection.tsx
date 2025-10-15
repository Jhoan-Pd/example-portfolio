export default function PortfolioSection({
  title,
  links,
}: {
  title: string;
  links: { name: string; url: string; icon: string }[];
}) {
  return (
    <ul className="flex gap-4 items-center col-span-6 rounded-2xl bg-foreground p-10">
      <li className="text-white text-xl font-bold border-r pr-4">{title}</li>
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-background rounded-lg text-white text-sm px-4 py-2"
          >
            <img src={link.icon} alt={link.name} className="w-6 h-6 mr-2" />
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}