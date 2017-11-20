import React from 'react'
import { SearchBarS } from './SearchBar'
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';

describe('SearchBar tests', () => {
    it('should render', () => {  
        shallow(<SearchBarS/>);
    })
    it('renders correctly', () => {
        const tree = renderer.create(<SearchBarS/>)
            .toJSON();
         expect(tree).toMatchSnapshot();
    });
    
})