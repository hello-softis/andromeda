import { colors as rawColors } from './colors';

const transformColors = (colors: any) =>
  Object.fromEntries(
    Object.entries(colors).map(([key, value]) => {
      const match = key.match(/([a-zA-Z]+)(\d+)/);
      return match ? [`${match[1]}-${match[2]}`, value] : [key.replace(/[A-Z]/g, m => '-' + m.toLowerCase()), value];
    })
  );

export const twColors = transformColors(rawColors);
