# React

```
npm i
yarn start
yarn build

```


### Create New APP in React

javascript
```
npx create-react-app .
npm i axios
npm i js-cookie
npm i react-router-dom
npm start
npm run build

yarn start
yarn build
```

### Create src/env.js

javascript
```
import Cookies from "js-cookie";

export const domain = "http://127.0.0.1:8000";
export const domain1=window.location.origin;

// export const domain = "";

/*
    window.localStorage.setItem('myCat', 'Tom');
    window.localStorage.removeItem('myCat');
    window.localStorage.clear();
    window.localStorage.getItem("token");
    */
const token = "";
const csrftoken = Cookies.get("csrftoken");
export const getheader = {
  Authorization: `token ${token}`,
};

export const postheader = {
  "X-CSRFToken": csrftoken,
};

export const posttokenheader = {
  Authorization: `token ${token}`,
  "X-CSRFToken": csrftoken,
};
```

