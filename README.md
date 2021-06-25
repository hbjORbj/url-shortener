# URL Shortener Service

> This web app shortens the provided URL to a much shorter yet unique URL.

## Quick Start

```bash
# Go into /server folder
cd server

# Install dependencies
npm install

# Run the server
npm start

# Open another terminal tab

# Go into /client folder
cd client

# Install dependencies
npm install

# Run the client
npm start
```

### Environment Variables

Required environment variables for `server`: `PORT, MONGO_URI, CLIENT_URL`

Required environment variables for `client`: `REACT_APP_API_URL`

> `REACT_APP_` is a required prefix for environment variables in .env to be recognised in `client`. You do not need to install dotenv in client because it is part of `react-scripts` package.