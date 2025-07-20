"use client";

import { ButtonHTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "font-medium text-white rounded cursor-pointer py-2 active:shadow-md active:shadow-gray-500/50 px-4 hover:opacity-90 active:opacity-70 transition-colors",
  variants: {
    color: {
      primary: "bg-[#DB4444] text-white",
      secondary: "bg-white text-black border hover:bg-gray-100",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {}

export const Button = ({ color, children, size, ...props }: ButtonProps) => {
  return (
    <button className={buttonVariants({ color, size })} {...props}>
      {children}
    </button>
  );
};
