import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

// Functional Component: returns ONE chunk of JSX, no render method used.
// https://www.freecodecamp.org/news/functional-components-vs-class-components-in-react/
function HeaderComponent() {
    return ( 
        <Header as = 'h1'>
            <Icon name='newspaper' />
            <Header.Content>
            News Search
                <Header.Subheader> Get your news here! </Header.Subheader>
            </Header.Content>
        </Header>
    )
}

export default HeaderComponent