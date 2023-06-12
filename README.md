# Nextjs-Practice

* Create a next project using following command---->
 `npm install next@latest react@latest react-dom@latest`
 
 * Add following script to package.json file----->
 `"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }`
  
  * Create app folder on the root level and it should contain a rootlayout.js file,and this file should have `html` and `body` tag with prop `children` and another file with name page.js to create or make UI.

* Run your application with command `npm run dev`.
* We can't directly import server component inside client component we can use server component as a props inside client component.
* The App Router takes priority over the Pages Router. Routes across directories should not resolve to the same URL path and will cause a build-time error to prevent a conflict.
