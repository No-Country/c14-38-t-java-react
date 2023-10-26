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
    public Optional<ResponseEntity<SupplierDto>> create(@RequestBody SupplierDto supplier){
        return supplierService.create(supplier).map(t-> new ResponseEntity<>(t, HttpStatus.CREATED));
    }

    @PatchMapping("/{id}")
    public Optional<ResponseEntity<SupplierDto>> update(@PathVariable Long id, @RequestBody SupplierDto supplier){
        return Optional.of(supplierService.update(supplier).map(t-> new ResponseEntity<>(t, HttpStatus.ACCEPTED))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND)));
    }

    @GetMapping("/all")
    public Optional<ResponseEntity<List<SupplierDto>>> getSuppliers(){
        return  supplierService.SupplierList().map(t-> new ResponseEntity<>(t, HttpStatus.OK));
    }

    @GetMapping("/{id}")
    public Optional<ResponseEntity<SupplierDto>> getSupplier(@PathVariable Long id){
        return Optional.of(supplierService.SupplierId(id).map(t-> new ResponseEntity<>(t, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND)));
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
