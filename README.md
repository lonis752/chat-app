# Fullstack Chat App

This application was built using the MERN stack.<br/>
You can create an account with authentication implemented using bcrypt and JWT. Chat with other users in realtime with text messages and image sharing provided by mongoDB, Cloudinary, and realtime functionality with Socket.io. You also have the ability to update your profile photo and customize your UI theme as needed provided by DaisyUI.

### packages used:
*Make sure to follow the instructions on the documentation links as some packages require extra steps after downloading the package.<br/>

### Frontend:
* Vite - Frontend dev tool<br/>
https://vite.dev/guide/<br/>
* React - Library for creating the frontend<br/>
https://react.dev/learn<br/>
* React Router Dom - For SPA's / routing for the different pages on your site<br/>
https://reactrouter.com/home<br/>
* React Hot Toast - Display nice notifications<br/>
https://react-hot-toast.com/docs<br/>
* Tailwind CSS - Ease of styling and responsive web design (version 3.4.17 for DaisyUI - update coming soon to work with tailwind@latest)<br/>
https://v3.tailwindcss.com/docs/guides/vite<br/>
* DaisyUI - Tailwind plugin providing a library of code to design your frontend<br/>
https://daisyui.com/docs/install/<br/>
* Axios - Convinient fetching<br/>
https://axios-http.com/docs/intro<br/>
* Zustand - Global state management system<br/>
https://zustand.docs.pmnd.rs/getting-started/introduction
* Lucide React - icons and Loading animations<br/>
https://lucide.dev/guide/<br/>
* Socket.IO-Client - Allows Socket to communicate with the frontend<br/>
https://socket.io/docs/v4/client-api/<br/>

### Frontend Commands:
```
npm create vite@latest
npm i react-router-dom react-hot-toast axios zustand lucide-react socket.io-client
npm i -D tailwindcss@3 postcss autoprefixer daisyui@latest
npx tailwindcss init -p
```

### Backend:
* Bcryptjs - Salting passwords<br/>
https://www.npmjs.com/package/bcryptjs<br/>
* Cloudinary - Image storage for profile pictures and messages<br/>
https://cloudinary.com/documentation/node_quickstart<br/>
* Cookie-Parser - Parser cookies to fetch and use with JWT<br/>
https://www.npmjs.com/package/cookie-parser<br/>
* Express - NodeJS express<br/>
https://expressjs.com/en/starter/installing.html<br/>
* Jsonwebtoken - Authenticate users<br/>
https://www.npmjs.com/package/jsonwebtoken<br/>
* Mongoose - database storage using Atlas<br/>
https://mongoosejs.com/docs/<br/>
* Socket.io - Realtime message functionality<br/>
https://socket.io/docs/v4/server-api/<br/>
* Cors - Allow access from frontend URL<br/>
https://www.npmjs.com/package/cors<br/>

### Backend Commands:
```
npm i bcryptjs cloudinary cookie-parser express jsonwebtoken mongoose socket.io cors
```
### Root Commands:
In the root directory of your project (chat-app)
```
npm init -y
touch README.md
touch .gitignore
git init
```
Make sure to delete other README.md files.<br/>
Update the contents of .gitignore to ignore at least the node_modules and .env*.<br/>

### Deployed using Render: https://chat-app-kq6u.onrender.com<br/>
*Disclaimer: Apps on the free plan with Render (which this app is) will have a longer initial load up time as the apps are put on pause after a set amount of inactivity. This has no effect on the app and it's actual runtime but something to keep in mind when visiting the link above.<br/>

### Future Updates:<br/>
- Groupchat functions<br/>