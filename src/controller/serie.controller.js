import SerieModel from "../models/serie.model.js";

async function createPersonalSerie(req, res) {
    
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
