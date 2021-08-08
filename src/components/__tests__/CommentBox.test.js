import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

    let wrapped;
beforeEach(() => {
    wrapped = mount(<CommentBox />)

})

afterEach(() => {
    wrapped.unmount()
})

it('has a text area and a button', () => {   
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)
})

it('has a text area that users can type in', () => {
    wrapped.find('textarea').simulate('change', {
        target: { value: 'new comment' }
    })
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
})

// create submit event on form
it('submits form and clears text area', () => {
    wrapped.find('textarea').simulate('change', {
        target: { value: 'new comment' }
    })
    wrapped.update();
    wrapped.find('button').simulate('click')
    wrapped.update()
    expect(wrapped.find('textarea')).toEqual({})
})

