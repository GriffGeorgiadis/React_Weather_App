

# React Weather App

This is a simple React weather app using open weather's API


## Run Locally

Clone the project

```bash
  git clone https://github.com/GriffGeorgiadis/React_Weather_App.git
```

Go to the project directory

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## API Reference

#### Get weather by city

```http
  GET http://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_key}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |


Takes a city and returns a JSON object


## Authors

- [@GriffinGeorgiadis](https://github.com/GriffGeorgiadis)