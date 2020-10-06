import React from 'react'
import { Button, Item } from 'semantic-ui-react'

// State can only exist inside of a class component
// Anything dynamically rendered in your frontend application should come from state somewhere
// setState -> triggers a rerender -> modifies the DOM

class Article extends React.Component {

    //event listeners should be defined in the same component as its being passed in
    //-your event listeners inside class componenets should be arrow functions

    handleClick = () => {
        // let partialStateObj = {likes: this.state.likes +1}
        // this.setState(partialStateObj) -- this is merging and creating a new object with updated state
        
        // setState triggers re-rendering, it looks to state and see the object now has changed when clicked.

        // this.setState({oldStateObj}, () => { return what to do after the state has changed })
        this.setState((prevState) => ({ likes: prevState.likes + 1 }))
        // async nature allows for all actions to be performed and then re-render
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

