/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/require-default-props */
import { useState, createContext, useContext } from 'react';

type Props = {
  // eslint-disable-next-line no-undef
  children?: React.ReactNode;
}

const ThemeContext = createContext({} as any);

export function ContextThemeProvider({ children }: Props) {
  const [isLightTheme, setIsLightTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ isLightTheme, setIsLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  const { isLightTheme, setIsLightTheme } = context;

  return {
    isLightTheme,
    setIsLightTheme
  };
}
