import { darken } from "@/lib/colors";

export const animalHairOptions = {
  "cloud-tuft": (_color: string) => `
    <path fill="#fef6f4" d="M332 100.7c-10.2-27.5-29.9-29.9-53.6-21.5C273.2 72.5 266 67 250 66.3c-15.9.6-23.2 6.2-28.4 13-23.8-8.5-43.4-6.1-53.5 21.4-39 19.8-5.9 84.7 33 64.8 10.9 12 24.4 19.1 48.9 5.7 24.5 13.4 38 6.3 48.9-5.7 38.9 19.9 72-45 33-64.8z"/>
  `,
  "simple-swipe": (_color: string) => `
    <path fill="#eabf9f" d="M202.2 99.6c34-8 67.5-7.6 100.4.9 9.3 2.3 14.9 8 13.7 14-7.5 39.7-60.1 79.2-70 71.6-10.8-8.2 2.3-31.4-9.5-33.1-10.4-1.5-25.9 15.9-37.8 11.8-2.7-.9-4.3-2.7-4.2-4.6a161 161 0 00-5.6-46.6c-1.8-6 3.6-11.8 13-14z"/>
  `,
  "bird-track": (color: string) => `
    <path fill="${darken(
      color,
      30
    )}" d="M297.8 78.3a4.8 4.8 0 01-4.2 5.2c-4.2.4-8.3 1-12.2 2-3.9 1-7.6 2.6-11 4.6a37.6 37.6 0 00-12.9 12.3l-1.5 2.7-.5.9a165.9 165.9 0 00-8.8 0l-1.5-3c-.9-.6-1.8-1.3-2.8-1.8-3-1.6-6.3-2.5-9.6-2.8-6.8-.6-13.7.6-20.5 2.4a3.8 3.8 0 11-1.5-7.5c3.7-.5 7.5-.9 11.3-1 3.8 0 7.7.3 11.5 1.1 2.2.5 4.4 1.2 6.5 2.2-2-2.4-4.3-4.6-6.9-6.5-6.9-5-15.4-7.3-24.1-7.6a5.7 5.7 0 11.4-11.5h.6c5.1.7 10.3 2 15.2 4a47.7 47.7 0 0123 20 65.6 65.6 0 00-11.5-38.4 6.7 6.7 0 1111.7-6.7v.1a76.7 76.7 0 017 44 42 42 0 0110.3-10c4-2.8 8.5-4.9 13-6.3 4.6-1.4 9.2-2.4 13.9-2.8 2.6-.2 5 1.8 5.1 4.4z"/>
  `,
  "spiky-crown": (color: string) => `
    <path fill="${color}" d="M309.5 114.6c-18.7-5.6-38.7-8.6-59.4-8.6 -10.6 0-21 0.8-31.1 2.3 -8.1-10.8-13-23.6-14-37 0-0.4-0.1-0.8-0.1-1.2 -0.6-11.3 5.6-23.1 5.6-23.1s1.8 10.8 8.9 24.3c7 13.2 19.6 18.4 20 18.6 -0.1-0.2-3.4-4.4-1.2-21.4 2.6-19.5 18.6-28.4 18.6-28.4s-4 11.7-2 25c2.5 16.2 15.9 27.3 15.9 27.3s0.3-8.3 5.2-21.5c4.9-13.2 15.7-20.7 15.7-20.7s-2.4 9.8-2.4 27.9C289 93.1 304.5 109.6 309.5 114.6z"/>
  `,
};

export const animalHairKeys = Object.keys(animalHairOptions) as Array<
  keyof typeof animalHairOptions
>;

export const animalHairViewPort = "100 50 250 100";
