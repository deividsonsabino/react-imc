import { useState } from 'react'
import './App.scss'

function App() {
  const [imc, setImc] = useState(0);
  const [imcStatus, setImcStatus] = useState("");

  function calcImc(width: number, height: number): void {
    const imcValue = Number((width / (height * height)).toFixed(2))
    console.log(imc)
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
      setImc(imcValue);
      console.log(imcStatus)
    }
  }

  return (
    <>
      <h1 >Calculadora de IMC</h1>
      <div className="card">
        <span>Informe seu peso (kg)</span>
        <input type="text" />
        <span>Informe sua altura (metro e cm)</span>
        <input type="text" />
        <p>{imcStatus}</p>
        <button onClick={() => calcImc(70, 1.70)}>CALCULAR</button>
      </div>
    </>
  )
}

export default App
