import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Usuarioinfo.css'; // Archivo CSS para los estilos

const UsuarioInfo = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userId = localStorage.getItem('userId');
                if (!userId) {
                    throw new Error('No se encontró el ID del usuario en localStorage');
                }

                const response = await fetch(`http://localhost:5000/api/user/profile/${userId}`);
                if (!response.ok) {
                    throw new Error('Error al obtener la información del usuario');
                }

                const data = await response.json();
                setUserInfo(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchUserInfo();
    }, []);

    if (error) {
        return <div className="error-message">Error: {error}</div>;
    }

    if (!userInfo) {
        return <div className="loading-message">Cargando información del usuario...</div>;
    }

    return (
        <div className="usuario-info-container">
            <h1 className="usuario-titulo">Información del Usuario</h1>
            <p className="usuario-detalle"><strong>Nombre:</strong> {userInfo.nombre}</p>
            <p className="usuario-detalle"><strong>Teléfono:</strong> {userInfo.telefono}</p>
            <p className="usuario-detalle"><strong>Correo:</strong> {userInfo.correo}</p>
            <button className="usuario-boton" onClick={() => navigate('/editprofile')}>Editar Perfil</button>
        </div>
    );
};

export default UsuarioInfo;
