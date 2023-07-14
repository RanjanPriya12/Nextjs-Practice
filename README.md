# Nextjs-Practice

* Create a next project using the following command---->
 `npm install next@latest react@latest react-dom@latest`
 
 * Add the following script to the package.json file----->
 `"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }`
  
  * Create an app folder on the root level and it should contain a rootlayout.js file, and this file should have `HTML` and `body` tags with prop `children` and another file with the name page.js to create or make UI.

* Run your application with the command `npm run dev`.
* We can't directly import server components inside client components we can use server components as props inside client components.
* The App Router takes priority over the Pages Router. Routes across directories should not resolve to the same URL path and will cause a build-time error to prevent a conflict.

# Component Hierarchy:
The React components defined in special files of a route segment are rendered in a specific hierarchy:
* 1. layout.js
* 2. template.js
* 3. error.js (React error boundary)
* 4. loading.js (React suspense boundary)
* 5. not-found.js (React error boundary)
* 6. page.js or nested layout.js

## Styling
CSS can be added using `CSS Module` like app/folder/style.module.css or using `GLobal CSS` as app/global.css.

# Routing :
A file-system-based router built on top of Server Components that support layouts, nested routing, loading states, error handling, and more.
* Good to know: The App Router takes priority over the Pages Router. Routes across directories should not resolve to the same URL path and will cause a build-time error to prevent a conflict.
* Folders are used to define routes. A route is a single path of nested folders, following the file-system hierarchy from the root folder down to a final leaf folder that includes a page.js file. Files are used to create UI.

## Page :
* Pages are Server Components by default but can be set to a Client Component. They are used to create UI and A page.js file is required to make a route segment publicly accessible.
##  Layouts
* A layout is UI that is shared between multiple pages. On navigation, layouts preserve state, remain interactive, and do not re-render.
* Layouts are Server Components by default but can be set to a Client Component.
* The topmost layout is called the Root Layout. This required layout is shared across all pages in an application. Root layouts must contain `html` and `body` tags.
* Passing data between a parent layout and its children is not possible.
* Layouts do not have access to the current route segment(s). To access route segments, you can use useSelectedLayoutSegment or useSelectedLayoutSegments in a Client Component.
* The root layout is a Server Component by default and can not be set to a Client Component.

## Templates
* Templates are similar to layouts in that they wrap each child layout or page. Unlike layouts that persist across routes and maintain state, templates create a new instance for each of their children on navigation.
* When a user navigates between routes that share a template, a new instance of the component is mounted, DOM elements are recreated, the state is not preserved, and effects are re-synchronized.

  Good to know: You should not manually add <head> tags such as <title> and <meta> to root layouts. Instead, you should use the Metadata API which automatically handles advanced requirements such as streaming and de-duplicating <head> elements.

## Linking and Navigating
* Link (Component) next/link
* useRouter (Hook) next/navigation

* The Next.js router uses server-centric routing with client-side navigation. It supports instant loading states and concurrent rendering.
* You can use usePathname() to determine if a link is active.

## Error Handling
* An error.js boundary will not handle errors thrown in a layout.js component in the same segment because the error boundary is nested inside that layouts component.
* error.js boundaries do not catch errors thrown in layout.js or template.js components of the same segment.
* To handle errors within the root layout or template, use a variation of error.js called global-error.js.
* The global-error.js error boundary wraps the entire application, and its fallback component replaces the root layout when active. Because of this, it is important to note that global-error.js must define its own <html> and <body> tags.

## Data Fetching
* With parallel data fetching, requests in a route are eagerly initiated and will load data at the same time. This reduces client-server waterfalls and the total time it takes to load data.
* With sequential data fetching, requests in a route are dependent on each other and create waterfalls. There may be cases where you want this pattern because one fetch depends on the result of the other, or you want a condition to be satisfied before the next fetch to save resources. However, this behavior can also be unintentional and lead to longer loading times.
* use is a new React function that accepts a promise conceptually similar to await. use handles the promise returned by a function in a way that is compatible with components, hooks, and Suspense.
*  Dynamic functions like cookies() and headers() will make the route segment dynamic.

## Caching Data
* Next.js has built-in support for caching data, both on a per-request basis (recommended) or for an entire route segment.
* Requests are not cached if:

** Dynamic methods (next/headers, export const POST, or similar) are used and the fetch is a POST request (or uses Authorization or cookie headers)
** fetchCache is configured to skip cache by default
** revalidate: 0 or cache: 'no-store' is configured on individual fetch
