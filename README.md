# nodejs-mongo-rest-api-template

## Usage
### Set up MongoDB using Docker
Run a Docker container with the latest MongoDB Docker image:
``` 
docker run -d --name some-mongo -p 27017:27017 mongo:latest
```

Access the MongoDB container  (replace ```sh``` with ```bash``` on Windows) and edit/create new db if necessary (or stick with the default ```test``` db):
```
docker exec -it some-mongo sh
```

Create a new db:
```
use myappdb
```


### Environment variables
Created a ```.env``` file containing the following env variables:
```
DATABASE_URL=mongodb://127.0.0.1:27017/test
```
Replace ```DATABASE_URL``` with your connection string.

### Node.js server
Install Node dependencies by running
```
npm install
```

Start the server by running
```
npm run devStart
```