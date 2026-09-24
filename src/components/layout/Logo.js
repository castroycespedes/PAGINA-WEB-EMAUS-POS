import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";

export function Logo({ inverted = false }) {
  return (
    <Link className="flex items-center gap-3" href="/" aria-label={`${company.name} inicio`}>
      <Image
        src={company.logo.src}
        alt={company.logo.alt}
        width={64}
        height={64}
        className="h-12 w-12 rounded-md object-contain"
        priority
      />
      <span className="leading-none">
        <span
          className={`block text-xl font-black tracking-normal ${
            inverted ? "text-white" : "text-brand-navy"
          }`}
        >
          EMAUS <span className="text-brand-cyan">POS</span>
        </span>
        <span
          className={`mt-1 block text-[10px] font-bold uppercase tracking-normal ${
            inverted ? "text-blue-100" : "text-brand-muted"
          }`}
        >
          {company.tagline}
        </span>
      </span>
    </Link>
  );
}
