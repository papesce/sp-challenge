# spotify-challenge
Coding challenge

## Objective:
 Create a simple app that uses React and the Spotify API.

## Live Demo

You can test the final demo running here:

https://papesce-spotify-challenge.herokuapp.com/

##Screenshots

### Authentication Flow
To interact with the spotify API is required an authentication token.  To obtain this token is necessary to follow several steps.  The process is described in detail [here](https://developer.spotify.com/web-api/authorization-guide/)

To obtain the token I've used the React-Router capability

![login.png](docs/auth_flow.png)

### Search API

The home page allow the user to search for albums. For each album there is an option to to search for recommendations based on the artist of the selected album. In this part the search API from spotify was used. Material-ui was used to speed up the implementation of each component. 

![Search Home Page](docs/homepage.png)


### Recommendations API

For each album the user can use the little button in the bottom right corner to search for recommendations based on the artist of the album.
This component was implemented reusing several components of the previous developed search components.

![Recommnedations Page](docs/recommendations.png)

## Documentation 

Detailed documentation will be available in the following links

- [Documentation](docs/DOCUMENTATION.md)
- [Implementation Details](docs/IMPLEMENTATION.md)

## Instalation

To install and run locally the app you should execute the following commands

```sh
git clone https://github.com/papesce/sp-challenge.git

cd sp-challenge/
git checkout dev
npm install

npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner.<br>


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

This is the option used for automatic deployment on heroku (see "heroku-postbuild" option in package.json)



## Running Tests

### Filename Conventions

Create React App uses [Jest](https://facebook.github.io/jest/) as its test runner.

Jest will look for test files with any of the following popular naming conventions:

* Files with `.js` suffix in `__tests__` folders.
* Files with `.test.js` suffix.
* Files with `.spec.js` suffix.

The `.test.js` / `.spec.js` files (or the `__tests__` folders) can be located at any depth under the `src` top level folder.

We recommend to put the test files (or `__tests__` folders) next to the code they are testing so that relative imports appear shorter. For example, if `App.test.js` and `App.js` are in the same folder, the test just needs to `import App from './App'` instead of a long relative path. Colocation also helps find tests more quickly in larger projects.

### Command Line Interface

When you run `npm test`, Jest will launch in the watch mode. Every time you save a file, it will re-run the tests, just like `npm start` recompiles the code.


### Coverage Reporting

Jest has an integrated coverage reporter that works well with ES6 and requires no configuration.<br>
Run `npm test -- --coverage` (note extra `--` in the middle) to include a coverage report like this:

Note that tests run much slower with coverage so it is recommended to run it separately from your normal workflow.Â