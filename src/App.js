import './App.css';
import WeatherCard from './components/WeatherCard/Component';

function App() {
const data = async()=>{
  const apiRes= await fetch("https://api.weatherapi.com/v1/current.json?key=5fd1839cd7cb419d8d563349221606&q=London&aqi=no");

  const resJSON = await apiRes.json();
  return resJSON;
}
data().then(res=>{
console.log(res.location.name);
console.log(res.location.country);
console.log(res.current.temp_c);
console.log(res.current.condition.text);
console.log(res.current.condition.icon);
});

  return (
    <div className="App"> 
      <WeatherCard temp={-5} condition="clear" city="Imo" country= "Nigeria"/>
      <WeatherCard temp={20} condition="cloudy" city="Abia" country= "Nigeria"/>
      <WeatherCard temp={40} condition="raining" city="Rivers" country= "Nigeria"/>
    </div>
  );
}

export default App;
