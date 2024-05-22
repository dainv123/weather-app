## Features
Displays weather information

## Project Structure
The project is organized as follows:
- src/: Contains the application source code.
    - components/: Houses reusable UI components.
        - error-message/: Component for displaying error messages.
        - loading-spinner/: Component for displaying a loading spinner.
        - search-input/: Component for search functionality.
        - weather-component/: Renders weather data.
        - weather-info/: Displays weather information.
    - models/: Contains data models.
        - unit.ts: Definitions for units used in the application.
        - weather-data.ts: Schema for weather data.
    - services/: Contains services for application logic.
        - weather-service.ts: Service for fetching weather data.
    - tests/: Contains unit tests for application components.
    - Additional Files:
        - message.ts: File likely containing messaging constants or translations.
        - config.ts: Configuration file for the application.
        ...


## Getting started
```bash
## proceed with yarn

# 1. Install dependencies. Make sure yarn is installed: https://yarnpkg.com/lang/en/docs/install
yarn

# 2. Serve with hot reload at localhost:8080
yarn serve

# 3. Build for production with minification
yarn build
```

![export](https://i.imgur.com/xEpTyGo.png)