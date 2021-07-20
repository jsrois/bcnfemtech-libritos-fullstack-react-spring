package org.libritos.libritosapp;
import org.libritos.libritosapp.domain.Book;
import org.libritos.libritosapp.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookController {

    private BookRepository bookRepository;

    @Autowired
    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }



    @GetMapping("/books")
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }


}
