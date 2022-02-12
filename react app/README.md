# A starter React App

Simplified and static version of [ facebook/create-react-app](https://github.com/facebook/create-react-app)

## Usage

```
git clone https://github.com/aknjoroge/starter-react-setup.git
cd starter-react-setup
npm install
```

### Core dependency versions

- react: 17
- react-dom: 17
- web-vitals: 0.2
- react-scripts: 4
- @testing-library [ jest-dom: 5 , react: 11, user-event: 12]

To update to the latest versions, edit the package.json file and remove ~ in the dependencies and replace with ^, <br/>
then npm install again ie <br/>
` "react": "~17.0.1",` <br/>
To <br/>
` "react": "^17.0.1",`

### Script

- npm start - start the development server
- npm build - generate the app build files
- npm test - run Jest tests

### Not included extra libaries

1. Redux:

```
npm i react-redux
```

2. Redux toolkit:

```
npm install @reduxjs/toolkit
```

3. React-Router:

```
npm install react-router-dom@5
npm install react-router-dom@6
```

4. React-transition animatons:

```
npm install react-transition-group --save
```

5. firebase

```
npm install -g firebase-tools
```

6. Cookies 

```
https://github.com/reactivestack/cookies/tree/master/packages/react-cookie
```
