import React from 'react'
import { Button, Item } from 'semantic-ui-react'

// State can only exist inside of a class component
// Anything dynamically rendered in your frontend application should come from state somewhere
// setState -> triggers a rerender -> modifies the DOM

class Article extends React.Component {

    //event listeners should be defined in the same component as its being passed in
    //-your event listeners inside class components should be arrow functions
    //-so they automatically bind to instances of the class.
    
    handleClick = (articleId, delta) => {
        this.props.changeLikesFromState(this.props.article.id, +1)
    }
    
    render() {
        return (
            <Item>
                <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png'  />

                <Item.Content>
                    <Item.Header> News Headline: {this.props.article.title} </Item.Header>
                    <Item.Description> News snippet here </Item.Description>
                </Item.Content>
                <Button secondary onClick={this.handleClick}>click for likes: {this.props.article.likes}</Button>
            </Item>
        )
    }

}

export default Article

