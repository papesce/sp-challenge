

#Documentation



## Architecture

This project was bootstrapped with Create React App. On top of that, several npm packages were added. The following image describes the dependencies required to build and run the app. 

![npm dependencies](npmdep.png)

[Here](NPM_DEPENDENCIES.md) I've documented all the commands required to build this app from scratch with a brief description of each package purpose.

#### High level architecture.

The basic idea is to have a clear separation between:

- State (handled by redux and stored in the redux folder) 
- Spotify API interaction (handled in the spotify-api folder)
- Routing (handled in the router folder)
- Presenational Componenents (components that render UI using *material-ui*)
- Composite Components (Components that render UI using other components)
- Container Components. (Components that interact with redux and provide state and actions to the inner components)
 
![Component Architecture](comparch.png)

There is also a TemplatePage component used to have consistency between
al the pages (same top bar)

Also and HOC Component (HomeContainer) provides generic support to handle authentication and token expiration.


