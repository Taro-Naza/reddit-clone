const gutter = 1;

export const themeDefaults = {
    gutter0: '0rem',
    gutter1: `${gutter * 0.25}rem`,
    gutter2: `${gutter * 0.5}rem`,
    gutter3: `${gutter}rem`,
    gutter4: `${gutter * 1.5}rem`,
    gutter5: `${gutter * 3}rem`,
    fontSizeSm: '0.9rem',
    fontSizeMd: '1rem',
    fontSizeLg: '1.2rem',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    borderRadiusSm: '0.2rem',
    borderRadiusLg: '0.5rem'
};

export const darkTheme = {
    ...themeDefaults,
    dark: true,
    text: '#FFF',
    backgroundColor: '#15191C'
};

export const lightTheme = {
    ...themeDefaults,
    dark: false,
    text: '#000',
    backgroundColor: '#FFF'
};
