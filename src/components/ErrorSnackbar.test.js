import React from 'react'
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';
import ErrorSnackbar from './ErrorSnackbar';

describe('SearchBar tests', () => {
    it('should render', () => {  
        shallow(<ErrorSnackbar message="message"/>);
    })
   // it('renders correctly', () => {
    //    const tree = renderer.create(<ErrorSnackbar message="message"/>)
    //        .toJSON();
    //     expect(tree).toMatchSnapshot();
    //});
    
})