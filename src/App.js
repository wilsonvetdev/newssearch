import React from 'react'
import { Container } from 'semantic-ui-react'
import './App.css'
import HeaderComponent from './Header'
import newsArticles from './database'
import ArticleContainer from './ArticleContainer'


class App extends React.Component {

  state = {
    articles: newsArticles
  }
  
  render() {
    return (
      <Container text>
        <HeaderComponent />
          <ArticleContainer articles={this.state.articles} />
      </Container>
    );
  }
}
  
export default App;
