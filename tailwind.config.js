/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D0D0D0',
          300: '#A0A0A0',
          400: '#808080',
          500: '#404040',
          600: '#202020',
          700: '#0A0A0A',
          800: '#080808',
          900: '#000000',
        },
        accent: {
          50: '#E0F7FF',
          100: '#B3ECFF',
          200: '#80DFFF',
          300: '#4DD2FF',
          400: '#26C7FF',
          500: '#00BFFF',
          600: '#00A8E8',
          700: '#0091D1',
          800: '#007AB8',
          900: '#0065A0',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['120px', { lineHeight: '1.1', fontWeight: '700' }],
        'display-lg': ['80px', { lineHeight: '1.1', fontWeight: '700' }],
        'display-md': ['56px', { lineHeight: '1.2', fontWeight: '700' }],
        'display-sm': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-xl': ['48px', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-lg': ['36px', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-md': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-sm': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'label': ['12px', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.02em' }],
      },
      spacing: {
        'section-y': '120px',
        'section-x': '48px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
