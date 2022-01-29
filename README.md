# Interview Scheduler

Interview Scheduler is a single page application (SPA), built using React.
Data is persisted by the API server using a PostgreSQL database. It uses jest and cypress testing.

!['Front-end"](src/docs/scheduler.gif)

*Schedule-interview*

!['scheduling-appointment'](src/docs/scheduling-appointment.png)

*Save-interview*

!['save-appointment'](src/docs/save-appointment.png)

*Fully booked day with interivews*

!['fully booked day'](src/docs/booked-appointments.png)

*Delete interview*

!['delete-appointment'](src/docs/delete-appoitment.png)

## Getting Started

Instal scheduler:

- Clone the repository onto your local device.
- Install dependencies using the `npm install` command.
- Start the web server using the `npm start` command.
   The app will be served at <http://localhost:8080/>
- Go to <http://localhost:8080/> in your browser.

Install scheduler-api from:

- https://github.com/lighthouse-labs/scheduler-api

## Dependencies
- node v12.22.5 (use this version)
- axios
- @testing-library/react-hooks
- react
- react-test-renderer
- sass

- storybook
- babel
- classnames
- eslint-plugin-cypress
- normalize.css

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Running Cypress Visual Testbed

```sh
npm run cypress
```
