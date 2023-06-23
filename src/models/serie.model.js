import mongoose from "mongoose";
const serieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  portada: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  capitulos: {
    type: Number,
    required: true,
    min: 0,
    max: 3000, 
  },
  minutos: {
    type: Number,
    required: true,
    min: 0,
    max: 180, 
  },
  userId:{
    type: String,
    required:true
  }
});
const SerieModel = mongoose.model("Serie", serieSchema);
export default SerieModel;