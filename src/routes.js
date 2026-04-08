import express from 'express';
import { createPlayer, deletePlayer, getAllPlayers, updatePlayer } from './controllers/userController.js';

const router = express.Router();

router.post('/register', createPlayer)
router.get('/all', getAllPlayers)
router.get('/getplayer', updatePlayer)
router.delete('/delete', deletePlayer)
router.patch('/update', updatePlayer)

export default router;
