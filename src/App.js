import React from 'react';
import './App.css';

import styled from "styled-components";

import Content from "./style/content"

const AppContainer = styled.div`
  height: 100vh;
  & > * {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
`
const GRID_SIZE = (column = "150px") => (`minmax(${column}, 15%) auto`)

const Container = styled.div`
  display : grid;
  grid-gap: 5px;
  height: 100vh;
  grid-template-columns: ${GRID_SIZE("250px")};
  grid-template-rows: 50px auto 40px;
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
  
  footer {grid-area: footer;grid-column: 1 / 4}
`

function App() {
  return (
    <AppContainer>
      <Container color="#000">
        <header>Header</header>
        <aside>Aside</aside>
        <Content>Enim dolore in veniam nulla et nisi aliqua Lorem in id dolor duis minim. Velit anim commodo non ea duis et officia consequat nulla. Ad nostrud laborum elit minim sunt sunt sit deserunt id et reprehenderit commodo cupidatat ullamco. Irure minim magna laborum labore ex nisi labore est do. Aliquip sunt amet do aliqua mollit ut minim sit excepteur reprehenderit ea ea ullamco commodo. In consectetur amet in eiusmod aute quis amet aliquip laboris anim.

                Adipisicing qui laborum cillum laborum. Deserunt dolore commodo magna ut non enim. Tempor culpa anim deserunt cillum consectetur ea ut enim eu. Proident mollit aliqua tempor est veniam incididunt consequat. Eu consequat anim consequat irure aute. Irure aliquip non adipisicing amet dolor minim fugiat.

                Incididunt in adipisicing ut dolor Lorem reprehenderit proident veniam reprehenderit sint laborum. Fugiat ea do excepteur veniam occaecat reprehenderit amet mollit ullamco dolore nisi sint. Ipsum officia sit cillum ea incididunt occaecat veniam ad. Adipisicing tempor enim culpa et mollit sit aliquip. Exercitation fugiat sunt elit mollit fugiat culpa dolor proident esse excepteur incididunt occaecat. Lorem qui labore duis fugiat quis esse irure.

                Minim velit consequat ipsum ad culpa aliqua nostrud ipsum. Veniam duis qui pariatur culpa. Ut sint consectetur adipisicing elit cillum amet id aute eiusmod officia. Officia consequat enim do Lorem aliquip exercitation tempor ea.

                Consectetur magna do ad amet consequat aliqua ad. Sit fugiat dolor quis do exercitation tempor. Labore minim enim velit quis. Minim occaecat mollit magna duis et dolore sit veniam. Occaecat minim laborum Lorem id commodo officia eu magna anim consequat deserunt. Excepteur nostrud magna cillum in sint aliquip voluptate mollit occaecat eiusmod ea cupidatat do.

                Aliquip et exercitation incididunt culpa. Aute laboris et magna cupidatat incididunt qui minim quis id anim veniam laboris incididunt ut. Ex consequat et minim velit adipisicing veniam irure elit fugiat. Laboris magna voluptate incididunt irure ex excepteur.

                Excepteur ipsum culpa ipsum ipsum. Occaecat quis adipisicing magna laboris ut. Aute proident aute aute enim labore laboris minim eu eiusmod consequat duis duis pariatur tempor. Labore ad deserunt duis quis excepteur minim cillum. Dolor id commodo laboris magna consequat. Do ullamco deserunt nulla ea aliquip incididunt officia commodo adipisicing elit non labore.

                Ad consectetur eu consequat nulla aute ut ullamco Lorem sunt ullamco non. Aute eiusmod commodo culpa do enim. Enim laboris ad ea laboris minim labore sint elit exercitation ipsum velit nisi enim. In occaecat pariatur anim eu mollit culpa Lorem reprehenderit. Ut officia sint eu labore irure duis amet. Eiusmod adipisicing aute magna ex incididunt velit consectetur ea. Elit amet est labore ad pariatur culpa consectetur in.

                Do in eiusmod labore laboris. Magna duis culpa dolore non fugiat Lorem aliquip laborum occaecat irure ad non laborum. Lorem consectetur deserunt deserunt cupidatat laborum consequat eu est ut anim. Ea velit voluptate dolore consequat. Qui labore nulla consectetur sint voluptate cillum occaecat culpa quis non enim occaecat labore elit. Cupidatat do in mollit sint.

                Mollit labore Lorem consequat magna adipisicing non occaecat sunt id irure nostrud. Commodo irure eiusmod esse amet laboris amet sint mollit sint eu velit laborum laborum reprehenderit. Consequat laboris laborum Lorem nulla non ut quis elit dolore. Cupidatat laborum esse fugiat enim consectetur. Pariatur ex ad eiusmod in voluptate laborum ea aute aliqua irure id cillum. Minim dolor labore quis commodo velit magna nostrud veniam quis culpa. Enim ex consequat ad proident mollit sint dolore ex non consectetur enim enim.
        </Content>
        <footer>Footer</footer>
      </Container>
    </AppContainer>
  );
}

export default App;
