export default {
  grid: {
    container: '165.6rem',
  },
  border: {
    radius: {
      regular: '1rem',
    },
  },
  font: {
    family: {
      primary:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    regular: 400,
    medium: 500,
    sizes: {
      xxsmall: '1rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      xmedium: '1.8rem',
      xxmedium: '2.0rem',
      big: '2.2rem',
      xbig: '2.5rem',
      xxbig: '2.8rem',
      xxxbig: '3.0rem',
      large: '3.2rem',
      xlarge: '4.5rem',
      xxlarge: '5.0rem',
      extra: '6.0rem',
    },
  },
  colors: {
    primary: '#7C3AED',
    secondary: '#717B8A',
    mainBg: '#04040C',
    white: '#FFFFFF',
    whiteText: '#F4F4F5',
    gameDetails: '#010914',
    gameGreat: '#0FBF00',
    gameAverage: '#FFF720',
    gameBad: '#FF3333',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    big: '5.8rem',
    huge: '8.0rem',
    section: '10rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  shadows: {
    text: '0 0.8rem 1rem rgba(118, 74, 241, 0.5)',
    box: '0 0.8rem 2.8rem rgba(118, 74, 241, 0.5)',
  },
} as const;
