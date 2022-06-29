import { Platform } from 'react-native';

export const theme = {
  colors: {
    textPrimary: '#F5F5F5',
    textSeconday: '#B0B0B0',
    primary: '#5220E1',
    white: '#fefefe',
    link: '#199AFC',
  },
  navbar: {
    primary: '#24292e',
    textSecondary: '#aaa',
    textPrimary: '#fff',
  },
  fontSizes: {
    mainTitle: 28,
    mainSubTitle: 22,
    header: 22,
    titleCard: 22,
    subTitleCard: 18,
    body: 22,
    sm: 18,
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};
