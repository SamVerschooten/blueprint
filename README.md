# GETTING STARTED

Before starting make sure you've installed following tools
- npm
- node
- typings
- webpack

Execute following commands when running for the first time:
```bash
npm install
```

# RUN

```bash
#assembles all resources and starts an express server
npm start
```
Go to [http://localhost:3000](http://localhost:3000) in your browser.

# DEVELOPMENT

```bash
#launch a webpack server with watches:
npm run dev
```
Go to [http://localhost:8080](http://localhost:8080) in your browser.

# E2E TESTING

```bash
#make sure the app is running
npm start

#open another terminal and start the e2e tests
npm run e2e
```