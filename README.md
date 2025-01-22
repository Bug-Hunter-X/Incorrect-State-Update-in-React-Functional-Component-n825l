# Incorrect State Update in React Functional Component

This repository demonstrates a common error in React functional components when updating state within a loop. The issue stems from the asynchronous nature of `setState` and the use of a stale closure. 

## Problem
The `incrementCount` function attempts to increment the count by 5 within a loop. However, because `setState` is asynchronous, the value of `count` used inside the loop is not updated immediately.  This leads to the count not reaching 5 as expected.

## Solution
The correct approach involves using the functional update form of `setState`. This ensures that the latest state value is used for the update.

## How to Run
1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install`
4. Run `npm start`

Open your browser to `http://localhost:3000` to view the app. 