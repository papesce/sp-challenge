import React from 'react'
import TopAppBar from './TopAppBar'
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';

describe('SearchBar tests', () => {
    it('should render', () => {  
        shallow(<TopAppBar/>);
    })
    it('renders correctly', () => {
        const tree = renderer.create(<TopAppBar/>)
            .toJSON();
         expect(tree).toMatchSnapshot();
    });
    
})