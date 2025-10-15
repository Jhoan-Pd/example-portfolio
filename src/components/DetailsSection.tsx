export default function DetailsSection({
  details,
}: {
  details: { icon: string; value: string }[];
}) {
  return (
    <ul className="flex gap-4 items-center col-span-6 rounded-2xl bg-foreground p-10">
      {details.map((detail) => (
        <li
          key={detail.value}
          className="flex items-center bg-background rounded-lg text-white text-sm px-4 py-2"
        >
          <img src={detail.icon} alt={detail.value} className="w-6 h-6 mr-2" />
          {detail.value}
        </li>
      ))}
    </ul>
  );
}