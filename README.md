# Mindtrans

This is a starting project to build a web and mobile dashboard, using the Ant Design library for the web app and default Ionic theme for the mobile app. The data services and all the business logic are packed in an external library, that is used in both web and mobile apps.

## Development servers
This is an angular workspace with 3 projects
### 1. mindtransWeb (angular web app)
Run `npm start --project mindtransWeb` to run the app. Navigate to `http://localhost:4200/`.

### 2. mindtransMobile (ionic mobile app)
Run `npm start --project mindTransMobile` to run the app. Navigate to `http://localhost:3000/`.

### 3. mt-data-services (angular library)
Run `npm build --project mt-data-services` to build the library.

## Code scaffolding

Run `ng generate component component-name --project PROJECT-NAME` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
