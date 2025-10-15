'use client';

import Link from 'next/link';

export default function LanguageButton({
  lang,
  isActive,
}: {
  lang: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={`/${lang}`}
      className={`px-3 py-2 rounded-lg text-sm font-bold transition-colors ${
        isActive
          ? 'bg-foreground text-white'
          : 'bg-background text-white border border-grey'
      }`}
      aria-current={isActive ? 'true' : undefined}
    >
      {lang.toUpperCase()}
    </Link>
  );
}