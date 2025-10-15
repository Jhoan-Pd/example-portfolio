export default function ExperienceCard({
  title,
  role,
  period,
  bullets,
}: {
  title: string;
  role: string;
  period: string;
  bullets: string[];
}) {
  return (
    <article className="col-span-6 rounded-2xl bg-foreground p-10">
      <section className="flex items-center justify-between border-b border-b-grey pb-10">
        <header className="flex flex-col">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-grey text-sm">{role}</p>
        </header>
        <span className="bg-background rounded-lg text-white text-sm p-4">
          {period}
        </span>
      </section>
      <ul className="list-disc list-inside text-white text-sm mt-6">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  );
}