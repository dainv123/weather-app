## Features
Displays weather information

## Note
Please run application with node version 16.*, ex: 16.13.0
and edit 

## Project Structure
The project is structured as follows:
- src - Contains the application source code
- components - Houses reusable UI components
    - error-message - Component for displaying error messages
    - loading-spinner - Component for displaying a loading spinner
    - search-input - Component for search functionality
    - weather-component - Renders weather data
    - weather-info - Displays weather information
- models - Contains data models
    - unit.ts - Likely contains unit definitions
    - weather-data.ts - Likely contains the weather data schema
- services - Contains services for application logic
    - weather-service.ts - Fetches weather data
- tests - Contains unit tests for the application components
- message.ts
- config.ts
- ...


## Getting started
```bash
## proceed with yarn

# 3. Install dependencies. Make sure yarn is installed: https://yarnpkg.com/lang/en/docs/install
yarn

# 4. Serve with hot reload at localhost:8080
yarn serve

# 5. Build for production with minification
yarn build
```


```bash
## proceed with npm

# 3. Install dependencies. Make sure npm is installed: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
npm install

# 4. Serve with hot reload at localhost:8080
npm run serve

# 5. Build for production with minification
npm run build
```
