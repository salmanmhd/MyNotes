/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#f3f4f6', // text-gray-100
            a: {
              color: '#22c55e', // text-green-500
              '&:hover': {
                color: '#4ade80', // text-green-400
              },
              textDecoration: 'none',
            },
            h1: {
              color: '#f9fafb', // text-gray-50
              fontWeight: '700',
            },
            h2: {
              color: '#f9fafb', // text-gray-50
              fontWeight: '600',
            },
            h3: {
              color: '#f9fafb', // text-gray-50
              fontWeight: '600',
            },
            h4: {
              color: '#f9fafb', // text-gray-50
              fontWeight: '600',
            },
            strong: {
              color: '#f9fafb', // text-gray-50
            },
            code: {
              color: '#22c55e', // text-green-500
              backgroundColor: 'rgba(31, 41, 55, 0.5)', // bg-gray-800/50
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'rgba(31, 41, 55, 0.5)', // bg-gray-800/50
              color: '#f3f4f6', // text-gray-100
              borderRadius: '0.5rem',
              border: '1px solid rgba(75, 85, 99, 0.5)', // border-gray-600/50
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              fontSize: 'inherit',
              padding: '0',
              fontWeight: '400',
            },
            ul: {
              listStyleType: 'disc',
            },
            ol: {
              listStyleType: 'decimal',
            },
            'ul, ol': {
              paddingLeft: '1.25rem',
            },
            'ul > li::marker': {
              color: '#6ee7b7', // text-green-300
            },
            'ol > li::marker': {
              color: '#6ee7b7', // text-green-300
            },
            hr: {
              borderColor: 'rgba(75, 85, 99, 0.5)', // border-gray-600/50
            },
            blockquote: {
              borderLeftColor: '#22c55e', // border-green-500
              color: '#d1d5db', // text-gray-300
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}