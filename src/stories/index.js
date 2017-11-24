import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Progress from "../components/Progress";
import TemplatePage from "../components/TemplatePage";
import TopAppBar from "../components/TopAppBar";
import { SearchBarS } from "../components/SearchBar";
import LoginPage from "../components/LoginPage";
import Album from "../components/Album";
import Albums from "../components/Albums";
import Recommendations from "../components/Recommendations";
import ErrorSnackbar from "../components/ErrorSnackbar.jsx";

const album_name = "[album_name]";
const album = { name: album_name, artists: [{ name: "[author_name]" }] };

storiesOf("sp-challenge Components", module)
  .add("Progress", () => <Progress />)
  .add("TopAppBar", () => <TopAppBar />)
  .add("TemplatePage", () => (
    <TemplatePage>
      {" "}
      <p>template component will be render here</p>{" "}
    </TemplatePage>
  ))
  .add("LoginPage  ", () => <LoginPage />)
  .add("SearchBar", () => <SearchBarS />)
  .add("Album", () => <Album album={album} />)
  .add("Albums empty", () => <Albums title={album_name} />)
  .add("Albums ", () => <Albums title={album_name} albums={[album, album]} />)
  .add("Recommendations empty ", () => <Recommendations album={album} />)
  .add("Recommendations  ", () => (
    <Recommendations album={album} tracks={[album, album]} />
  ))
  .add("ErrorSnackbar  ", () => <ErrorSnackbar message={"<message>"} />);
