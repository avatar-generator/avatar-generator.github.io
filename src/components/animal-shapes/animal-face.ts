export const animalFaceOptions = {
  default: (color: string) => `
    <path fill="${color}" d="M440.7 280.2c0 6.7-.4 13.1-1.2 19.2-1.1 7.9-2.9 15.2-5.3 21.9a86.3 86.3 0 01-20.7 32.6C393 374.3 362 385.2 325 390.6c-23 3.3-48.3 4.5-74.9 4.5a529 529 0 01-75-4.6c-68-9.8-115.7-38.4-115.7-110.3 0-96.3 85.4-174.3 190.7-174.3 95.7 0 175 64.4 188.6 148.3a161 161 0 012.1 26z"/>
  `,
};

export const animalFaceKeys = Object.keys(animalFaceOptions) as Array<
  keyof typeof animalFaceOptions
>;
