import { cn } from "@/lib/utils";

/**
 * Bezel for the app screenshots (mockup2-*.png, 644x1400).
 *
 * The screenshots already carry their own status bar and Dynamic Island, so the frame draws no
 * notch, and the image keeps its natural height (h-auto) instead of being cropped to a fixed
 * aspect ratio.
 */
export default function PhoneFrame({
  src,
  alt,
  className,
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[3rem] bg-deep-blue p-[10px] shadow-2xl ring-1 ring-slate-900/10",
        className
      )}
    >
      <div className="overflow-hidden rounded-[2.4rem] bg-[#FDF6EC]">
        <img
          src={src}
          alt={alt}
          width={644}
          height={1400}
          loading={eager ? "eager" : "lazy"}
          className="block w-full h-auto"
        />
      </div>
    </div>
  );
}
