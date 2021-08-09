import {RequestHandler} from 'express'
import Video from './video'

export const getVideos: RequestHandler = async (req, res) => {
    const listVideo = await Video.find();
    res.json(listVideo);

}
export const getVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findById(req.params.id);

    if(videoFound == null){
        return res.status(204).json();
    }


    return res.json(videoFound);
}
export const createVideos: RequestHandler = async (req, res) => {
    const findVideo = await Video.findOne({url: req.body.url});

    if(findVideo){

        return res.status(301).json("This URL already exist");

    }
    
    const video = new Video(req.body);
    
    const saveVideo = await video.save();
    console.log(video);


    res.json(saveVideo);
  
}
export const deleteVideo: RequestHandler = async (req, res) => {
        
    const videoFound = await Video.findByIdAndDelete(req.params.id);

    if(!videoFound){
        return res.status(204).json();
    }


    return res.json(videoFound);

}
export const updateVideos: RequestHandler = async (req, res) => {
        const videoUpdate = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true }); //El New: true es para traer actualizado
    res.json(videoUpdate);

}