import React from 'react';
import Table from './components/Table/Table';
import AverageIncome from './components/promedio/promedio';


function App() {
  const netIncomes = [{brand: "McDonalds", income: 1291283}, {brand: "Burger King", income: 1927361}, {brand: "KFC", income: 1098463}];
  return (
    <div>
      <h1>Tabla de Marcas e Ingresos</h1>
      <h4>Ingresos netos de las marcas</h4>
      <Table netIncomes={netIncomes} />
      <AverageIncome  netIncomes={netIncomes} />
    </div>
  )
}

export default App
