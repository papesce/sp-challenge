import React from 'react'
import Album from './Album'
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';

describe('Album tests', () => {
    let album;
    beforeAll(() => { 
        album = {id:"x", name:"albumname", images: [{}, {url: "text"}],
        artists: [{name: "name"}], external_urls : {spotify: "eurl"}};
    })
    it('should ', () => {  
        shallow(<Album album={album}/>);
    })
    it('renders correctly', () => {
        const tree = renderer.create(<Album album={album}/>)
            .toJSON();
         expect(tree).toMatchSnapshot();
    });
    
})
