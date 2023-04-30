import logo from './logo.svg';
import './App.css';
import useFetch from './hooks/useFetch';
import FlightSearch from './Flight Search/FlightSearch';

function App() {
  const {data,loading,error} = useFetch("/api/hotel")

  console.log(data)
  return (
    <div className="App">
      <FlightSearch/>
    </div>
  );
}

export default App;
