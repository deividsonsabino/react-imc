import './App.css'

function App() {

  function calcImc(width: number, height: number) {
    console.log((width / (height * height)).toFixed(2))
  }

  calcImc(70, 1.70)

  return (
    <>
      <h1>Calculadora de IMC</h1>
      <div className="card">

      </div>
    </>
  )
}

export default App
