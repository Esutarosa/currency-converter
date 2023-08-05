import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [fromCurrency, setFromCurrency] = React.useState('UAH')
  const [toCurrency, setToCurrency] = React.useState('UAH')
  const [fromPrice, setFromPrice] = React.useState(0)
  const [toPrice, setToPrice] = React.useState(1)

  const [rates, setRates] = React.useState({})

  React.useEffect(() => {
    fetch('http://cdn.cur.su/api/latest.json')
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates)
        onChangeToPrice(1)
      })
      .catch((err) => {
        alert('Some error ')
      })
  }, [])

  const onChangeFromPrice = (value) => {
    const price = value / rates[fromCurrency]
    const result = price * rates[toCurrency]
    setToPrice(result)
    setFromPrice(value)
  }

  const onChangeToPrice = (value) => {
    const result = (rates[fromCurrency] / rates[toCurrency]) * value
    setFromPrice(result)
    setToPrice(value)
  }

  React.useEffect(() => {
    onChangeFromPrice(fromPrice)
  }, [fromCurrency])

  React.useEffect(() => {
    onChangeToPrice(toPrice)
  }, [toCurrency ])

  return (
    <div className="App">
      <Block 
        value={fromPrice} 
        currency={fromCurrency} 
        onChangeCurrency={onChangeFromCurrency} 
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