# Habit tracker app

A fullstack CRUD application built with NextJS, that helps you to keep track of your daily habits!

**You can check it out here:** [Habit Tracker](https://habittracker-nextjs-hwm.vercel.app/)

![Screen Shot 2023-07-25 at 11 56 38 AM](https://github.com/hun-ah/habit-tracker-nextjs/assets/103898493/a73e6aeb-bf7b-492b-9c2d-d5ed174ce423)

## How It's Made:
**Built with: NextJS, React, MongoDB and CSS**

This is a refactored project of my Habit Tracker app (that you can view [here](https://habit-tracker-hwm.cyclic.app)), that was originally
built with NodeJS, Express, MongoDB, JavaScript, CSS and EJS. The original project was extremely slow and the main purpose of redoing
it was to make it more user friendly by improving the clients ability to interface with the application and make requests to the server.

I began this project by setting up my NextJS environment and installing any dependencies that I needed. I recreated all of the styling from
the original application and used CSS modules instead of global CSS styling, (save for a few stylesheets and classes that were used in 
several different places or where it made sense to access a global class/variable such as colour scheme colours).

Because the original application was not built using React, I spent a lot of time planning out and creating components. I made an effort
to build reusable components such as one Button component for all buttons in the application, as well as a reusable Input component.

Implementing the backend code into this project was a challenge for me, since I am used to working only with Express and Node.
I spent a lot of time watching videos/reading StackOverflow posts trying to figure out how to create my GET/PUT/POST/DELETE methods and how
to properly make fetch requests from the client-side.

After figuring out how the server-side rendering worked, Next's built in routing system and implementing Next-Auth, the project really came
together!

## Optimizations:
The obvious optimizations in this project are compared to the original applications code and ease of interacting with the UI.

From a code readability and organization perspective, this project is a lot cleaner. The original project had two JS files containing all of
the logic for the whole application (which quickly became disorganized and hard to read), whereas this project utilizes components and
JSX to contain all JavaScript logic within each individual file. The file structure of this project is also a lot easier to navigate and
understand. I grouped components into folders based on their place in the application and each component and/or page has its own
corresponding CSS module.

Because this project uses React, it is much faster than the original application, which would refresh the page upon every page navigation
or request to the server. The speed of the new application is at least twice that of the original project.

Optimizations made in this project include: 
- switching from multiple CSS files to CSS modules (I originally created individual css files for each component and later learned using
modules would be MUCH easier and functional in the long run)
- using session storage to store whether a user was authenticated, to keep the UI consistent whenever a session had a status of loading
- using a layout file, to keep styling consistent across the application
- implementing the context API to easily share state across several different components

## Lessons Learned:
This was my first project built using NextJS and so I learned a lot about how it works and how powerful it is. This project gave me a 
lot more practice in thinking in React an how to structure/build a reusable, component based application.
