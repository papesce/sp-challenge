import * as React from "react";
import SearchBar from "./SearchBar";
import AlbumsContainer from "../containers/AlbumsContainer";
import TemplatePage from "./TemplatePage";

export class HomePage extends React.Component {
  render() {
    return (
      <TemplatePage>
        <SearchBar />
        <AlbumsContainer />
      </TemplatePage>
    );
  }
}

export default HomePage;
