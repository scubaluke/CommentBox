import React from 'react';
import moxios from 'moxios';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
    moxios.install()
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        data: [{ name: 'fetched #1' }, { name: 'fetched #2'}]
    })
})

afterEach(() => {
    moxios.uninstall()
})

it('can fetch a list of comments and display them', (done) => {
    // render the entire app 
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )
    // find fetch comments button and click import PropTypes from 'prop-types'
        wrapped.find('.fetch-comments').simulate('click')
        wrapped.update()
    // expect to find a list of comments! (after tinny delay)
    setTimeout(() => {
        expect(wrapped.find('li').length).toEqual(2)
        
    }, 50);
    done()
    wrapped.unmount()

})