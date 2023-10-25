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
    public ResponseEntity<Optional<SupplierDto>> create(@RequestBody SupplierDto supplier){
        return new ResponseEntity<>(supplierService.create(supplier), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Optional<SupplierDto>> update(@PathVariable Long id, @RequestBody SupplierDto supplier){
        Optional<SupplierDto> currentSupplier = supplierService.SupplierId(id);
        if(currentSupplier.isPresent()){
            return new ResponseEntity<>(supplierService.update(supplier), HttpStatus.ACCEPTED);
        }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/all")
    public ResponseEntity<Optional<List<SupplierDto>>> getSuppliers(){
        return new ResponseEntity<>(supplierService.SupplierList(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<SupplierDto>> getSupplier(@PathVariable Long id){
        return new ResponseEntity<>(supplierService.SupplierId(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws Exception {
        Optional<SupplierDto> currentSupplier = supplierService.SupplierId(id);
        if(currentSupplier.isPresent()){
            supplierService.delete(id);
            return new ResponseEntity<>("Se elimino correctamente", HttpStatus.OK);
        }
            return new ResponseEntity<>("El proveedor ingresado no existe", HttpStatus.NOT_FOUND);
    }
}
