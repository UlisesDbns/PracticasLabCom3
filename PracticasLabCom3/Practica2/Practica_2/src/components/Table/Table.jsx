import React from 'react';
import promedio from '../promedio/promedio';

const Table = ({ netIncomes }) => {
  return (
    <table className="tabla">
      <thead>
        <tr>
          <th>Nombre Marca</th>
          <th> |  </th>
          <th>Ingreso Neto</th>
        </tr>
      </thead>
      <tbody>
        {netIncomes.map((ingresos) => (
          <tr key={ingresos.brand}>
            <td>{ingresos.brand}</td>
            <td>  | </td>
            <td>${ingresos.income}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default Table;
