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
        this.service = service;    }

    @GetMapping
    public ResponseEntity<List<FamilyDto>>findAll(){
        return service.findAll()
                .map(FamilyDto -> new ResponseEntity<>(FamilyDto, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @GetMapping("/{familyId}")
    public ResponseEntity<FamilyDto> findById(@PathVariable Long familyId){
        return service.findById(familyId)
                .map(familyDto -> new ResponseEntity<>(familyDto, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
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
    @PatchMapping("/update")
    public ResponseEntity<FamilyDto> update(@RequestBody FamilyDto familyDto){
        return service.update(familyDto)
                .map(t -> new ResponseEntity<>(t, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @DeleteMapping("/delete/{familyId}")
    public ResponseEntity<Boolean> delete(@PathVariable Long familyId){
        return new ResponseEntity<Boolean>(service.delete(familyId), HttpStatus.OK);
    }
}
