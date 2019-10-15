import React from 'react';
import logo from './logo.svg';
import './App.css';

import styled from "styled-components";

const AppContainer = styled.div`
  height: 100vh;
  & > * {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
`
const grid = `minmax(150px, 15%) auto`

const Container = styled.div`
  display : grid;
  grid-gap: 5px;
  height: 100vh;
  grid-template-columns: ${grid};
  grid-template-rows: 40px 1fr 1fr 40px;
  grid-template-areas:  "header header"
                        "aside section"
                        "aside section"
                        "footer footer";

  & > * {
    border:1px solid #ccc;
    background: #ededed;
    display : grid;
    justify-content: center;
    align-items: center;
    color : ${props => props.color ? props.color : "red"} 
  }

  header {grid-area: header;grid-column: 1 / 4}
  aside {grid-area: aside;grid-column: 1 / 2;}
  section {grid-area: section;grid-column: 2 / 4}
  footer {grid-area: footer;grid-column: 1 / 4}
`

function App() {
  return (
    <AppContainer>
      <Container color="blue">
        <header>Header</header>
        <aside>Aside</aside>
        <section>lorem100</section>
        <footer>Footer</footer>
      </Container>
    </AppContainer>
  );
}

export default App;
