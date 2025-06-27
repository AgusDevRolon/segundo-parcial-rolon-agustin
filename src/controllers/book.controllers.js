import book from "../models/book.model";

const getListarLibros = async (req, res) =>{
    try{
        const books = await book.findAll();
        res.status(200).json(books);
    } catch (error){
        console.error('Error al listar los libros.', error);
        res.status(500).json({message:'Error interno del servidor al listar libros',error: error.message});
    }
};

const getLibrosPorId = async (req, res) =>{
    try{
        const {id} = req.params;
        const book = await book.findByPk(id);
        if (!book){
            return res.status(404).json({message:`Libro con ID ${id} no encontrado`, error: error.message});
        }
        res.status(200).json(book);
    } catch (error){
        console.error(`Error al buscar libro por ID ${req.params.id}:`, error);
        res.status(500).json({message:'Error interno del servidor al buscar libro por ID', error: error.message});
    }
}