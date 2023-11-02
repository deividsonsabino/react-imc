import { useState } from 'react'
import './App.scss'

function App() {
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [imcStatus, setImcStatus] = useState("");

  function calcImc() {
    const imcValue = Number((width / (height * height)).toFixed(2))
    if (imcValue > 0) {
      if (imcValue <= 18.5) {
        setImcStatus("Magreza")
      } else if (imcValue >= 18.5 && imcValue <= 24.9) {
        setImcStatus("Normal")
      } else if (imcValue >= 25 && imcValue <= 29.9) {
        setImcStatus("Sobrepeso")
      } else if (imcValue >= 30 && imcValue <= 34.9) {
        setImcStatus("Obesidade grau I")
      } else if (imcValue >= 35 && imcValue <= 39.9) {
        setImcStatus("Obesidade grau II")
      } else if (imcValue > 40) {
        setImcStatus("Obesidade grau III")
      } else {
        setImcStatus("Valor informado incorreto")
      }
    }
  }

  return (
    <>
      <h1>Calculadora de IMC</h1>
      <div className="card">
        <span>Informe seu peso (kg)</span>
        <input
          value={width || ''}
          onChange={(e) => setWidth(Number(e.target.value))}
          type="number"
        />
        <span>Informe sua altura (metro e cm)</span>
        <input
          value={parseFloat(height.toFixed(2)) || ''}
          onChange={(e) => setHeight(Number(e.target.value))}
          type="number"
        />
        <p>{imcStatus}</p>
        {width > 0 && height > 0 &&
          <button onClick={calcImc}>CALCULAR</button>
        }
      </div>
    </>
  )
}

export default App




