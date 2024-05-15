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
    npm install
```

## API
- http://localhost:3000/api/v1/dbms/to-do-list for filter data by condition 

## example 
- To filter by subject: http://localhost:3000/api/v1/dbms/to-do-list?subject=Review
- To filter by owner: http://localhost:3000/api/v1/dbms/to-do-list?owner=James
- To filter by priority: http://localhost:3000/api/v1/dbms/to-do-list?priority=high
- To filter by date range:http://localhost:3000/api/v1/dbms/to-do-list?startDate=01/01/2024&endDate=01/31/2024
- To filter by multiple criteria:http://localhost:3000/api/v1/dbms/to-do-list?owner=James&priority=high&startDate=01/01/2024&endDate=02/01/2024