import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Surface primitive. `interactive` adds hover elevation + border emphasis
 * for clickable cards (projects, skills, stats).
 */
export const Card = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { interactive?: boolean }
>(function Card({ className, interactive, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "glass rounded-xl shadow-card",
        interactive &&
          "transition-all duration-300 ease-spring hover:-translate-y-1 hover:border-foreground/20 hover:shadow-elevated",
        className
      )}
      {...props}
    />
  );
});

export function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 md:p-8", className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 md:p-8 pt-0", className)} {...props} />;
}
