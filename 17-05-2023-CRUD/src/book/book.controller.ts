import {Request, Response} from 'express'
import { BookService } from './book.service'

class BookController {

    async create(req: Request, res: Response) {
        const book = await new BookService().create(req.body)
        return res.json(book)
    }

    async find(req: Request, res: Response) {
        const books = await new BookService().find()

        return res.json(books)   
    }
    async findById(req: Request, res: Response) {
        const book = await new BookService().findById(req.params.id)

        return res.json(book)   
    }
    async findByTitle(req: Request, res: Response) {
        const books = await new BookService().findByTitle(req.params.title)

        return res.json(books)   
    }
    
    async update(req: Request, res: Response) {
        const books = await new BookService().update(req.params.id, req.body)

        return res.json(books)   
    }

    async delete(req: Request, res: Response) {
        const books = await new BookService().delete(req.params.id)

        return res.json(books)   
    }
}
export default new BookController()