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

# Component Hierarchy:
The React components defined in special files of a route segment are rendered in a specific hierarchy:

* 1. layout.js
* 2. template.js
* 3. error.js (React error boundary)
* 4. loading.js (React suspense boundary)
* 5. not-found.js (React error boundary)
* 6. page.js or nested layout.js
