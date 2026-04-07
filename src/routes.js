import express from 'express';
import { createPlayer, deletePlayer, getAllPlayers } from './controllers/userController.js';

const router = express.Router();

router.post('/register', createPlayer)
router.get('/all', getAllPlayers)
router.delete('/delete', deletePlayer)

export default router;
