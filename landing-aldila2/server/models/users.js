const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   nombre: { type: String, required: true },
   apellido: { type: String, required: true },
   telefono: { type: Number },
   correo: { type: String, required: true, unique: true },
   contraseña: { type: String, required: true },
});

module.exports = mongoose.model('users', UserSchema);
