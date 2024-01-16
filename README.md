# NEXTJS-NOTES
### Note
```
- by default all components in NextJs are Server Side.
  To allow client side insert directive in a component add "use client"; above the file.
```
Sample: Hero.tsx
```javascript
"use client";
import React from "react";
```
### Installation
```vim
$cd next-commerce
$npx create-next-app@latest ./
```
### Running Project
```vim
$npm run dev
```
### Third Party UI library
```vim
Headless UI
https://headlessui.com/
```
```
$npm install @headlessui/react
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
