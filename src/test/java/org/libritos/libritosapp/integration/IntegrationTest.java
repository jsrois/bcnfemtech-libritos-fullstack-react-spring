package org.libritos.libritosapp.integration;


import org.junit.jupiter.api.Test;
import org.libritos.libritosapp.domain.Book;
import org.libritos.libritosapp.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class IntegrationTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private BookRepository bookRepository;

    @Test
    // Devuelve los libros que existen en la base de datos
    void returnsTheAvailableBooks() throws Exception {

        List<Book> books = List.of(
                new Book(1L, "Moby Dick", "Herman Melville", "Aventuras", 1851),
                new Book(2L, "Una habitación propia", "Virginia Woolf", "Ensayo",1929)
        );

        bookRepository.saveAll(books);

        mockMvc.perform(get("/books"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]", hasSize(2)))
                .andExpect(jsonPath("$[0].title", equalTo("Moby Dick")))
                .andExpect(jsonPath("$[0].author", equalTo("Herman Mellville")))
                .andExpect(jsonPath("$[0].genre", equalTo("Aventuras")))
                .andExpect(jsonPath("$[0].year", equalTo(1851)))
                .andExpect(jsonPath("$[1].title", equalTo("Una habitación propia")))
                .andExpect(jsonPath("$[1].author", equalTo("Virginia Woolf")))
                .andExpect(jsonPath("$[1].genre", equalTo("Ensayo")))
                .andExpect(jsonPath("$[1].year", equalTo(1929)));
    }
}
