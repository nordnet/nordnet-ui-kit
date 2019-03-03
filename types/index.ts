declare module 'nordnet-ui-kit' {
  type TypographyCSS = {
    fontWeight: number;
    fontFamily: string;
    fontSize: number;
    lineHeight: number;
    letterSpacing: string;
  };
  type Weight = 'regular' | 'bold' | 'extrabold';
  // prettier-ignore
  type TypographyScheme = {
    caption: (options: { weight: Weight, uppercase: boolean }) => TypographyCSS & { textTransform: string};
    hero: (options: { weight: Weight }) => TypographyCSS;
    title1: (options: { weight: Weight }) => TypographyCSS;
    title2: (options: { weight: Weight }) => TypographyCSS;
    title3: (options: { weight: Weight }) => TypographyCSS;
    primary: (options: { weight: Weight }) => TypographyCSS;
    secondary: (options: { weight: Weight }) => TypographyCSS;
    tertiary: (options: { weight: Weight }) => TypographyCSS;
  };

  export type Theme = {
    typography: TypographyScheme;
    palette;
    mixins;
    breakpoints;
  };
}
