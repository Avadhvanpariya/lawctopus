import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "accent" | "muted";
}

const Badge: React.FC<BadgeProps> = ({
  className = "",
  variant = "primary",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-md tracking-wide transition-colors uppercase border";

  const variants = {
    primary: "bg-primary/10 border-primary/30 text-primary-hover",
    secondary: "bg-accent/15 border-accent/40 text-text-primary",
    accent: "bg-[#1B1B1B] border-transparent text-[#FFFFFF]",
    muted: "bg-bg-muted border-border-custom text-text-secondary",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Badge;
