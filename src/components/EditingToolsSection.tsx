export default function EditingToolsSection({
  title,
  tools,
}: {
  title: string;
  tools: { name: string; bgColor: string; textColor: string }[];
}) {
  return (
    <ul className="flex gap-4 items-center col-span-6 rounded-2xl bg-foreground p-10">
      <li className="text-white text-xl font-bold border-r pr-4">{title}</li>
      {tools.map((tool) => (
        <li
          key={tool.name}
          className={`flex items-center ${tool.bgColor} rounded-lg font-bold ${tool.textColor} text-xl px-4 py-2`}
        >
          {tool.name}
        </li>
      ))}
    </ul>
  );
}
