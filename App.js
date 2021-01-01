import React from 'react';
import { ThemeProvider } from 'styled-components';
import PageExample from "./src/PageExample"

import themes from './src/themes'

export default function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <PageExample />
    </ThemeProvider>
  );
}
