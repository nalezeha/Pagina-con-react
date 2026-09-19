
function Table({ columnas, datos }) {
  return (
    <div>
      <h2>Usuarios</h2>

      <div className="tabla-card">
        <table>
          {/* Encabezados de la tabla */}
          <thead>
            <tr>
              {columnas.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>

          {/* Filas de datos */}
          <tbody>
            {datos.map((fila, index) => (
              <tr key={index}>
                {columnas.map((col) => (
                  <td key={col.key}>{fila[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
