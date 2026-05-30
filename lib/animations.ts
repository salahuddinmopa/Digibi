import { Variants } from "framer-motion";

export const imageRevealLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const imageRevealRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const imageRevealUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const imageScaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* Blur placeholders per image (10×6 tiny base64 colour matches) */
export const blurData = {
  heroOffice:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAR0lEQVQImWNYv3rNfwYGBgYGdGBhYWFgYGRgYGBg+P//P8P/AwcYGBgYGP7//8/AwMDA8P//f4b/Bw4w/P9/gOH/gQMMAABWEgkQGV3YJQAAAABJRU5ErkJggg==",
  webDesign:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVQImWNYv3rNfwYGBgYGdGBhYWFgYGRgYGBg+P//P8P/AwcYGBgY/v//z8DAwMDw//9/hv8HDjAAAABpEgkQIGCRzgAAAABJRU5ErkJggg==",
  analytics:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVQImWNYt3btfwYGBgYGdGBpaWlgYGRgYGBg+P//P8P/AwcYGBgY/v//z8DAwMDw//9/hv8HDjAAAABpEgkQNUy39QAAAABJRU5ErkJggg==",
  cybersecurity:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARElEQVQImWNYs3rNfwYGBgYGdGBiYmJgYGRgYGBg+P//P8P/AwcYGBgY/v//z8DAwMDw//9/hv8HDjAAAABmEgkQ2GH+RQAAAABJRU5ErkJggg==",
  climateReef:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARElEQVQImWNYt2bNfwYGBgYGdGBmZmZgYGRgYGBg+P//P8P/AwcYGBgY/v//z8DAwMDw//9/hv8HDjAAAABmEgkQ4dQ1GQAAAABJRU5ErkJggg==",
  brandIdentity:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQImWNYt2rNfwYGBgYGdGBhYWFgYGRgYGBg+P//P8P/AwcYGBgY/v//z8DAwMDw//9/hv8HDzAAAABoEgkQrZBPpAAAAAABJRU5ErkJggg==",
  socialMedia:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQImWNYt27NfwYGBgYGdGBpaWlgYGRgYGBg+P//P8P/AwcYGBgY/v//z8DAwMDw//9/hv8HDzAAAABoEgkQl6W/xAAAAAABJRU5ErkJggg==",
  ecommerce:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQImWNYuGrNfwYGBgYGdGBiYmJgYGRgYGBg+P//P8P/AwcYGBgY/v//z8DAwMDw//9/hv8HDzAAAABoEgkQ2J3/DQAAAABJRU5ErkJggg==",
  analyticsReporting:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQImWNYuGbNfwYGBgYGdGBjY2NgYGRgYGBg+P//P8P/AwcYGBgY/v//z8DAwMDw//9/hv8HDzAAAABoEgkQMU6JfgAAAAABJRU5ErkJggg==",
};
