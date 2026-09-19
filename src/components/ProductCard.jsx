
function ProductCard({ nombre, descripcion, precio }) {
  return (
    <div className="tarjeta">
      {/* Imagen / ícono del producto */}
      <div className="tarjeta-img"></div>

      <div className="tarjeta-body">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p className="precio">{precio}</p>
        <button onClick={() => alert(`Agregaste "${nombre}" al carrito 🛒`)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
