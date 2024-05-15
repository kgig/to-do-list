# TO DO LIST PROJECT
## Installation

1. Clone the repository:
	```bash
      git clone https://github.com/kgig/to-do-list.git
   ```

2. Install dependencies:
```bash
    npm install
```

3. Run:
```bash
    npm start
```

## API
### GET to-do-list
```bash
    http://localhost:3000/api/v1/dbms/to-do-list
```
#### example 
- To filter by subject: http://localhost:3000/api/v1/dbms/to-do-list?subject=Review
- To filter by owner: http://localhost:3000/api/v1/dbms/to-do-list?owner=James
- To filter by priority: http://localhost:3000/api/v1/dbms/to-do-list?priority=high
- To filter by date range:http://localhost:3000/api/v1/dbms/to-do-list?startDate=01/01/2024&endDate=01/31/2024
- To filter by multiple criteria:http://localhost:3000/api/v1/dbms/to-do-list?owner=James&priority=high&startDate=01/01/2024&endDate=02/01/2024

### GET to-do-list By ID
```bash
    http://localhost:3000/api/v1/dbms/to-do-list/:id
```
** recommend for id uuid (Predict Cyber)
#### example 
- http://localhost:3000/api/v1/dbms/to-do-list/1
- http://localhost:3000/api/v1/dbms/to-do-list/2

### POST to-do-list
```bash
    http://localhost:3000/api/v1/dbms/to-do-list
```

#### example 
``` {
    "subject": "Interview",
    "description": "Interview",
    "owner": "James",
    "startDate": "01/03/2024",
    "endDate": "01/03/2024",
    "status": "IN PROGRESS",
    "priority": "high"
}
```

### PATCH to-do-list By ID
```bash
    http://localhost:3000/api/v1/dbms/to-do-list/:id
```
#### example 
