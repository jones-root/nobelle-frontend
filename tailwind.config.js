module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      "pure-white": "var(--pure-white)",
      "pure-black": "var(--pure-black)",
      white: "var(--white)",
      black: "var(--black)",
      gray: "var(--gray)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      tertiary: "var(--tertiary)",
      "background-primary": "var(--background-primary)",
      "background-secondary": "var(--background-secondary)",
      title: "var(--title)",
      subtitle: "var(--subtitle)",
      body: "var(--body)",
      label: "var(--label)",
      "input-background": "var(--input-background)",
      "input-border": "var(--input-border)",
      "input-border-focus": "var(--input-border-focus)",
      "input-scrollbar": "var(--input-scrollbar)",
      "input-misc-background": "var(--input-misc-background)",
      placeholder: "var(--placeholder)",
      error: "var(--error)",
      success: "var(--success)",
      info: "var(--info)",
      link: "var(--link)",
      "scrollbar-track": "var(--scrollbar-track)",
      "scrollbar-thumb": "var(--scrollbar-thumb)",
    },
    fontFamily: {
      primary: "Marcellus SC, Roboto, Helvetica, Arial, sans-serif",
      secondary: "Mulish, Montserrat, Helvetica, Arial, sans-serif",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.4rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    borderRadius: {
      none: "0",
      tiny: "2px",
      xs: "4px",
      sm: "6px",
      md: "12px",
      DEFAULT: "24px",
      lg: "32px",
      full: "9999px",
    },
    extend: {
      spacing: {
        "navbar-vertical": "18rem",
        navbar: "var(--navbar-height)",
      },
      maxWidth: {
        button: "16rem",
      },
      minWidth: {
        button: "16rem",
      },
      height: {
        "minor-button": "3rem",
        button: "3.5rem",
        navbar: "var(--navbar-height)",
      },
      minHeight: {
        "minor-button": "3rem",
        button: "3.5rem",
      },
      letterSpacing: {
        wide: ".0125em",
      },
      backgroundImage: {
        "icon-check": "url('/src/assets/icons/check.svg')",
        "background-header": "url('/src/assets/background_header.jpg')",
      },
      borderWidth: {
        "input-width": "1px",
        2.5: "2.5px",
        3: "3px",
      },
      screens: {
        xs: "384px",
      },
    },
  },
  plugins: [],
};
