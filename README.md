# Netflix Clone Built Using React.JS/Tailwind & Firebase

This is a React.JS-based clone of Netflix, utilizing Firebase as its backend. While it doesn't fully replicate all the features of the original Netflix website, it showcases my design skills and proficiency in React.JS by offering a simpler version with a unique touch.

## Table of Contents

- [Netflix Clone Built Using React.JS/Tailwind \& Firebase](#netflix-clone-built-using-reactjstailwind--firebase)
  - [Table of Contents](#table-of-contents)
- [Live Demo](#live-demo)
- [Project Overview:](#project-overview)
- [Sign-in Page](#sign-in-page)
- [Sign-up Page](#sign-up-page)
- [Home Page](#home-page)
- [Account Page](#account-page)
- [Technology Used](#technology-used)
- [How To Use](#how-to-use)
- [Show Your Support](#show-your-support)

# Live Demo

**_You can access the live version by visiting the following link:_**

# Project Overview:

# Sign-in Page

![ScreenShot](/src/assets/readmeImg/sign-in-page.png)

**_1) Header Contains:_**

- Logo: By clicking on it, you will be redirected to the home page.

- Sign-in Button: Clicking on it will take you to the sign-in page.

- Sign-up Button: When clicked, it redirects you to the sign-up page.

**_2) Sign-in Form Includes:_**

- Input field for email address.

- Input field for password.

- Sign-in Button: This button incorporates a validation feature. It remains disabled if any field in the form is empty. However, once all fields contain data, it becomes active and proceeds to send the data to the firebase database in the backend for authentication. Additionally, it includes an error handling function.

- Link to Sign-up Page: You can access the sign-up page by following this link.

# Sign-up Page

![ScreenShot](/src/assets/readmeImg/sign-up-page.png)

**_1) Header Contains:_**

- Logo: When clicked, redirects you to the home page

- Sign-in Button: Upon clicking, takes you to the sign-in page.

- Sign-up Button: When clicked, redirects you to the sign-up page.

**_2) Sign-up Form, which includes:_**

- An input field for your Email address.

- An input field for your Password.

- Sign-up Button: This button includes a validation feature that disables it if any field in the form is empty. Once all fields contain data, the button becomes active and sends the data to the Firebase database in the backend for registration. The button also includes error handling functionality.

- Link to Sign-in Page: This link redirects you to the sign-in page.

# Home Page

![ScreenShot](/src/assets/readmeImg/home-page.png)

**_1) Header section includes:_**

- Logo: Clicking on the logo redirects you to the home page.

- Link to Account Page: This link redirects users to the sign-in page. It remains invisible if a user is already logged in.

- Log-out Button: Upon clicking, the user is logged out.

- Featured Movie Title & Description: This section displays the title and description of the featured movie.

- Play Button: Clicking on it activates the video player to play the featured movie.

- Watch Later Button: This button allows users to save the movie to their "Watch Later" list.

**_2) Movies Slides:_**

- This section contains a slideshow showcasing movies based on their genres. The movie information and genres are retrieved from the TMDb API.

**_3) Movie Card:_**

- Each movie is represented by an image. Hovering over the image displays a heart icon, and clicking on it activates the card feature.

**_4) Card Feature:_**

- Clicking on the heart icon in the Movie Card saves the movie to the user's account

# Account Page

![ScreenShot](/src/assets/readmeImg/acount-page.png)

**_1) Header section includes:_**

- Logo: Clicking on the logo redirects you to the home page.

- Link to Account Page: This link redirects users to the sign-in page. It remains invisible if a user is already logged in.

- Log-out Button: Upon clicking, the user is logged out.

**_2) Movies Slides:_**

- In this section, a slideshow is presented, showcasing movies based on the ones the user has saved

**_3) Movie Card:_**

- Each movie is represented by an image. Hovering over the image displays a delete icon, and clicking on it activates the card feature.

**_4) Card Feature:_**

- Clicking on the delete icon in the Movie Card removes the movie the user no longer wants to save.

# Technology Used

The project was developed using the following tools:

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/en/main) - Library for handling different pages/views in your React app for easy navigation
- [React Icons](https://react-icons.github.io/react-icons) - Collection of customizable icons for React projects.
- [React Toastify](https://www.npmjs.com/package/react-toastify) - Displays pop-up messages or notifications in your React app
- [Firebase](https://firebase.google.com/) - Backend services (authentication, database, storage)
- [Axios](https://axios-http.com/docs/intro) - Library to make requests to servers to get or send data from/to a server.
- [Tailwind CSS](https://tailwindcss.com/) - Low-level CSS framework for UI design.
- [TMDB API](https://developer.themoviedb.org/docs) - An API that provides movie-related data for our app.

# How To Use

To run this React app in a local development environment, you'll need the following:

1. Ensure you have [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed on your computer.

2. Create a Firebase account at [Firebase](https://firebase.com) and set up a dedicated project 3. Then From your terminal, you should do the following:

3. Clone the repository:

   ```shell
   git clone https://github.com/khalid-nur/netflix-clone-tailwind.git

   ```

4. Navigate to the project directory:

   ```shell
   cd netflix-clone-tailwind

   ```

5. Install the required dependencies:

   ```shell
   npm install
   ```

6. Run the app

   ```shell
   npm start
   ```

# Show Your Support

Give a ⭐️ if you like this project!
