# Tesla Clone - Full-Stack Electric Vehicle Showcase

Welcome to the **Tesla Clone** project! This full-stack web application replicates key features of Tesla’s official website, showcasing electric vehicle models with stunning visuals, interactive components, and user authentication. The app features **dynamic car showcases**, **user authentication** (via email/password and Google), **Tesla feature overviews**, and **video trailers**, offering a seamless experience for car enthusiasts.


[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/react-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue)](https://www.typescriptlang.org/)
[![Version](https://img.shields.io/badge/version-0.0.0-blue)](https://github.com/your-username/tesla-clone/releases)
[![Last Commit](https://img.shields.io/github/last-commit/saddamarbaa/tesla-clone)](https://github.com/your-username/tesla-clone/commits/main)

## ✨ Features

### Core Features:
- **User Authentication**:
  - **Login with Email and Password**: Secure user authentication using traditional email/password combination.
  - **Login with Google**: Users can log in using their Google accounts for a smoother authentication experience.
- **View Tesla Features**: Users can browse through all Tesla model features.
- **Video Trailers**: Engaging video showcases of Tesla vehicles are available, demonstrating various features and performance in real-life scenarios.
- **Mobile-Responsive Design**: Fully responsive UI optimized for both desktop and mobile devices.
- **Smooth Page Transitions**: Page transitions that enhance the overall user experience.



### Bonus Features:
- **Optimized Performance**: Built with optimized performance in mind, ensuring fast load times.
- **SEO-Friendly**: Proper SEO optimizations to ensure better search engine rankings.

## 🚀 Live Demo

You can check out the live demo of the Tesla Clone project at:  [Live Demo](https://tesla-clone-app-react-typescript.vercel.app/)



## 🛠 Tech Stack


- **React.js** with **TypeScript** – for building a scalable, maintainable, and type-safe user interface.
- **Vite** – a fast build tool for development, ensuring quick reloads and a smooth developer experience.
- **Styled-Components** – for modular and dynamic styling that enhances the user experience.
- **React Router** – for client-side routing and smooth page transitions.


### Back-End:
- **Firebase** – for authentication, real-time database, and file storage (e.g., videos, user data).

### Deployment:
- **Vercel/Netlify** – for front-end hosting, providing fast and reliable content delivery.
- **Firebase Hosting** – for hosting both front-end and back-end in a serverless environment.

### Tools & Libraries:
- **Prettier** – for code formatting to maintain consistent code style across the project.
- **ESLint** – for ensuring consistent code quality and identifying potential issues during development.



## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v18 or higher) - You can download it from [here](https://nodejs.org/en/).



### Installation


#### 1. Clone the Repository
To get started, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/saddamarbaa/tesla-clone-app-react-typescript.git
```

#### 2. Go to the project directory

```bash
cd tesla-clone-app-react-typescript
```

#### 3. Install Dependencies
Once you’ve cloned the repository, navigate to the project folder and install the required dependencies:

```bash
npm install
```

#### 4. Set Up Environment Variables
Once you’ve cloned the repository, navigate to the project folder and install the required dependencies:

Copy `.env.example` to `.env` and update the necessary values.

#### 5. Set up Firebase
For user authentication, you'll need to set up Firebase:

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or select an existing project.
3. Enable Firebase Authentication (Email/Password and Google).
4. Copy the Firebase config and add it to the `.env` file in your project.



#### 6. Run the Project
Once the setup is complete, you can run the project locally using:

```bash
npm run dev
```

This will start the development server, and you can view the app in your browser at `http://localhost:3000`.



## 🌍  Environment Variables

To configure the project, you'll need to add the necessary environment variables. Follow these steps:

1. Copy `.env.example` to `.env`.
2. Add your Firebase, Google API keys to the `.env` file.

Here are the environment variables you need to set:

```env
# Firebase Configuration
VITE_REACT_APP_FIREBASE_API_KEY=""
VITE_REACT_APP_AUTH_DOMAIN=""
VITE_REACT_APP_PROJECT_ID=""
VITE_REACT_APP_STORAGE_BUCKET=""
VITE_REACT_APP_MESSAGING_SENDER_ID=""
VITE_REACT_APP_APP_ID=""

```



##  📦  **Deployment**

To deploy this application, follow these steps:

### **Deploying to Production**

1. **Prepare Environment Variables**:
   Ensure that the necessary environment variables are set up in your production environment. For this project, you will need:

   - `VITE_REACT_APP_FIREBASE_API_KEY`: Your Firebase API Key.
   - `VITE_REACT_APP_AUTH_DOMAIN`: Firebase Auth Domain.
   - `VITE_REACT_APP_PROJECT_ID`: Firebase Project ID.
   - `VITE_REACT_APP_STORAGE_BUCKET`: Firebase Storage Bucket.
   - `VITE_REACT_APP_MESSAGING_SENDER_ID`: Firebase Messaging Sender ID.
   - `VITE_REACT_APP_APP_ID`: Firebase App ID.


   **Important**: Copy the provided `.env.example` file to a new `.env` file, and fill in the necessary values for your production environment.

2. **Push your code to a Git repository**:
   If you are using a service like GitHub, GitLab, or Bitbucket, push your code to a remote repository.

3. **Set up a Hosting Service**:
   You can deploy the app on platforms like:

   ### **Vercel**:
   - Install the Vercel CLI and log in.
     ```bash
     npm i -g vercel
     vercel login
     ```
   - Create a production build of your app.
     ```bash
     npm run build
     ```
   - Deploy the app using the Vercel CLI.
     ```bash
     vercel --prod
     ```
   - Set the necessary environment variables in the Vercel dashboard under the **Environment Variables** section.
   - To enable automatic deployment whenever you push code to the repository, check the [Vercel documentation](https://vercel.com/docs) for instructions on setting up **Automatic Deployment**.

   ### **Netlify**:
   - Install the Netlify CLI and log in.
     ```bash
     npm i -g netlify-cli
     netlify login
     ```
   - Build the project for production.
     ```bash
     npm run build
     ```
   - Deploy the app using the Netlify CLI.
     ```bash
     netlify deploy --prod
     ```
   - Set the environment variables in the Netlify dashboard under the **Site Settings > Build & Deploy > Environment Variables** section.
   - To enable automatic deployment whenever you push code to the repository, check the [Netlify documentation](https://docs.netlify.com/) for instructions on setting up **Auto Deployment**.

4. **Set up Firebase**:
   - Ensure that your Firebase project is properly configured. This includes enabling Firebase Authentication, Firestore, and Storage as needed.
   - Use Firebase Console to manage the environment and production configuration.
   - Ensure the environment variables are correctly set in your deployment platform for Firebase services to function properly.

5. **Additional Considerations**:
   - **Security**: Ensure that sensitive information (like API keys) is stored securely using environment variables on your hosting platform.
   - **Build Process**: Always run `npm run build` before deploying to production to generate optimized production-ready code.

Once deployed, your application will be live, and you can access it through the provided URL from Vercel or Netlify.




## 📝 License


This project is licensed under the [MIT License](LICENSE).

You are free to use, modify, and distribute the code, but please ensure you follow the terms of the license. See the [LICENSE](LICENSE) file for more details.

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=saddamarbaa/tesla-clone-app-react-typescript&type=Date)](https://star-history.com/#&Date)




##  📝 Related Projects

### **Netflix Clone App** built with React, TypeScript, and Vite
- [**GitHub Repo**](https://github.com/saddamarbaa/netflix-clone-app-react-typescript)
- A fully functional Netflix clone built with **React**, **TypeScript**, and **Vite**. This project features:
  - **User authentication** for secure sign-in and sign-up.
  - **Profile management** for personalized content.
  - **Movie browsing** with detailed information and trailers.
  - **Search functionality** powered by **ChatGPT**, enabling intelligent recommendations and content discovery.
  - **Responsive design** for a seamless experience across devices.
  - Additional features like favorites, video streaming, and more!


### **YouTube Clone App** built with React + Vite + TypeScript + Styled Components + Firebase
- [**GitHub Repo**](https://github.com/saddamarbaa/youtube-clone-app-react-vite-typescript)
- A fully functional YouTube clone with features like video listing, search, user authentication, video playback, and more, built using React, Vite, TypeScript, and styled with Tailwind CSS. Firebase is used for authentication and storing user data.



### Open Source Blog REST API built with Node.js, Express, MongoDB, and TypeScript
- [**GitHub Repo**](https://github.com/saddamarbaa/node-express-mongodb-typescript-blog-rest-api)
- A powerful RESTful API built with Node.js, Express, MongoDB, and TypeScript for managing blog posts, user authentication, and content moderation. Includes features like filtering, pagination, sorting, and full-text search. Easily customizable and scalable for various use cases.


### Dev Match App built with React, Vite, and TypeScript (Integrated with the current API)
- [**GitHub Repo**](https://github.com/saddamarbaa/developer-match-app-vite-react-typescript)
- A modern web application built with React, Vite, and TypeScript, integrated with the Developer Match API. It enables users to register, create and manage their profiles, and connect with other developers based on skills, interests, and technologies.




### **TMDB Clone App**
- [**GitHub Repo**](https://github.com/saddamarbaa/imdb-clone-app-next13-typescript)
- A movie discovery app built with React.js, Next.js, TypeScript, and Tailwind CSS, replicating the functionality of TMDB. It allows users to browse, search, and view details of movies and TV shows using TMDB's public API.

---

### **Hulu Clone App** built with React Js, Next Js, TypeScript, Redux, Tailwind CSS, Vercel Hosting, with complete user authentication
- [**GitHub Repo**](https://github.com/saddamarbaa/Hulu-clone-app-next.js-typeScript)
- A clone of Hulu's frontend with features like user authentication, TV show/movie management, and search functionality.

---


### **Front-End Mentor Rest Countries API Challenge app** built with React Js + Next Js + TypeScript + Tailwind CSS + Vercel Hosting
- [**GitHub Repo**](https://github.com/saddamarbaa/rest-countries-app-nextjs-typescript)
- An app displaying country data using the Rest Countries API, built with Next.js, React, and TypeScript.

---

### **Google Clone App** built with React Js + Next Js + TypeScript + Tailwind CSS + Vercel Hosting
- [**GitHub Repo**](https://github.com/saddamarbaa/google-clone-app-nex-js-typeScript)
- A Google homepage clone with search functionality and responsive design, built with React, Next.js, and TypeScript.

---

### **Realtor Clone App** built with React Js + TypeScript + Tailwind CSS + Vercel Hosting + Firebase
- [**GitHub Repo**](https://github.com/saddamarbaa/realtor-clone-app-react-typescript)
- A realtor platform clone with property listings, user authentication, and Firebase backend.

---

### **Twitter Clone App** built with React Js + Next Js + TypeScript + Tailwind CSS + Vercel Hosting
- [**GitHub Repo**](https://github.com/saddamarbaa/twitter-clone-app-nextjs-typescript)
- A Twitter clone app with tweet management, user authentication, and real-time updates, built with React and Next.js.

---

### **LinkedIn Clone App** built with React Js + TypeScript + Redux + Styled Components + Material-UI + Firebase Realtime Database + Vercel Hosting
- [**GitHub Repo**](https://github.com/saddamarbaa/LinkedIn-clone-app-react-typescript)
- A LinkedIn clone with user authentication, profile management, and job posting features, using React and Firebase.

---

### **Instagram Clone App** built with React Js + Next Js + TypeScript + Redux + Tailwind CSS + Heroicons
- [**GitHub Repo**](https://github.com/saddamarbaa/Instagram-clone-app-nex-js)
- A clone of Instagram with features like image upload, user authentication, and post interactions built with React and Next.js.

---

### **Facebook Clone App** built with React Js + Next Js + TypeScript + Redux + Styled Components
- [**GitHub Repo**](https://github.com/saddamarbaa/facebook-clone-app-nex-js)
- A Facebook clone with user authentication, post creation, and social interaction features, using React and Redux.

---

### **Messenger Clone App** built with React Js + Next Js + Redux + Styled Components + Material-UI
- [**GitHub Repo**](https://github.com/saddamarbaa/messenger-clone-app-nex-js)
- A real-time messaging app clone with user authentication and message functionality, built with React, Next.js, and Material-UI.

---

### **Gmail Clone App** built with React Js + Next Js + TypeScript + Styled Components + Material-UI + Firebase Realtime Database + Vercel Hosting
- [**GitHub Repo**](https://github.com/saddamarbaa/Gmail-clone-app-nex-js)
- A Gmail clone with email management, inbox UI, and user authentication, built with React and Firebase.

---

### **Signal Clone App** built with React Native + TypeScript + Expo + React Navigation + Firebase Realtime Database + User Authentication + Passwordless Authentication with Magic Link
- [**GitHub Repo**](https://github.com/saddamarbaa/signal-clone-app-reactnative-typescript)
- A Signal clone app with secure messaging, user authentication, and passwordless login using Magic Link, built with React Native.

---

### **WhatsApp Clone App** built with React Js + React Context API + Styled Components + Material-UI + Firebase Realtime Database + Firebase Hosting
- [**GitHub Repo**](https://github.com/saddamarbaa/whatsapp-clone)
- A WhatsApp clone featuring real-time messaging, user authentication, and Firebase backend, built with React.

---

### **Slack Clone App** built with React Js + Next Js + Styled Components + firebase-hooks + Material-UI
- [**GitHub Repo**](https://github.com/saddamarbaa/slack-clone-app-nex-js)
- A Slack clone with channel management, real-time messaging, and user authentication, built with React, Next.js, and Firebase.

---

### **Airbnb Clone App** built with React Js + Next Js + Redux + Tailwind CSS
- [**GitHub Repo**](https://github.com/saddamarbaa/airbnb-clone-app-nex-js)
- A clone of Airbnb with property listings, booking functionality, and responsive design, built with React and Next.js.

---

### **Amazon Clone App** built with React Js + TypeScript + Redux + Styled Components
- [**GitHub Repo**](https://github.com/saddamarbaa/amazon-clone-app-react-typescript)
- A clone of Amazon's frontend with product listings, cart management, and user authentication, built with React and TypeScript.

---



## 📸 Screenshots

## Registration Page
![image](https://user-images.githubusercontent.com/51326421/179383163-3581be5c-03b4-4a59-87c8-9ded67c0dcc6.png)


![image](https://user-images.githubusercontent.com/51326421/179383172-9f77f29d-f005-4e5d-bc83-edfeaa630a79.png)


![image](https://user-images.githubusercontent.com/51326421/179383178-8f9b5049-6bae-40bc-9c78-9340259f0740.png)


## Sign in page

![image](https://user-images.githubusercontent.com/51326421/179383094-4e81efef-66ea-4b27-bf88-13e110bcdea4.png)


![image](https://user-images.githubusercontent.com/51326421/179383130-37754a0d-46ee-4720-bd7f-44274dc3c7e6.png)


![image](https://user-images.githubusercontent.com/51326421/179383142-49a8946b-9ff1-4386-b3ba-5581e06cc3a2.png)


## Home Page

![image](https://user-images.githubusercontent.com/51326421/179383022-e608b3c0-5c41-4c0c-88ab-74782aa0c774.png)


![image](https://user-images.githubusercontent.com/51326421/179383033-12199820-7fbc-40de-8f89-6b578463b98f.png)


