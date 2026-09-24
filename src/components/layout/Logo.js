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
        className="h-10 w-10 rounded-md object-contain sm:h-11 sm:w-11 lg:h-12 lg:w-12"
        priority
      />
      <span className="min-w-0 leading-none">
        <span
          className={`block whitespace-nowrap text-lg font-black tracking-normal sm:text-xl ${
            inverted ? "text-white" : "text-brand-navy"
          }`}
        >
          EMAUS <span className="text-brand-cyan">POS</span>
        </span>
        <span
          className={`mt-1 hidden text-[9px] font-bold uppercase tracking-normal sm:block lg:text-[10px] ${
            inverted ? "text-blue-100" : "text-brand-muted"
          }`}
        >
          {company.tagline}
        </span>
      </span>
    </Link>
  );
}
