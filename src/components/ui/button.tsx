import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-blue-500/50",
        primary:
          "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-blue-500/50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%]",
        secondary:
          "bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-700 hover:from-gray-700 hover:to-gray-800 hover:border-gray-600 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-gray-500/50",
        outline:
          "border-2 border-white/20 bg-white/5 text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/10 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-white/30",
        ghost:
          "text-white hover:bg-white/10 hover:backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-white/20",
        link: "text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline hover:-translate-y-0.5 active:translate-y-0",
        glass:
          "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/15 hover:border-white/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-white/30",
        gradient:
          "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 hover:shadow-xl hover:shadow-cyan-500/25 hover:-translate-y-1 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-cyan-500/50",
        destructive:
          "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:shadow-red-500/25 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-red-500/50",
      },
      size: {
        sm: "h-9 px-3 text-sm gap-1.5 rounded-md",
        default: "h-11 px-6 text-sm gap-2",
        lg: "h-14 px-8 text-base gap-3 rounded-xl",
        xl: "h-16 px-10 text-lg gap-4 rounded-xl",
        icon: "size-11 rounded-lg",
        "icon-sm": "size-9 rounded-md",
        "icon-lg": "size-14 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
      data-oid="w8.:90y"
    />
  );
}

export { Button, buttonVariants };
