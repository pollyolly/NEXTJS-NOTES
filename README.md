## NEXTJS NOTES

### NextJs Installation
```vim
$npx create-next-app@latest
```
### Run Project
```vim
$npm run dev
```
### Next Auth
```vim
$npm install next-auth
```
### Mongoose
```vim
$npm install mongoose
```
### DotEnv (process.env)
```vim
$npm install dotenv
```
### Bcrypt
```vim
$npm install bcrypt
```
### MongodDb Adapter
```vim
$npm install @auth/mongodb-adapter mongodb
```
### Google Oauth consent screen
```vim
1. Google console cloud
2. Create project
3. OAuth consent screen
```
### Authorized redirect URI
```vim
# use domain name in production
http://localhost:3000/api/auth/callback/google
```
### Troubleshooting
#### Modules not found inside [...nextauth]/route.js, @/app and @/libs
```javascript
# https://github.com/dejwid/food-ordering/blob/master/tsconfig.json
# Add in tsconfig.json
"paths":{
    "@/*":["./src/*"]
},
```
#### Page Directory: app/register/page.js
```vim
http://localhost/register
```
#### App URi Directory: app/api/register/route.js
```javascript
fetch('/api/register', {});
```
#### Fix: Monggo Database connection, use 127.0.0.1 not localhost
```
# Project-Folder/.env
MONGO_URL='mongodb://127.0.0.1:27017/pizza-shop'
```
#### Tailwind Css
```css
button {
    @apply block w-full text-gray-700 font-semibold;
}
```
#### AppContext (SessionProvider)
```javascript
# AppContext.js (Composition)
export default function AppProvider({children}){
    <SessionProvider>{children}</SessionProvider>   
}
# layout.js
# import { AppProvider } from 'AppContext.js'
<AppProvider>
    <main></main>
</AppProvider>
```
#### Allow Remote files 
next.config.mjs
```javascript
# used in: app/profile/page.js
/** @type {import('next').NextConfig} **/
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com'
          },
        ],
      },
};
export default nextConfig;
```
#### getServerSession not working
```vim
1. NEXTAUTH_SECRET="thisissecrete"
2. use in [...nextauth]/routes.js
```
use await
```javascript
await getServerSession(authOptions)
```
#### Unable to update records in schema
```vim
Check schema attributes if complete. 'name':'', 'email':'', etc..
```
#### AWS S3 Upload
https://youtu.be/nGoSP3MBV2E?si=HDFaC_yNUEorF2iz&t=13457
```vim
$npm install @aws-sdk/client-s3
```
```vim
$npm install uniqid
```
#### React Hot Toast
```vim
$npm install react-hot-toast
```
```javascript
# layout.js
# https://medium.com/@morerahul620/react-hot-toast-setup-in-next-js-bbf2b5d91c63
import { Toaster } from "react-hot-toast";

<Toaster position="top-center" />
```
### Server/Client Components
```javascript
// by default components are Server side componets
// add "use client"; above the file to allow client side rendering

"use client";
import React from "react";
```
### Troubleshooting
app-index.js:31 Warning: Extra attributes from the server: data-new-gr-c-s-check-loaded,data-gr-ext-installed
```vim
Disable Grammarly chrome extension and ColorZilla
```
screen.js:1 Uncaught TypeError: Cannot read properties of null (reading 'getContext')
```
```
Unable to commit NextJs project folder in Github
```vim
Manually copy the files and folders to a new folder leaving, hidden files.
```

### References
[Nextj.SEO Checklist](https://dminhvu.com/nextjs-seo)

[Next.Js](https://nextjs.org/)
