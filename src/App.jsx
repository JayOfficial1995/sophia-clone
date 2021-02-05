import { ThemeProvider } from "styled-components";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import themes from "./style/themes";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <Router>
      <ThemeProvider theme={themes}>
        <GlobalStyle />
        <Navbar />
      </ThemeProvider>
    </Router>
  );
}

export default App;
