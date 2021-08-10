import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';

it('can fetch a list of comments and display them', () => {
    // attempt to render the entire app 
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )
    // find fetch comments button and click import PropTypes from 'prop-types'
    
    // expect to find a list of comments! 
})