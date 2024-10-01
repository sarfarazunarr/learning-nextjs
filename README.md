# Learn NextJS instantly 
Watch & Save Playlist at Haidery Vloggers
[Watch Playlist](https://www.youtube.com/playlist?list=PLeoQpMZEq_7Ua20_Ta6J15lbMDy5QgAdm)
[Subscribe My Channel](https://www.youtube.com/@sarfarazunarr)

## Next.js

Next.js is an open-source React front-end framework that enables server-side rendering and generates static web pages for production.

## Features

- Server-side rendering
- Static site generation
- Code splitting
- Internationalization and localization
- API routes
- Built-in CSS-in-JS support
- Built-in support for CSS preprocessors like Sass and Less
- Built-in support for images and other media formats
- Built-in support for TypeScript and other type systems
- Built-in support for ESLint and other linters
- Customizable with plugins

## Advantages

- Better performance: Next.js uses server-side rendering to generate static web pages, which results in faster page loads and better SEO.
- Easier maintenance: Next.js has a simple and intuitive API, making it easier to maintain and update your website.
- Better security: Next.js has built-in support for security features like SSL and HTTPS, making it easier to secure your website.
- Better scalability: Next.js is designed to scale with your website, making it easier to handle large amounts of traffic.

## Disadvantages

- Steeper learning curve: Next.js has a lot of built-in features and a unique API, which can make it harder to learn and use.
- More overhead: Next.js requires more overhead than other React frameworks, which can make it slower to develop and deploy.
- Limited customizability: Next.js has a lot of built-in features and a unique API, which can limit how much you can customize it.

## Conclusion

Next.js is a powerful and popular React framework that enables server-side rendering and generates static web pages for production. It has a lot of built-in features and a unique API, which can make it easier to build and maintain fast, scalable, and secure websites. However, it also has a steeper learning curve and more overhead than other React frameworks.


## Installation of Next.js

To install Next.js, follow these steps:

### Step 1: Install Node.js and npm

First, you need to install Node.js and npm (Node Package Manager) on your computer. You can download the latest version of Node.js from the official Node.js website: https://nodejs.org/en/download/

### Step 2: Install NextJS
Move to Any directory where you wants to install nextjs e.g `(E:/websites)` then open `cmd` there and type `npx create-next-app@latest` then it will ask you project name and other configuration details click on enter for default settings. Then move to directory where your nextjs is installed and open it in VS Code and start coding...

---

## Special Files

In the app router, there are some special files which are executed differently than other files. These files are:

- `page.tsx`: This file is the entry point for your app. It is executed before any other file in the app router.
- `layout.tsx`: This file is the root layout component for your app. It is executed after the `page.tsx` file.
- `head.tsx`: This file is used to add any additional tags to the head of the HTML document. It is executed in the context of the `page.tsx` file.
- `loading.tsx`: This file is used to add any additional HTML to the page while the app is loading. It is executed in the context of the `page.tsx` file.
- `error.tsx`: This file is used to handle any errors that occur in the app. It is executed in the context of the `page.tsx` file.
- `not-found.tsx`: This file is used to handle any 404 errors that occur in the app. It is executed in the context of the `page.tsx` file.



## Introduction to Next.js Routing

Next.js utilizes a **file-based routing system**, where the structure of files and folders within the `app/` directory directly maps to the application's URL structure. This approach simplifies routing by eliminating the need for explicit route definitions, allowing developers to organize their pages and components in a hierarchical manner.

With the App Router, Next.js enhances this system by introducing **nested routing**, enabling more complex layouts and better code organization. Nested routing allows parts of the UI to be shared across multiple pages, such as headers, footers, and sidebars, without repetitive code.

---

## Simple Routing in Next.js App Router

### File-Based Routing

In Next.js, simple routing is achieved by creating files inside the `app/` directory. Each file corresponds to a route based on its file name and location within the directory hierarchy.

**Example:**

```
app/
├── page.tsx
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
```

- `/` → `app/page.tsx`
- `/about` → `app/about/page.tsx`
- `/contact` → `app/contact/page.tsx`

Each `page.tsx` file exports a React component that serves as the page for that route.
<!-- 
### Dynamic Routes

Next.js allows for dynamic routing by using square brackets `[]` in folder or file names. This feature enables routes that can handle variable path segments.

**Example:**

```
app/
├── blog/
│   ├── [slug]/
│   │   └── page.tsx
│   └── page.tsx
```

- `/blog` → `app/blog/page.tsx`
- `/blog/my-first-post` → `app/blog/[slug]/page.tsx` with `slug = 'my-first-post'`

Dynamic routes are essential for pages like blog posts, user profiles, and any other content that relies on variable identifiers.

--- -->

## Nested Routing in Next.js App Router

Nested routing allows developers to create complex UI structures by nesting routes within routes. This is particularly useful for shared layouts, sidebars, headers, and other UI elements that persist across multiple pages.

### Nested Route Segments

Nested route segments correspond to nested folders within the `app/` directory. Each segment can have its own `layout.tsx`, `page.tsx`, and other components, enabling fine-grained control over the UI and data fetching.

**Example Structure:**

```
app/
├── country/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── pakistan/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── japan/
│       └── page.tsx
```

- `app/country/page.tsx` → `/country`
- `app/country/pakistan/page.tsx` → `/country/pakistan`
- `app/country/japan/page.tsx` → `/country/japan`

Each nested route can have its own layout, allowing for specific UI structures within different sections of the application.


## Practical Examples

### Simple Routing Example

Let's create a basic Next.js application with simple routing, including a homepage, about page, and contact page.

**Project Structure:**

```
app/
├── page.tsx
├── about/
│   └── page.tsx
└── contact/
    └── page.tsx
```

**`app/page.tsx`:**

```tsx
// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 className="text-3xl font-bold">Hello World</h1>

    {/* Visit to country/pakistan route */}
    <Link className="px-3 py-3 rounded-md bg-green-400 text-xl" href={"/country/pakistan"}>Visit Pakistan</Link>


    {/* Visit to country/japan route */}
    <Link className="px-3 py-3 rounded-md bg-blue-400 text-xl" href={"/country/japan"}>Visit Japan</Link>
    </main>
    
  );
}
```

**`app/about/page.tsx`:**

```tsx
// app/about/page.tsx
export default function About(){
    let name:string = "Sarfaraz";
    return (
        <h1 className="text-3xl font-bold text-center">Hello {name}</h1>
    )
}
```

**`app/contact/page.tsx`:**

```tsx
// app/contact/page.tsx
import React from 'react'

const Contact = () => {
  return (
    <div>
      Contact Us
    </div>
  )
}

export default Contact

```

This setup creates three routes:

- `/` → Homepage
- `/about` → About Us page
- `/contact` → Contact Us page

### Nested Routing Example

Now, let's enhance the application by adding a dashboard section with nested routes for settings and profile, each with their own layouts.

**Project Structure:**

```
app/
├── layout.tsx
├── page.tsx
├── country/
│   ├── page.tsx //Not available in code (Currently)
│   ├── pakistan/
│   │   └── page.tsx
│   └── japan/
│       └── page.tsx
```

**`app/country/pakistan/page.tsx`:**

```tsx
// app/country/pakistan/page.tsx
export default function Pakistan(){
    return (
        <h2 className="text-6xl font-semibold text-center">I love pakistan</h2>
    )
}
```

**`app/country/japan/page.tsx`:**

```tsx
// app/country/japan/page.tsx
export default function Japan(){
    return (
        <h2 className="text-6xl font-semibold text-center">I love Japan</h2>
    )
}
```
*** Other Data will be added publishing videos ***
