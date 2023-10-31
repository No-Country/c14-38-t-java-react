package c1438tjavareact.Inventario.web.controller;

import c1438tjavareact.Inventario.model.domain.dto.FamilyDto;
import c1438tjavareact.Inventario.model.domain.dto.StockDto;
import c1438tjavareact.Inventario.web.service.StockService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * Controlador para gestionar las operaciones relacionadas con el stock.
 */

@RestController
@RequestMapping("api/stock")
public class StockController {
    private final StockService service;

    /**
     * Constructor de la clase StockController.
     * @param service El servicio de gestión de stock.
     */

    public StockController(StockService service) {
        this.service = service;
    }

    /**
     * Obtiene todos los elementos de stock.
     * @return ResponseEntity con la lista de elementos de stock o NOT_FOUND si no hay elementos.
     */
    @GetMapping
    public ResponseEntity<List<StockDto>>findAll(){
        return service.findAll()
                .map(StockDto -> new ResponseEntity<>(StockDto, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Obtiene un elemento de stock por su ID.
     * @param stockId El ID del elemento de stock que se desea obtener.
     * @return ResponseEntity con el elemento de stock correspondiente o NOT_FOUND si no se encuentra.
     */
    @GetMapping("/{stockId}")
    public ResponseEntity<StockDto> findById(@PathVariable Long stockId){
        return service.findById(stockId)
                .map(stockDto -> new ResponseEntity<>(stockDto, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Crea un nuevo elemento de stock.
     * @param stockDto Los datos del elemento de stock que se va a crear.
     * @return ResponseEntity con el elemento de stock creado o CONFLICT si ya existe.
     */
    @PostMapping("/create")
    public ResponseEntity<StockDto> create(@RequestBody StockDto stockDto){
        return service.create(stockDto)
                .map(t-> new ResponseEntity<>(t, HttpStatus.CREATED))
                .orElse(new ResponseEntity<>(HttpStatus.CONFLICT));    }

    /**
     * Actualiza un elemento de stock existente.
     * @param stockDto Los datos actualizados del elemento de stock.
     * @return ResponseEntity con el elemento de stock actualizado o NOT_FOUND si no se encuentra.
     */

    @PatchMapping("/update")
    public ResponseEntity<StockDto> update(@RequestBody StockDto stockDto){
        return service.update(stockDto)
                .map(t -> new ResponseEntity<>(t, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Elimina un elemento de stock por su ID.
     * @param stockId El ID del elemento de stock que se desea eliminar.
     * @return ResponseEntity con un valor booleano que indica si se eliminó con éxito o no.
     */

    @DeleteMapping("/delete/{stockId}")
    public ResponseEntity<Boolean> delete(@PathVariable Long stockId){
        return new ResponseEntity<Boolean>(service.delete(stockId), HttpStatus.OK);
    }
}

