# Course Registration

Welcome to the Course Registration! This platform enables you to easily select web development and programming courses that interest you. Below, you'll find a concise summary of its standout features:


https://github.com/programming-hero-web-course2/my-course-roster-hosan30/assets/50867996/96376c40-67e8-40ea-8eb6-4866a8b4d0ea



## Live Link

🚀 **[Click here for the live link](https://course-registration.surge.sh/)**

## Features

- 📚 **Course Selection**: Browse and choose from a variety of web development and programming courses.

- ❌ **Course Removal**: If you change your mind, you can easily remove a course from your selection.

- 💼 **Maximum Credit Limit**: Students can select courses with a total credit limit of up to 20 credits.

# State Management

## States

- **courses**: This state variable holds an array of available courses. It is initialized by fetching data from a JSON file using the `fetch` API. Any updates to this state trigger a re-render to reflect changes in the available courses.

- **selectedItems**: This state variable is an array that keeps track of the courses selected by the user. When a course is added to the cart, it is pushed into this array, and when removed, it is filtered out. This state allows for real-time updates to the cart.

- **creditTime**: This state variable represents the total credit time of the selected courses. It is updated each time a course is added or removed from the cart. There is also a credit limit check to ensure that the total credit time does not exceed 20 credits.

- **totalPrice**: This state variable keeps track of the total price of the selected courses in the cart. Similar to `creditTime`, it is updated whenever a course is added or removed from the cart.

## Functions

- **addToCart(obj)**: This function is responsible for adding a selected course to the cart. It updates `selectedItems`, `totalPrice`, and `creditTime`. If the credit limit is exceeded, it displays an error message using toast notifications.

- **removeFromCart(obj)**: This function allows users to remove a course from the cart. It updates `selectedItems`, `totalPrice`, and `creditTime`. It also displays a success message through toast notifications.

## Use of useEffect

The `useEffect` hook is utilized to fetch the course data from the `data.json` file when the component mounts. It ensures that the `courses` state is populated with data from the JSON file only once.
