package c1438tjavareact.Inventario.web.controller;

import c1438tjavareact.Inventario.model.domain.dto.SupplierDto;
import c1438tjavareact.Inventario.web.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/supplier")
public class SupplierController {

    @Autowired
    private SupplierService supplierService;

    @PostMapping
    public ResponseEntity<SupplierDto> create(@RequestBody SupplierDto supplierDto){
        if(supplierService.isItemNameDuplicate(supplierDto.getName())){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
            return supplierService.create(supplierDto).map(t-> new ResponseEntity<>(t, HttpStatus.CREATED))
                .orElse(new ResponseEntity<>(HttpStatus.CONFLICT));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<SupplierDto> update(@PathVariable Long id, @RequestBody SupplierDto supplierDto){
        return supplierService.update(supplierDto).map(t-> new ResponseEntity<>(t, HttpStatus.ACCEPTED))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/all")
    public ResponseEntity<List<SupplierDto>> getSuppliers(){
        Optional<List<SupplierDto>> supplierListOptional = supplierService.SupplierList();

        if(supplierListOptional.isPresent()){
            List<SupplierDto> supplierList = supplierListOptional.get();
            return new ResponseEntity<>(supplierList, HttpStatus.OK);
        }
            return ResponseEntity.notFound().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<SupplierDto> getSupplier(@PathVariable Long id){
        return supplierService.SupplierId(id).map(t-> new ResponseEntity<>(t, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

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
