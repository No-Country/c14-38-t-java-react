package c1438tjavareact.Inventario.web.controller;

import c1438tjavareact.Inventario.model.domain.dto.FamilyDto;
import c1438tjavareact.Inventario.web.service.FamilyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("api/family")
public class FamilyController {

    private final FamilyService service;

    public FamilyController(FamilyService service) {
        this.service = service;
    }

    /**
     * Obtiene una lista de todas las familias.
     *
     * @return ResponseEntity con la lista de FamilyDto si se encuentra, o ResponseEntity con NOT_FOUND si no hay familias.
     */
    @GetMapping
    public ResponseEntity<List<FamilyDto>> findAll() {
        return service.findAll()
                .map(FamilyDto -> new ResponseEntity<>(FamilyDto, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Obtiene una familia por su ID.
     *
     * @param familyId El ID de la familia a buscar.
     * @return ResponseEntity con la FamilyDto encontrada si existe, o ResponseEntity con NOT_FOUND si no se encuentra.
     */
    @GetMapping("/{familyId}")
    public ResponseEntity<FamilyDto> findById(@PathVariable Long familyId) {
        return service.findById(familyId)
                .map(familyDto -> new ResponseEntity<>(familyDto, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Crea una nueva familia.
     * @param familyDto La FamilyDto que se va a crear.
     * @return ResponseEntity con la FamilyDto creada y HttpStatus CREATED si tiene éxito, o ResponseEntity con CONFLICT si hay un error.
     */
    @PostMapping("/create")
    public ResponseEntity<FamilyDto> create(@RequestBody FamilyDto familyDto) {
        // Verifica si el nombre del ítem está duplicado antes de crearlo
        if (service.isItemNameDuplicate(familyDto.getName())) {
            return new ResponseEntity<>(HttpStatus.CONFLICT); // Devuelve un error de conflicto si el nombre está duplicado
        } else {
            return service.create(familyDto)
                    .map(t -> new ResponseEntity<>(t, HttpStatus.CREATED))
                    .orElse(new ResponseEntity<>(HttpStatus.CONFLICT)); // Otra opción si ocurre algún otro error
        }
    }

    /**
     * Actualiza una familia existente.
     *
     * @param familyDto La FamilyDto que se va a actualizar.
     * @return ResponseEntity con la FamilyDto actualizada si tiene éxito, o ResponseEntity con NOT_FOUND si no se encuentra.
     */
    @PatchMapping("/update")
    public ResponseEntity<FamilyDto> update(@RequestBody FamilyDto familyDto) {
        return service.update(familyDto)
                .map(t -> new ResponseEntity<>(t, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Elimina una familia por su ID.
     *
     * @param familyId El ID de la familia a eliminar.
     * @return ResponseEntity con TRUE si la eliminación tiene éxito, o FALSE si no se encuentra la familia.
     */
    @DeleteMapping("/delete/{familyId}")
    public ResponseEntity<Boolean> delete(@PathVariable Long familyId) {
        return new ResponseEntity<>(service.delete(familyId), HttpStatus.OK);
    }
}
