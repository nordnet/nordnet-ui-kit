declare module 'nordnet-ui-kit' {
  type TypographyCSS = {
    fontWeight: number;
    fontFamily: string;
    fontSize: number;
    lineHeight: number;
    letterSpacing: string;
  };
  type Weight = 'regular' | 'bold' | 'extrabold';
  type WeightNoExtrabold = 'regular' | 'bold';
  // prettier-ignore
  type TypographyScheme = {
    caption: (options: { weight: WeightNoExtrabold, uppercase: boolean }) => TypographyCSS & { textTransform: string};
    hero: () => TypographyCSS;
    title1: (options: { weight: Weight }) => TypographyCSS;
    title2: (options: { weight: Weight }) => TypographyCSS;
    title3: (options: { weight: Weight }) => TypographyCSS;
    primary: (options: { weight: Weight }) => TypographyCSS;
    secondary: (options: { weight: WeightNoExtrabold }) => TypographyCSS;
    tertiary: (options: { weight: WeightNoExtrabold }) => TypographyCSS;
  };

  export type Theme = {
    typography: TypographyScheme;
    palette;
    mixins;
    breakpoints;
  };
}
