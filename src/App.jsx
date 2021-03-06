
import Search from './components/Search';
import Results from './components/Result';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData] = useState([]);
  const [result,setresult] = useState([]);
  useEffect(()=>{
    setresult(data)
  },[data])
 
  const getData = (prop)=>{
    setData({prop});
  }
 
  console.log(data.prop);


  return (
    <div className="App">
      <Search  getData={getData}></Search>
      <Results result={result}></Results>
    </div>
  );
}

export default App;