import logo from './logo.svg';
import './App.css';
import useFetch from './hooks/useFetch';

function App() {
  const {data,loading,error} = useFetch("/api/hotel")

  console.log(data)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
