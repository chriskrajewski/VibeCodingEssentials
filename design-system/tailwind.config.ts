import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './examples/**/*.{ts,tsx}',
    './docs/**/*.{md,mdx}',
    './lib/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
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
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        snap: {
          gray: {
            100: '#e6e5e5',
          },
          red: {
            600: 'hsl(8 100% 47% / 1)',
            '600/10': 'hsl(8 100% 47% / 0.1)',
            '600/20': 'hsl(8 100% 47% / 0.2)',
            700: '#A20C33',
            800: '#720925',
          },
          teal: {
            50: '#E6F8F9',
            100: '#ABD5CD',
            200: '#8AC3BC',
            300: '#69B1AB',
            400: '#499F9C',
            500: '#2A8A8C',
            600: '#0b7178',
            '600/10': 'hsl(184 83.2% 25.7% / 0.1)',
            '600/20': 'hsl(184 83.2% 25.7% / 0.2)',
            700: '#08606B',
            800: '#05505D',
            900: '#03404F',
          },
          yellow: {
            600: 'hsl(50 100% 50%)',
            '600/10': 'hsl(50 100% 50% / 0.1)',
            '600/20': 'hsl(50 100% 50% / 0.2)',
            700: '#ccaa00',
          },
        },
        mw: {
          yellow: '#FFD600',
          darkYellow: '#ebc603',
          black: '#001223',
          grey: '#465B65',
          darkGrey: '#273b46',
          lightGrey: '#BBBABA',
          panelGrey: 'rgb(238,240,242)',
          blue: '#00A8B5',
          darkBlue: '#007B7B',
          orange: '#F78B21',
          darkOrange: '#F36B21',
          red: '#EE3341',
          darkRed: '#A20C33',
          green: '#BFD730',
          darkGreen: '#6E9934',
          white: '#FFFFFF',
        },
        validation: {
          error: '#f22000',
          warning: '#d08700',
          info: '#00A8B5',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        heading: ['Source Sans Pro', 'system-ui', 'sans-serif'],
        body: ['Source Sans Pro', 'system-ui', 'sans-serif'],
        mono: ['Menlo', 'monospace'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
