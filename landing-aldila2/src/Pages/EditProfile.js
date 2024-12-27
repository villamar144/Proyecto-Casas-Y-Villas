import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/Editprofile.css';



const EditProfile = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    contraseña: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) throw new Error("No se encontró el ID del usuario");

        const response = await axios.get(`http://localhost:5000/api/user/profile/${userId}`);
        setFormData({
          nombre: response.data.nombre,
          apellido: response.data.apellido,
          correo: response.data.correo,
          telefono: response.data.telefono,
        });
      } catch (error) {
        console.error("Error al cargar datos del usuario:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!formData.nombre || !formData.correo) {
        alert("Por favor completa todos los campos obligatorios.");
        return;
    }




    try {
        const userId = localStorage.getItem("userId");

        // Remueve la contraseña del cuerpo si está vacía
        const payload = { ...formData };
        if (!payload.contraseña) delete payload.contraseña;

        await axios.put(`http://localhost:5000/api/user/edit/${userId}`, payload);

        alert("Datos actualizados con éxito");
        navigate("/Usuario");
    } catch (error) {
        console.error("Error al actualizar datos:", error);
        alert("Ocurrió un error al actualizar los datos.");
    }
};


  return (
    <div>
      <h2>Editar Perfil</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Correo:
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Teléfono:
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default EditProfile;