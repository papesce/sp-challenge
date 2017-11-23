

# Documentation



## Architecture

This project was bootstrapped with Create React App. On top of that, several npm packages were added. The following image describes the dependencies required to build and run the app. 

![npm dependencies](npmdep.png)

[Here](NPM_DEPENDENCIES.md) I've documented all the commands required to build this app from scratch with a brief description of each package purpose.

#### High level architecture.

The basic idea is to have a clear separation between:

- State (handled by redux and stored in the redux folder) 
- Spotify API interaction (handled in the spotify-api folder)
- Routing (handled in the router folder)
- Presenational Components (components that render UI using *material-ui*)
- Composite Components (Components that render UI using other components)
- Container Components. (Components that interact with redux and provide state and actions to the inner components)
 
![Component Architecture](comparch.png)

There is also a TemplatePage component used to have consistency between
al the pages (same top bar)

Also and HOC Component (HomeContainer) provides generic support to handle authentication and token expiration for all the routes.


### Implementation Details

Following the [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)  philosophy I've started with a mock with the vision of the final app. The following is a mock created with [wireframe.cc](https://wireframe.cc/pro/pp/c5cfe313a125568)

![Mock](mockup.png)

This is really helpfull to start thinking about the Components required, the Redux state shape, and the potential UI library that can be used to speedup development.

Finally 2 User Stories were created:

1. As a user I want to login to the app so I can interact with the Spotify API
2. As a user I want to search for albums so I can see all the albums related with an specific term

Later I've added a third User story:

3. As a user I want to see similar recommendations for one of the results so I can discover similar artists


### Routing

For the routing process a new library was used (react-router-redux). It provides integration between the three populars packages and provides a way to keep the routing history in the store.

3 routes were developed:


### Authentication to Spotify

To be able to interact with the Spotify API it is required to obtain a token. For that reason it is neccesary the UI that opens a login window to obtain the authentication token.

THe flow here is very simple. 




