# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



------------------------------------ Conditions for the use of this application --------------------------------
This application is build in the latest version of react at the time (17.0.2) and with react-router-dom v6 and thus, 
following are the used versions of different libraries etc (taken from package.json file):
{
  "name": "workday-api-exam",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@animated-burgers/burger-rotate": "^1.1.2",
    "@fortawesome/fontawesome-svg-core": "^1.2.36",
    "@fortawesome/free-solid-svg-icons": "^5.15.4",
    "@fortawesome/react-fontawesome": "^0.1.16",
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.24.0",
    "bootstrap": "^5.1.3",
    "bootstrap-icons": "^1.7.2",
    "classnames": "^2.3.1",
    "node-sass": "^7.0.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-modal": "^3.14.4",
    "react-router-dom": "^6.2.1",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}


Additionaly i have used Strapi CMS, and for this application to work, You will need a Strapi v4 server, with 3 tables.
1: user (from: users-permissions) with following columns:
Username - Text 	
Email - Email 	
Provider - Text 
Password - Password 	
ResetPasswordToken - Text 	
ConfirmationToken - Text 	
Confirmed - Boolean 	
Blocked - Boolean 	
Role - Relation with Role (from: users-permissions)	
Applications - Relation with Application (one user can have many applications but one application belongs to one user) 	
SavedIds - JSON 	

2: Jobs with following columns:
All_Supervisory_Orgs - Text 	
Brand_Name - Text 	
Employee_Type - Text 	
ISO2Char - Text 	
Job_Description - Text 	
Job_Description_Summary - Text 	
External_Apply_URL - Text 	
External_Posting_URL - Text 	
Job_Profiles - Text 	
Work_Shift - Text 	
JobFamily - Text 	
JobFamilyGroup - Text 	
JobRequisitionId - Text 	
StartDate - Text 	
TimeType - Text 
Title - Text 	
WorkerSubType - Text 	
Job_Requisition - Text 	
Number_of_Openings_Available - Text 	
RA_ESI_Brand - Text 	
Scheduled_Weekly_Hours - Text 	
LocationCountry - Text 	
Locations - Text 	
EndDate - Text 	
Applications - Relation with Application (one application has one job, but one job can have many applications)

3: Applications with following columns:
User - Relation with User (from: users-permissions)	(one user can have many applications, but one application belongs to one user)
Job - Relation with Jobs 	
ApplyEmail - Email 	
CV - Media 	
StartDate - Date



Furthermore, in order to recieve the data from the Workday API, certain ENV variables are needed that im not allowed to make public. If you want to try it out, write to me and i can ask for access. 

Comands that probably need to be run if you want to try out this project: 
npm i axios






