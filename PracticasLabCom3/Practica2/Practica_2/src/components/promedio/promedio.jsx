import React from 'react';

const AverageIncome  = ({ netIncomes }) => {
  const totalIncome = netIncomes.reduce((acc, current) => acc + current.income, 0);
  const AverageIncome  = totalIncome / netIncomes.length;

  return (
    <p>Promedio de las 3 Marcas: ${AverageIncome .toFixed(2)}</p>
  );
};

export default AverageIncome ;