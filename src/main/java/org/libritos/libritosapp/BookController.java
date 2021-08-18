package org.libritos.libritosapp;

import org.libritos.libritosapp.domain.Book;
import org.libritos.libritosapp.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/books")
    public ResponseEntity<String> addBook(@RequestBody Book book) {
        bookRepository.save(book);
        return new ResponseEntity<>("Created",HttpStatus.OK);
    }
}
