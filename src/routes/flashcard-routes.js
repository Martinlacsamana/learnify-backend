import express from 'express'

import flashcardController from '../controllers/flashcard-controller.js'

const router = express.Router()

// Routes
router.get('/', flashcardController.ping);

export default router