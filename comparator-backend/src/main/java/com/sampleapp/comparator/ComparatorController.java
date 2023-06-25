package com.sampleapp.comparator;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"})
@RestController
public class ComparatorController {

    private final ComparatorService service;

    public ComparatorController(ComparatorService service) {
        this.service = service;
    }

    @GetMapping("/greet")
    public String greet() {
        return "Welcome to the Comparator App.";
    }

    @PostMapping(path = "/compare",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Boolean compare(@RequestBody CompareInput input) {
        return service.compare(input);
    }
}
