import BookModel from './book.schema'

export class BookService {

    async create(book: any) {
        const createdBook = await BookModel.create(book)

        return createdBook
    }

    async find() {
        const findedBooks = await BookModel.find()

        return findedBooks
    }

    async findById(id: any) {
        const findedBook = await BookModel.findById(id)

        return findedBook
    }

    async findByTitle(title: any) {
        const findedBook = await BookModel.findOne({
            title: title.toString()
        })
        return findedBook
    }

    async update(id: any, book: any) {
        const updatedBook = await BookModel.findByIdAndUpdate(id, {
            title: book.title,
            author: book.author
        }, {new: true})

        return updatedBook
   }

    async delete(id: any) {
        await BookModel.findByIdAndDelete(id)

        return "Book deleted!"
   }
}