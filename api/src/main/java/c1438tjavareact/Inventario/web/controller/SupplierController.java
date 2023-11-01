package c1438tjavareact.Inventario.web.controller;

import c1438tjavareact.Inventario.model.domain.dto.SupplierDto;
import c1438tjavareact.Inventario.web.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Controlador para gestionar las operaciones relacionadas con los proveedores.
 */

@RestController
@RequestMapping("/api/supplier")
public class SupplierController {

    @Autowired
    private SupplierService supplierService;

    /**
     * Crea un nuevo proveedor.
     * @param supplierDto Los datos del proveedor que se va a crear.
     * @return ResponseEntity con el proveedor creado o CONFLICT si ya existe.
     */

    @PostMapping
    public ResponseEntity<SupplierDto> create(@RequestBody SupplierDto supplierDto){
        if(supplierService.isItemNameDuplicate(supplierDto.getName())){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
            return supplierService.create(supplierDto).map(t-> new ResponseEntity<>(t, HttpStatus.CREATED))
                .orElse(new ResponseEntity<>(HttpStatus.CONFLICT));
    }

    /**
     * Actualiza un proveedor existente.
     * @param id          El ID del proveedor que se va a actualizar.
     * @param supplierDto Los datos actualizados del proveedor.
     * @return ResponseEntity con el proveedor actualizado o NOT_FOUND si no se encuentra.
     */

    @PatchMapping("/{id}")
    public ResponseEntity<SupplierDto> update(@PathVariable Long id, @RequestBody SupplierDto supplierDto){
        return supplierService.update(supplierDto).map(t-> new ResponseEntity<>(t, HttpStatus.ACCEPTED))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Obtiene todos los proveedores.
     * @return ResponseEntity con la lista de proveedores o NOT_FOUND si no hay proveedores.
     */

    @GetMapping("/all")
    public ResponseEntity<List<SupplierDto>> getSuppliers(){
        Optional<List<SupplierDto>> supplierListOptional = supplierService.SupplierList();

        if(supplierListOptional.isPresent()){
            List<SupplierDto> supplierList = supplierListOptional.get();
            return new ResponseEntity<>(supplierList, HttpStatus.OK);
        }
            return ResponseEntity.notFound().build();
    }

    /**
     * Obtiene un proveedor por su ID.
     * @param id El ID del proveedor que se desea obtener.
     * @return ResponseEntity con el proveedor correspondiente o NOT_FOUND si no se encuentra.
     */

    @GetMapping("/{id}")
    public ResponseEntity<SupplierDto> getSupplier(@PathVariable Long id){
        return supplierService.SupplierId(id).map(t-> new ResponseEntity<>(t, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Elimina un proveedor por su ID.
     * @param id El ID del proveedor que se desea eliminar.
     * @return ResponseEntity con un mensaje indicando si se eliminó con éxito o no.
     * @throws Exception Si ocurre una excepción durante la eliminación.
     */

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws Exception {
        Optional<SupplierDto> currentSupplier = supplierService.SupplierId(id);
        if(currentSupplier.isPresent()){
            supplierService.delete(id);
            return new ResponseEntity<>("Se eliminó correctamente", HttpStatus.OK);
        }
            return new ResponseEntity<>("El proveedor ingresado no existe", HttpStatus.NOT_FOUND);
    }
}
