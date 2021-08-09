import {RequestHandler} from 'express'


export const getVideos: RequestHandler = (req, res) => {
        
    res.json("Getting Videos");

}
export const getVideo: RequestHandler = (req, res) => {
        
    res.json("Getting Video");

}
export const createVideos: RequestHandler = (req, res) => {
        
    res.json("createVideos");

}
export const deleteVideo: RequestHandler = (req, res) => {
        
    res.json("deleteVideo");

}
export const updateVideos: RequestHandler = (req, res) => {
        
    res.json("updateVideos");

}