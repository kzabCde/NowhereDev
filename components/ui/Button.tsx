"use client";

import Link from "next/link";
import { forwardRef, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium " +
  "transition-colors duration-200 ease-spring disabled:pointer-events-none " +
  "disabled:opacity-50 focus-visible:outline focus-visible:outline-2 " +
  "focus-visible:outline-offset-2 focus-visible:outline-ring select-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-glow",
  secondary:
    "bg-foreground text-background hover:bg-foreground/90 shadow-sm",
  outline:
    "border border-border bg-card/40 text-foreground hover:bg-muted hover:border-foreground/20",
  ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-base",
  icon: "h-10 w-10",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<HTMLMotionProps<"button">, "children" | "ref"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const interaction = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
} as const;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const { variant = "primary", size = "md", className, children } = props;
    const classes = cn(base, variants[variant], sizes[size], className);

    if ("href" in props && props.href !== undefined) {
      const { external, href } = props;
      const externalProps = external
        ? { target: "_blank", rel: "noreferrer" }
        : {};
      return (
        <motion.div
          {...interaction}
          className="inline-flex"
        >
          <Link href={href} className={classes} {...externalProps}>
            {children}
          </Link>
        </motion.div>
      );
    }

    const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
      props as ButtonAsButton;

    return (
      <motion.button
        ref={ref}
        className={classes}
        {...interaction}
        {...rest}
      >
        {children}
      </motion.button>
    );
  }
);
