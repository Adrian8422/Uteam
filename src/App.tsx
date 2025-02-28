import React from "react";
import { createGlobalStyle } from "styled-components";
import CharacterList from "./components/characterList";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  
  body {
    background-color: #f5f5f5;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <CharacterList />
      </div>
    </>
  );
};

export default App;
