
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        brand: {
          purple: "#6C40FF",   // Royal Violet (Primary)
          cyan: "#00F6FF",     // Neon Cyan (Accent)
          "purple-light": "#9B71FF",
          "purple-dark": "#5425EB",
          blue: "#00F6FF",     // Alias for cyan for backward compatibility
          dark: "#1A1D26",     // Gunmetal Gray (Secondary BG)
          black: "#0B0E14",    // Rich Black (Main Background)
          success: "#4DE47A",  // Level Up Green
          warning: "#FFA14A",  // Amber Gold
          error: "#FF4D6D",    // Blood Red
          "text-light": "#F2F2F2", // Soft White (Text Light)
          "text-muted": "#A2A9B0" // Steel Gray (Text Muted)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 8px rgba(108, 64, 255, 0.5)" 
          },
          "50%": { 
            boxShadow: "0 0 20px rgba(108, 64, 255, 0.8)" 
          }
        },
        "float": {
          "0%, 100%": { 
            transform: "translateY(0)" 
          },
          "50%": { 
            transform: "translateY(-10px)" 
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite"
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom, rgba(26, 29, 38, 0.8), rgba(11, 14, 20, 0.95)), url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=3880')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-glow': 'linear-gradient(135deg, rgba(108, 64, 255, 0.5), rgba(0, 246, 255, 0.3))',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
