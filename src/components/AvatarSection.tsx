import Image from "next/image";

export default function AvatarSection() {
  return (
    <span className="flex items-center justify-center col-span-3 row-span-2 bg-white rounded-2xl overflow-hidden">
      <Image src="/avatar.jpg" alt="avatar" width={300} height={300} />
    </span>
  );
}