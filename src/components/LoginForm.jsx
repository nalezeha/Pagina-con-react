import { useState } from "react";


function LoginForm({ onSubmit, modo: modoProp = "login" }) {
  // Estado del formulario
  const [modo, setModo]                     = useState(modoProp);
  const [username, setUsername]             = useState("");
  const [email, setEmail]                   = useState("");
  const [password, setPassword]             = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError]                   = useState("");
  const [loading, setLoading]               = useState(false);

  const handleSubmit = () => {
    setError("");

    // Validaciones básicas
    if (!email || !password) {
      setError("El correo y la contraseña son obligatorios.");
      return;
    }
    if (modo === "registro" && password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // Simulamos una carga
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`✅ ${modo === "login" ? "Sesión iniciada" : "Cuenta creada"} con: ${email}`);
      onSubmit && onSubmit({ username, email, password });
    }, 1000);
  };

  return (
    <div className="form-card">
      {/* Tabs para cambiar entre login y registro */}
      <div className="tabs">
        <button
          className={modo === "login" ? "activo" : ""}
          onClick={() => { setModo("login"); setError(""); }}
        >
          Iniciar sesión
        </button>
        <button
          className={modo === "registro" ? "activo" : ""}
          onClick={() => { setModo("registro"); setError(""); }}
        >
          Registrarse
        </button>
      </div>

      <h2>{modo === "login" ? "Bienvenido" : "Crear cuenta"}</h2>

      {/* Campo solo en registro */}
      {modo === "registro" && (
        <div>
          <label>Nombre de usuario</label>
          <input
            type="text"
            placeholder="ej. santi_dev"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      )}

      <label>Correo electrónico</label>
      <input
        type="email"
        placeholder="correo@ejemplo.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Contraseña</label>
      <input
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Campo solo en registro */}
      {modo === "registro" && (
        <div>
          <label>Confirmar contraseña</label>
          <input
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      )}

      {/* Mensaje de error */}
      {error && <p className="error">⚠ {error}</p>}

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Cargando..." : modo === "login" ? "Entrar" : "Registrarse"}
      </button>
    </div>
  );
}

export default LoginForm;
