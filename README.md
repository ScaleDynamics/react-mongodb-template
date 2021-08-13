<p align="center">
  <a href="https://scaledynamics.com/" target="_blank">
    <img src="https://i.postimg.cc/GtWXnsxt/MERN-Stack.png" alt="MERN-Stack" />
  <a>
</p>

# MERN ready to use template for ScaleDynamics platform

> MERN stands for MongoDB, Express, React and Node.js Full Stack, which is one of the standard full stack for JavaScript developers.

This template is configured for the ScaleDynamics platform. It is ready to use to build your own MERN based app/service. All is pre-configured: we provide one command to develop with live reload (frontend and backend) and one to deploy to make it live on a url.

One particularity of our platform is that you don’t have to manage the [Express](https://expressjs.com/) layers, the platform manages them for you automatically, so you can focus only on the MongoDB/Node/React coding.

Note that you need a ScaleDynamics account for deployment (create a FREE community account [here](https://console.scaledynamics.com/auth/signup/)).


## How to use

Go in `react-app` folder and run those commands:

### Project setup

```sh
npm install
```

### Live-reload for development

To enter a live-reload development session, use the command below. Feel free to update the frontend or the backend code, it will be rebuilt at each change.


```sh
npm run dev
```

Note that when running this command, you have to select a project. On the ScaleDynamics platform, a project identifies an application or a microservice. If you are logged, select an existing project or create a new one. You can also use the platform anonymously by selecting the `anonymous` project. For more details on projects, see the [documentation](https://docs.scaledynamics.com).

#### Deploy with ScaleDynamics

First you have to compile and minify your project for production.

```sh
npm run build
```

Then use your ScaleDynamics account credential to log in to the platform (create a FREE community account [here](https://console.scaledynamics.com/auth/signup/))

```sh
npx warp login
```

Finally, use the deploy command

```sh
npm run deploy
```

Note that when running this command, you have to select an environment. An environment identifies the cloud execution environment to run your app. You can create as many as you want like ‘staging’, ‘demo’, ‘prod’... Each environment has its own url.

To deploy, select an existing environment or create a new one. For more details on projects or environments, see the [documentation](https://docs.scaledynamics.com).

## Template structure

This project is divided in two parts:
  - the frontend, a `react-app` web template app created with `create-react-app`. To update it, open the `src` folder where you can add, modify or delete components.
  - the backend with a node module and a MongoDB module. You can update the frontend/backend as you need to build your own app.

Regarding MongoDB, we provide a template module  in the `src/mongodb.js`. To use your own MongoDB instance, replace the `URI` constant by your own.

```js
const URI = 'mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]';
```


You can create new functions that can be called by the frontend. Add them in `src/index.js` or into another module and export it. The platform manages the [Express](https://expressjs.com/) layers automatically.


```js
const myFunction = () => {
  // your code here
}

module.exports = { myFunction };
```

To access your new functions on the frontend side, feel free to adapt this code:

```js
import * as Backend from './.backend/backend.js';

const { myFunction } = new Backend();
```
## Documentation

If you need more information, you can refer to the documentation:
  - [ScaleDynamics Platform](https://docs.scaledynamics.com/)
  - [React](https://reactjs.org/docs/getting-started.html)
  - [MongoDB](https://docs.mongodb.com/guides/)


## License

Copyright 2021 ScaleDynamics SAS. All rights reserved.
Licensed under the MIT license.