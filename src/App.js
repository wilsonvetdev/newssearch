import React from 'react'
import { Container } from 'semantic-ui-react'
import './App.css'
import HeaderComponent from './Header'
import newsArticles from './database'
import ArticleContainer from './ArticleContainer'


class App extends React.Component {

  state = {
    articles: newsArticles,
  }

  updateArticleFromState = (updatedArticleObj) => {
    let copyOfArticles = this.state.articles.map((article) => {
      if(article.id === updatedArticleObj.id) {
        return updatedArticleObj
      } else {
        return article
      }
    })
    this.setState((prevState) => {
      return {articles: copyOfArticles}
    })
  }

  changeLikesFromState = (articleId, delta) => {
    console.log('hello', articleId)
    let foundArticle = this.state.articles.find(article => article.id === articleId)
    let copyOfArticle = {...foundArticle}
    copyOfArticle.likes += delta
    this.updateArticleFromState(copyOfArticle)
  }
  
  render() {
    return (
      <Container text>
        <HeaderComponent />
          <ArticleContainer 
          articles={this.state.articles} 
          changeLikesFromState={this.changeLikesFromState}
          />
      </Container>
    );
  }
}
  
export default App;
