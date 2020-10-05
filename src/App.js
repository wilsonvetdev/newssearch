import React from 'react';
import Header from './Header'
import Article from './Article'
import { Container } from 'semantic-ui-react'
import './App.css'


function App() {
  return (
    <Container text>
    <div className="App">
          <Header />
          <Article headline="Article One" />
          <Article headline="Article Two" />
          <Article headline="Article Three" />
    </div>
    </Container>
  );
}

export default App;
