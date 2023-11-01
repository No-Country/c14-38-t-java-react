package c1438tjavareact.Inventario.web.controller;

import c1438tjavareact.Inventario.model.domain.dto.InputDto;
import c1438tjavareact.Inventario.web.service.InputService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controlador para gestionar las operaciones relacionadas con los registros de entrada.
 */
@RestController
@RequestMapping("api/input")
public class InputController {

    private final InputService service;

    public InputController(InputService service) {
        this.service = service;
    }
    /**
     * Obtiene todos los registros de entrada.
     * @return ResponseEntity con la lista de registros de entrada o NOT_FOUND si no hay registros.
     */
    @GetMapping
    public ResponseEntity<List<InputDto>> findAll(){
        return service.findAll()
                .map(InputDto -> new ResponseEntity<>(InputDto, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Obtiene un registro de entrada por su ID.
     * @param inputId El ID del registro de entrada que se desea obtener.
     * @return ResponseEntity con el registro de entrada correspondiente o NOT_FOUND si no se encuentra.
     */
    @GetMapping("/{inputId}")
    public ResponseEntity<InputDto> findById(@PathVariable Long inputId){
        return service.findById(inputId)
                .map(inputDto -> new ResponseEntity<>(inputDto, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Crea un nuevo registro de entrada.
     * @param inputDto Los datos del registro de entrada que se va a crear.
     * @return ResponseEntity con el registro de entrada creado o CONFLICT si ya existe.
     */
    @PostMapping("/create")
    public ResponseEntity<InputDto> create(@RequestBody InputDto inputDto){
        return service.create(inputDto)
                .map(t-> new ResponseEntity<>(t, HttpStatus.CREATED))
                .orElse(new ResponseEntity<>(HttpStatus.CONFLICT));    }

    /**
     * Actualiza un registro de entrada existente.
     * @param inputDto Los datos actualizados del registro de entrada.
     * @return ResponseEntity con el registro de entrada actualizado o NOT_FOUND si no se encuentra.
     */

    @PatchMapping("/update")
    public ResponseEntity<InputDto> update(@RequestBody InputDto inputDto){
        return service.update(inputDto)
                .map(t -> new ResponseEntity<>(t, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    /**
     * Elimina un registro de entrada por su ID.
     * @param inputId El ID del registro de entrada que se desea eliminar.
     * @return ResponseEntity con un valor booleano que indica si se eliminó con éxito o no.
     */

    @DeleteMapping("/delete/{inputId}")
    public ResponseEntity<Boolean> delete(@PathVariable Long inputId){
        return new ResponseEntity<Boolean>(service.delete(inputId), HttpStatus.OK);
    }
}


