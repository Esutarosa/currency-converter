import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [fromCurrency, setFromCurrency] = React.useState('UAH')
  const [toCurrency, setToCurrency] = React.useState('UAH')
  const [fromPrice, setFromPrice] = React.useState(0)
  const [toPrice, setToPrice] = React.useState(0)

  const [rates, setRates] = React.useState({})

  React.useEffect(() => {
    fetch('http://cdn.cur.su/api/latest.json')
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates)
        console.log(json.rates);
      })
      .catch((err) => {
        alert('Some error ')
      })
  }, [])

  const onChangeFromProice = (value) => {
    setFromPrice(value)
  }

  const onChangeToProice = (value) => {
    setToPrice(value)
  }

  return (
    <div className="App">
      <Block 
        value={fromPrice} 
        currency={fromCurrency} 
        onChangeCurrency={setFromCurrency} 
        onChangeValue={onChangeFromProice} 
      />

      <Block 
        value={toPrice} 
        currency={toCurrency} 
        onChangeCurrency={setToCurrency} 
        onChangeValue={onChangeToProice} 
      />
    </div>
  );
}

export default App;