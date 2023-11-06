import {Body, Controller, Get, Post} from "@nestjs/common";
import {BooksService} from "./books.service";
import {Book} from "./book.entity";

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get()
    getAllBooks(): Book[] {
        return this.booksService.getAllBooks();
    }

    @Post()
    createBook(@Body() book: Book): void {
        this.booksService.createBook(book);
    }
}
