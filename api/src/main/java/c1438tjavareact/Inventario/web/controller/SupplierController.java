package c1438tjavareact.Inventario.web.controller;

import c1438tjavareact.Inventario.web.service.SupplierService;
import c1438tjavareact.Inventario.model.persistence.entity.Supplier;
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
    public ResponseEntity<Supplier> create(@RequestBody Supplier supplier){
        return new ResponseEntity<>(supplierService.create(supplier), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Supplier> update(@PathVariable Long id, @RequestBody Supplier supplier){
        return new ResponseEntity<>(supplierService.update(supplier), HttpStatus.ACCEPTED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Supplier>> getSuppliers(){
        return new ResponseEntity<>(supplierService.SupplierList(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Supplier>> getSupplier(@PathVariable Long id){
        return new ResponseEntity<>(supplierService.SupplierId(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        supplierService.delete(id);
        try{
            return new ResponseEntity<>("Se elimino correctamente", HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.OK);
        }
    }

}
