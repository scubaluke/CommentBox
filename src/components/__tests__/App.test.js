import React from 'react';
import App from '../App';
import { shallow } from 'enzyme'
import CommentBox from '../CommentBox'
import CommentList from '../CommentList'

it('renders a Comment Box component' , () => {
  const wrapped = shallow(<App />);

    expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('renders a Comment List component', () => {
    const wrapped = shallow(<App />);

    expect(wrapped.find(CommentList).length).toEqual(1)
}) 