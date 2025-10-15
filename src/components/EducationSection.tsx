export default function EducationSection({
  title,
  items,
}: {
  title: string;
  items: { name: string; description: string; year: string }[];
}) {
  return (
    <ul className="flex flex-col gap-4 col-span-6 rounded-2xl bg-foreground p-10">
      <li className="text-white text-xl font-bold border-b pb-4">{title}</li>
      {items.map((item) => (
        <li
          key={item.name}
          className="flex justify-between items-center bg-background rounded-lg text-white text-sm px-4 py-2"
        >
          <div>
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-grey">{item.description}</p>
          </div>
          <span className="text-grey">{item.year}</span>
        </li>
      ))}
    </ul>
  );
}