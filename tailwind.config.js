module.exports = {
  theme: {
    backgroundPosition: {
      leftbottom: "left -3rem bottom -1rem"
    },
    screens: {
      xs: { max: "520px" },
      xl: { max: "1279px" },

      lg: { max: "1023px" },

      md: { max: "767px" },
      sm: { max: "620px" }
    },
    extend: {
      lineHeight: {
        "12": "3.5rem"
      },
      colors: {
        indigo: "#443EFF",
        darkBlue: "#1D1A6E",
        lightBlue: "#E0EAF3",
        white: "#FFFFFF",
        lightGray: "#E5E5E5",
        borderColor: "#06051F",
        darkGray: "#888897",
        lightGreen: "#DFF5F4",
        bgBlack: "#06051F",
        text1: "#565660",
        blue: "#1CA0F2",
        light: "#C8C8CE",
        border2: "#DBDBDF",
        border3: "#817DFF",
        lightpink: "#FFE2E8",
        purple: "#C8C7F7",
        yellow: "#FFE0D3"
      }
    },
    inset: {
      "-16": "-2rem",
      "16":"2rem",
      "-18": "-6rem",
      "-1": "-9px",
      "-2": "-10px",
      "-3": "-12px",
      "7": "7rem",
      "12": "85px"
    },
    boxShadow: {
      lg:
        "0px 8px 20px rgba(130, 136, 148, 0.16), 0px 0px 2px rgba(130, 136, 148, 0.48)"
    },
    maxWidth: {
      "1": "16rem"
    }
  },
  variants: {
    backgroundPosition: ["responsive"],
    backgroundPosition: ["responsive", "hover", "focus"]
  },
  plugins: []
};
