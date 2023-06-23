import SerieModel from "../models/serie.model.js";

async function createPersonalSerie(req, res) {
  try {
    if (!req.body.nombre || !req.body.estado || !req.body.capítulos || !req.body.minutos) {
      return res.status(400).send({ success: false, error: "Falta algún campo como nombre, estado, capítulos, minutos" });
    }
    await SerieModel.create({
      userId: req.params.userId,
      nombre: req.body.nombre,
      portada: req.body.portada,
      estado: req.body.estado,
      capítulos: req.body.capítulos,
      minutos: req.body.minutos,
    });

    res.status(201).send({ success: true });
  } catch (err) {
    res.status(500).send({ success: false, error: err });
  }
}


async function getSerieByUser(req, res) {
    
}

async function deletePersonalSerieById(req,res){
    
}


async function editPersonalSerie(req,res){
    const userId = req.params.useId;
    const serieId = req.params.serieId;
    const series = await SerieModel.find().populate("userId"&&"serieId");
    const matchSeries= series.filter(serie => serie.userId === userId&&serie.serieId === serieId);
    
    try{
    if(matchMensajes.length>0){
        matchSeries.estado=req.body.estado;
        await matchSeries.save();
        return res.status(200).send({matchSeries});
    }else{
        return res.status(404).send({error : "No hay mensajes"});
    }
}catch(error){
    return res.status(500).send({error});
}

}

    

export { createPersonalSerie ,getSerieByUser,deletePersonalSerieById,editPersonalSerie};
