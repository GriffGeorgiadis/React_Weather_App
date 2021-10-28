import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import fetch from 'fetch';
import openWeather from './api-keys';
import './App.css';


let App = () => {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState();

  function getWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeather.apiKey}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      if (res.cod === '404') {
        alert("Please Enter a valid city")
      } else {
        setWeather(res);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const Title = styled.h1`
    color: white;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    padding-top 100px;
    padding-bottom: 10px;
    font-size: 50px;
  `
  const Button = styled.button`
    margin:0 auto;
    display:block;
    background-color: red;
    border: none;
    color: white;
    padding: 10px 27px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    border-radius: 5px;
  `
  const CityInput = styled.input`
    background-color: rgb(3, 0, 51);
    width: 250px;
    margin: 30px 10px 30px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid white;
    color: white;
    font-size: 40px;
    caret-color: transparent;
  `
  const WeatherTile = styled.div`
    color: black;
    background-color: white;
    margin:0 auto;
    display:block;
    width: 500px;
    border-radius: 10px;
    text-align: center;
`
  const WeatherTitle = styled.h1`
    padding-bottom: 15px;
    font-size: 75px;
  `
  const Temp = styled.h2`
    padding-bottom: 15px;
    font-size: 50px;
  `
  const Desc = styled.h2`
    padding-bottom: 15px;
  `

  return (
    <div className="App">
      <Title>My Weather App!</Title>
      <CityInput type="text" value={city} onChange={e => setCity(e.target.value)} autoFocus placeholder="Enter a city"></CityInput>
      <Button onClick={() => getWeather()}>Click me!</Button>
      {weather ?
        <WeatherTile>
          <WeatherTitle>{weather.name}</WeatherTitle>
          <Temp>{Math.round((weather.main.temp - 273.15) * (9/5) + 32)}°F</Temp>
          <img style={{height: 150, width: 150}} src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}></img>
          <Desc>{weather.weather[0].description}</Desc>
        </WeatherTile>
      : <div></div>}
    </div>
  );
}

export default App;
