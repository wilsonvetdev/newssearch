import React from 'react'
import Article from './Article'
import { Item } from 'semantic-ui-react'

// Inside a functional component, 'this' is undefined.

function ArticleContainer(props) {

    let arrayOfComponents = props.articles.map((singularArticleObj) => {
        return <Article key={singularArticleObj.title} article={singularArticleObj} />
    })

    return (
        <Item.Group>
        { arrayOfComponents }
        </Item.Group>
    )
}

export default ArticleContainer