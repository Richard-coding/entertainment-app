# Entertainment Web App

A responsive entertainment application built as a study project to strengthen my skills with **React, TypeScript and modern Front-End development**.

The project is based on the **Entertainment Web App challenge from Frontend Mentor** and was developed with a focus not only on reproducing the interface, but also on practicing component architecture, state management, routing, TypeScript modeling and responsive layouts.

## Overview

The application allows users to browse movies and TV series, search through the available content and bookmark titles.

It includes dedicated pages for movies, TV series and bookmarked content, with bookmark preferences persisted between sessions.

## Features

* Browse trending and recommended content
* Browse movies and TV series separately
* Search for content
* Add and remove bookmarks
* Persist bookmarks with `localStorage`
* Navigate between pages with React Router
* Responsive layout for mobile, tablet and desktop
* Horizontal scrolling for trending content
* Active navigation states
* Empty state for searches without results

## Technologies

* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **React Router**
* **LocalStorage**
* **Git / GitHub**

## What I practiced

This project was mainly developed as a way to consolidate my Front-End fundamentals while working on a complete application.

Some of the main concepts I practiced were:

### React

* Component composition
* Props and state
* Event handling
* Derived data
* Lifting state
* Data flow between components
* Shared state
* React Router
* Outlet Context
* Conditional rendering

### TypeScript

* Object modeling
* Type aliases
* Literal and union types
* Typing component props
* Typing callbacks
* Modeling application data

### JavaScript

* Array manipulation
* `map`
* `filter`
* `includes`
* Spread syntax
* Immutable state updates
* Search and filtering logic
* Working with `localStorage`

### CSS & Responsive Design

One of the biggest learning areas in this project was understanding how layout responsibilities should be distributed between components.

I practiced:

* Flexbox
* CSS Grid
* Responsive breakpoints
* Width and sizing behavior
* `min-width`
* `max-width`
* `min-w-0`
* `shrink-0`
* Horizontal overflow
* Scroll containers
* Responsive images
* Mobile-first layouts

The project also helped me better understand an important layout principle:

**Layout → Page → List/Grid → Card → Content**

Each layer should have a clear responsibility instead of individual components trying to control the entire layout.

## Project Structure

The application follows a layout-based structure where shared application behavior lives at a common level:

```text
MainLayout
├── Sidebar
└── Content
    ├── SearchBar
    └── Outlet
        ├── Home
        │   ├── Trending
        │   └── Recommended
        ├── Movies
        ├── TV Series
        └── Bookmarked
```

This structure helped keep navigation, search, bookmark state and page-specific rendering separated by responsibility.

## Running the project

Clone the repository:

```bash
git clone <repository-url>
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Screenshots

*Add project screenshots here.*

## Live Demo

*Add the deployed application URL here.*

## Challenge

This project was based on the **Entertainment Web App challenge by Frontend Mentor**.

The challenge provided the design and assets, while the application architecture, component structure, state management, routing, responsive implementation and interaction logic were developed as part of my learning process.
