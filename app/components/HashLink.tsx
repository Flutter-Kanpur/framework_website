"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type HashLinkProps = React.ComponentProps<typeof Link>;

/**
 * Link for same-page hash anchors. On the home page, clicking always scrolls to
 * the section (even if already at that hash), fixing "links stop working after first click".
 * For other pages, behaves like a normal Link to /#hash.
 */
export default function HashLink({ href, onClick, ...props }: HashLinkProps) {
  const pathname = usePathname();
  const hash =
    typeof href === "string"
      ? href.includes("#")
        ? href.split("#")[1]
        : null
      : (href as { hash?: string }).hash?.replace("#", "") ?? null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/" && hash) {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    onClick?.(e);
  };

  return <Link href={href} onClick={handleClick} scroll={false} {...props} />;
}
