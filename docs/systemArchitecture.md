# System Architecture
## The layout
The app will have 3 layouts depending in user roles
1. Admin user Layout: this will contain a navbar, sidebar and the content section
2. Driver Layout: this will only contain a navbar and the content section
3. Visitor Layout: a landing page with different navbar

the layout can be build in a separate angular Library and exposes the 3 layouts


## Core business
it should be in a separate library folder, for each feature contains
1. All the entities 
2. The Facades
3. The data services
4. The data store


from the ng app, call service.getDrivers() from the dataServicesLibrary
driver service  will call an httpService (wrapper of HttpClient)
the folders structure should be like:
- drivers
- - entities
- - api
- - store