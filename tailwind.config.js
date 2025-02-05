/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			inter: [
  				'var(--font-inter)'
  			]
  		},
  		colors: {
  			background: 'rgb(var(--background))',
  			foreground: 'rgb(var(--foreground))',
  			muted: 'rgb(var(--muted))',
  			accent: 'rgb(var(--accent))'
  		},
  		boxShadow: {
  			'glass-inset': 'inset 0 17px 5px -9px rgba(254, 254, 91, 0.05)',
  			'glass-sm': '5px 5px 20px 0px rgba(254, 254, 91, 0.3)'
  		},
  		backgroundImage: {
  			'fireFly-radial': 'radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217, 217, 217, 0) 100%)'
  		},
  		keyframes: {
  			'spin-reverse': {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(-360deg)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'spin-slow': 'spin 40s linear infinite',
  			'spin-slow-reverse': 'spin-reverse 40s linear infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		screens: {
  			xs: '480px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
