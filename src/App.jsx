import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import Table from "./components/Table";
import ProductCard from "./components/ProductCard";

const LINKS = [
  { label: "Inicio", href: "#" },
  { label: "Usuarios", href: "#" },
  { label: "Productos", href: "#" },
];

const COLUMNAS = [
  { key: "id", label: "ID" },
  { key: "nombre", label: "Nombre" },
  { key: "correo", label: "Correo" },
  { key: "rol", label: "Rol" },
];

const USUARIOS = [
  {
    id: 1,
    nombre: "Santiago Sánchez",
    correo: "santi@sena.edu.co",
    rol: "Aprendiz",
  },
  {
    id: 2,
    nombre: "Laura García",
    correo: "laura@sena.edu.co",
    rol: "Instructora",
  },
  {
    id: 3,
    nombre: "Andrés Montoya",
    correo: "andres@sena.edu.co",
    rol: "Instructor",
  },
  {
    id: 4,
    nombre: "Camila Torres",
    correo: "camila@sena.edu.co",
    rol: "Aprendiz",
  },
];

const PRODUCTOS = [
  {
    nombre: "Laptop",
    descripcion: "Intel i5, 8GB RAM, 256GB SSD",
    precio: "$1.800.000",
  },
  {
    nombre: "Mouse",
    descripcion: "Inalámbrico, ergonómico",
    precio: "$45.000",
  },
  {
    nombre: "Teclado",
    descripcion: "Mecánico retroiluminado",
    precio: "$120.000",
  },
  {
    nombre: "Monitor",
    descripcion: '24", Full HD, 75Hz',
    precio: "$650.000",
  },
];

function App() {
  return (
    <div>
      {/* 1. Barra de navegación */}
      <NavBar links={LINKS} />

      <div className="contenido">
        <div>
          {/* 2. Formulario de login / registro */}
          <section>
            <h2>Formulario</h2>
            <LoginForm
              modo="login"
              onSubmit={(datos) => console.log("Datos enviados:", datos)}
            />
          </section>
        </div>
        <div>
          {/* 3. Tabla de datos */}
          <section>
            <Table columnas={COLUMNAS} datos={USUARIOS} />
          </section>

          {/* 4. Tarjetas de productos */}
          <section style={{ marginTop: "40px" }}>
            <h2>Productos</h2>
            <div className="tarjetas">
              {PRODUCTOS.map((producto) => (
                <ProductCard
                  key={producto.nombre}
                  emoji={producto.emoji}
                  nombre={producto.nombre}
                  descripcion={producto.descripcion}
                  precio={producto.precio}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
