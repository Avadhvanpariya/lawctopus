import React, { forwardRef } from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", href, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variants = {
      primary:
        "bg-primary text-[#1B1B1B] hover:bg-primary-hover shadow-md hover:shadow-lg focus-visible:ring-primary",
      secondary:
        "border border-border-custom bg-transparent text-text-primary hover:bg-bg-muted hover:border-text-primary/20 focus-visible:ring-text-primary",
      outline:
        "border border-primary/40 bg-transparent text-[#1B1B1B] hover:bg-primary/5 hover:border-primary focus-visible:ring-primary",
      ghost:
        "bg-transparent text-text-primary hover:bg-bg-muted focus-visible:ring-text-primary",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
