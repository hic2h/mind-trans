## Entities

# Driver Entity 
 - id: string
 - email: string
 - pwd: string
 - profile: DriverProfile
 - missions: Mission[]
 - status: available | onMission | onHold

# Car Entity
 - id: string
 - category: CarCategory // enum []
 - options: CatOptions // {maxPlaces}
 - costPerHour: number
 - status: available | onMission | onHold

# Mission
 - id: string
 - missionPeriod: DateTimePeriod // {startDate, startTime, endDate, endTime}
 - driver: string // driver id
 - car: string // car id


## Product specifications
### Manage Drivers
1. CRUD Driver
2. CRUD Driver profile
3. Set a driver to onHold

### Manage Cars
1. CRUD Car
2. Set a car to onHold

### Manage Missions
1. CRUD Mission

