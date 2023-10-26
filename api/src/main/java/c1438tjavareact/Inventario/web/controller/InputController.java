package c1438tjavareact.Inventario.web.controller;

import c1438tjavareact.Inventario.model.domain.dto.InputDto;
import c1438tjavareact.Inventario.web.service.InputService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/input")
public class InputController {

    private final InputService service;

    public InputController(InputService service) {
        this.service = service;
    }


    @GetMapping
    public ResponseEntity<List<InputDto>> findAll(){
        return service.findAll()
                .map(InputDto -> new ResponseEntity<>(InputDto, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @GetMapping("/{inputId}")
    public ResponseEntity<InputDto> findById(@PathVariable Long inputId){
        return service.findById(inputId)
                .map(inputDto -> new ResponseEntity<>(inputDto, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PostMapping("/create")
    public ResponseEntity<InputDto> create(@RequestBody InputDto inputDto){
        return service.create(inputDto)
                .map(t-> new ResponseEntity<>(t, HttpStatus.CREATED))
                .orElse(new ResponseEntity<>(HttpStatus.CONFLICT));    }

    @PatchMapping("/update")
    public ResponseEntity<InputDto> update(@RequestBody InputDto inputDto){
        return service.update(inputDto)
                .map(t -> new ResponseEntity<>(t, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @DeleteMapping("/delete/{inputId}")
    public ResponseEntity<Boolean> delete(@PathVariable Long inputId){
        return new ResponseEntity<Boolean>(service.delete(inputId), HttpStatus.OK);
    }
}


