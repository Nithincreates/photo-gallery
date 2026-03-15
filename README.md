# Photo Gallery App

A minimal and responsive photo gallery web application built using **React**, **Vite**, and **Tailwind CSS**.
The application fetches images from a public API, displays them in a responsive grid, allows users to search photos by author name, and mark photos as favourites.

## Live Demo

https://photo-gallery-c1p6.vercel.app

## Features

* Fetches 30 photos from the Picsum Photos API
* Displays images in a responsive grid layout
* Search photos by photographer name in real time
* Mark photos as favourites
* Favourite photos persist after page refresh using localStorage
* Clean and minimal UI built with Tailwind CSS

## Technologies Used

* React
* Vite
* Tailwind CSS
* React Icons
* JavaScript (ES6)

## React Concepts Used

* Custom Hooks (`useFetchPhotos`)
* `useReducer` for managing favourites
* `useMemo` for optimizing filtered results
* `useCallback` for memoizing event handlers
* `localStorage` for persistent state

## API Used

This project uses the public Picsum Photos API:

https://picsum.photos/v2/list?limit=30

## Project Structure

src

* components

  * Gallery.jsx
* hooks

  * useFetchPhotos.js
* reducer

  * favouritesReducer.js
* App.jsx
* main.jsx
* index.css

## Installation

Clone the repository

git clone https://github.com/Nithincreates/photo-gallery.git

Navigate to the project folder

cd photo-gallery-react

Install dependencies

npm install

Start the development server

npm run dev

The application will run at:

http://localhost:5173

## Author

Developed by NITHIIN
