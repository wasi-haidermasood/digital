import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: 
          "bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-lg hover:shadow-xl hover:from-gray-800 hover:to-gray-600 hover:scale-105 hover:shadow-gray-500/25 active:scale-95",
        destructive: 
          "bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg hover:shadow-xl hover:from-red-600 hover:to-pink-700 hover:scale-105 hover:shadow-red-500/25 active:scale-95",
        outline: 
          "border-2 border-gradient-to-r from-gray-400 to-gray-300 bg-transparent text-foreground hover:bg-gradient-to-r hover:from-gray-500/10 hover:to-gray-400/10 hover:border-gray-500 hover:scale-105 hover:shadow-lg active:scale-95",
        secondary: 
          "bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg hover:shadow-xl hover:from-gray-700 hover:to-gray-800 hover:scale-105 hover:shadow-gray-500/25 active:scale-95",
        ghost: 
          "text-foreground hover:bg-gradient-to-r hover:from-gray-500/10 hover:to-gray-400/10 hover:text-gray-700 hover:scale-105 active:scale-95",
        link: 
          "text-gray-700 underline-offset-4 hover:underline hover:text-gray-900 hover:scale-105 transition-transform",
        premium:
          "bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 text-white shadow-lg hover:shadow-xl hover:from-gray-900 hover:via-gray-700 hover:to-gray-500 hover:scale-105 hover:shadow-gray-500/30 active:scale-95 shadow-gray-500/20",
        gradient:
          "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 text-white shadow-lg hover:shadow-xl hover:from-gray-800 hover:via-gray-600 hover:to-gray-400 hover:scale-105 hover:shadow-gray-500/25 active:scale-95 bg-size-200 bg-pos-0 hover:bg-pos-100",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-lg px-8 text-base font-bold",
        xl: "h-16 rounded-xl px-10 text-lg font-bold",
        icon: "h-12 w-12 rounded-lg",
      },
      animation: {
        none: "",
        pulse: "animate-pulse hover:animate-none",
        bounce: "hover:animate-bounce",
        shine: "before:absolute before:inset-0 before:-translate-x-full before:animate-shine before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        ripple: "overflow-hidden relative after:absolute after:inset-0 after:bg-white after:opacity-0 after:transition-opacity hover:after:opacity-10 active:after:opacity-20",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, animation, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    return (
      <Comp 
        className={cn(buttonVariants({ variant, size, animation, className }))} 
        ref={ref} 
        disabled={disabled || loading}
        {...props}
      >
        {/* Loading spinner */}
        {loading && (
          <svg 
            className="animate-spin -ml-1 mr-2 h-4 w-4" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        
        {/* Button content */}
        {children}
        
        {/* Ripple effect container */}
        {(animation === "ripple" || variant === "gradient") && (
          <span className="absolute inset-0 overflow-hidden rounded-xl">
            <span className="absolute top-0 left-0 w-full h-full transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </span>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };