import Player from '../models/Player.js'
import crypto from 'node:crypto'

export const createPlayer = async (req, res) => {
    try{
        const playerToCreate = {
            id: crypto.randomUUID(),
            name: req.body.name,
            age: req.body.age,
            shirt_number: req.body.shirt_number
        } 
        
        const player = await Player.create(playerToCreate);
        
        res.status(200).json(player)
    } catch(err) {
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const deletePlayer = async (req, res) => {
    try{
        const rows = await Player.destroy({where: {id: req.body.id}})

        rows != 0 ? res.status(200).json({message: 'Player deleted'}) : res.status(404).json({message: 'Player Not Found'})
    } catch (err){
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const getAllPlayers = async (req, res) => {

    const players = await Player.findAll();

    players.length != 0 ? res.status(200).json(players) : res.status(200).json({message: "No players registered!"})
}

export const getPlayer = async (req, res) => {

    const player = await Player.findByPk(req.body.id)
    res.status(200).json(player)

}

export const updatePlayer = async (req, res) => {
     
    const {id, ...update} = req.body;
    
    await Player.update(update, {where: {id: id}})
    const player = await Player.findByPk(id)

    res.status(200).json(player)
}