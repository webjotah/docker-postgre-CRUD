import Player from '../models/Player.js'
import crypto from 'node:crypto'

export const createPlayer = async (req, res) => {

     const playerToCreate = {
        id: crypto.randomUUID(),
        name: req.body.name,
        age: req.body.age,
        shirt_number: req.body.shirt_number
    } 

    const player = await Player.create(playerToCreate);

    res.status(200).json(player)

}

export const deletePlayer = (req, res) => {

    res.status(200).json({message: 'Sucesso!'})
}

export const getAllPlayers = (req, res) => {

    res.status(200).json({message: 'Sucesso!'})
}