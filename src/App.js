import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Person from "./pages/Person";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";

const Wrapper = styled.div`
  min-height: 100vh;
  background: #110b0b;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const theme = {
    fontPrimary: "#9fa0a1",
    fontSecondary: "#ffeb00",
    fontTertiary: "#2D2F30",

    backgroundPrimary: "#110B0B",
    backgroundSecondary: "#2D2F30",
    backgroundTertiary: "#ffeb00",
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Router>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/person/:id">
              <Person />
            </Route>

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
