import express from 'express';
import{
    getLibrosPorId,
    getListarLibros,
} from '../controllers/book.controllers.js'

const router = express.router ();

router.get('/', getListarLibros);
router.get('/:id', getLibrosPorId);

export default router;