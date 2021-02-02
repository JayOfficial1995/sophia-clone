import GlobalStyle from "./style/GlobalStyle";
import { ThemeProvider } from "styled-components";

import themes from "./style/themes";

function App() {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <h1>Jhaangir khan</h1>
    </ThemeProvider>
  );
}

export default App;
