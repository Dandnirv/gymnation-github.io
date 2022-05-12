module.exports = {
  content: [
    "./public/**/*.{html, js}",
    "./public/**/*.js",
    "./public/**/*.css",
  ],
  safelist: ["rotate-45", "-rotate-45"],
  theme: {
    extend: {
      colors: {
        primary: "#fefefe",
        secondary: "#a5a5a5",
        price: "#24203b",
        tertiary: "#9350ec",
        quaternary: "#a85ee4;",
        cyan: "#00ffff",
        "shadow-first": "rgba(36, 32, 59, 0.8) 100%",
        "shadow-second": "rgba(27, 25, 36, 0.2) 0%",
        "border-price": "#7b12a8",
        "border-blog": "#421978",
        "border-contact": "#7227e4",
        "border-attachment": "#1b1924",
        "border-benefit": "#c86ff5",
        "blog-button": "#9350ec",
        "gradient-first": "#4568dc",
        "gradient-second": "#b06ab3",
        "gradient-third": "#3494e6",
        "gradient-fourth": "#ec6ead",
        career: "#1c163b",
        white: "#ffffff",
      },
      backgroundImage: {
        "hero-gym": "url('./public/images/gym-leg.jpg')",
        "healthy-food": "url('./public/images/healthy-food.jpg')",
        coach: "url('./public/images/coach.png')",
        sixpack: "url('./public/images/sixpack.jpg')",
        smoothie: "url('./public/images/smoothie.jpg')",
        "women-about": "url('./public/images/women-about.jpg')",
        "background-pricing":
          "radial-gradient(circle, rgba(173,173,173,1) 0%, rgba(46,0,65,1) 100%);",
        "price-gradient":
          "linear-gradient(190deg, rgba(77,20,124,1) 45%, rgba(176,106,179,1) 100%);",
        "gradient-primary": "60deg, #7510c7 40%, rgba(221, 0, 255, 0.7) 80%",
        "gradient-secondary":
          "linear-gradient(75deg, #9350ec 0%, #c86ff5 71%);",
        "shadow-background":
          "linear-gradient(to bottom, rgba(36, 32, 59, 0.8) 100%, rgba(27, 25, 36, 0.2) 0%)",
        "shadow-background":
          "bg-gradient-to-b from-shadow-first to-shadow-second",
      },
      spacing: {
        "5px": "5px",
        "6px": "6px",
        "10px": "10px",
        "20px": "20px",
        "30px": "30px",
      },
      screens: {
        sm: "576px",
      },
      transitionDuration: {
        "250ms": "250ms",
      },
      boxShadow: {
        chevron: "0px 0px 10px #fff",
        "box-shadow": "0px 0px 10px #7b12a8",
        "box-shadow-2": "0px 0px 15px #7b12a8",
      },
      diplay: ["group-hover"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
