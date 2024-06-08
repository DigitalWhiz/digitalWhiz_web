import mongoose from 'mongoose';

const ConsultaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  query: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Consulta = mongoose.models.Consulta || mongoose.model('Consulta', ConsultaSchema);

export default Consulta;
