import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [rates, setRates] = React.useState({})

  React.useEffect(() => {
    fetch('http://cdn.cur.su/api/latest.json')
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates)
        console.log(json.rates);
      })
      .catch((err) => {
        alert('Some error')
      })
  }, [])

  return (
    <div className="App">
      <Block value={0} currency="UAH" onChangeCurrency={(cur) => console.log(cur)} />
      <Block value={0} currency="USD" />
    </div>
  );
}

export default App;