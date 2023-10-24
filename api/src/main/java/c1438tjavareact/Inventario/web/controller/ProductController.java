package c1438tjavareact.Inventario.web.controller;

import c1438tjavareact.Inventario.model.dto.ProductDto;
import c1438tjavareact.Inventario.web.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    public ResponseEntity<Optional<ProductDto>> create(@RequestBody ProductDto productDto){
        return new ResponseEntity<>(productService.create(productDto), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<ProductDto>> getProduct(@PathVariable Long id){
        Optional<ProductDto> currentProduct = productService.ProductId(id);
        if(currentProduct.isPresent()){
            return new ResponseEntity<>(productService.ProductId(id),HttpStatus.OK);
        }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/all")
    public ResponseEntity<Optional<List<ProductDto>>> getProducts(){
        return new ResponseEntity<>(productService.ProductList(),HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Optional<ProductDto>> update(@PathVariable Long id, @RequestBody ProductDto productDto){
        Optional<ProductDto> currentProduct = productService.ProductId(id);
        if(currentProduct.isPresent()){
            return new ResponseEntity<>(productService.update(productDto),HttpStatus.OK);
        }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        Optional<ProductDto> currentProduct = productService.ProductId(id);
        if(currentProduct.isPresent()){
            productService.delete(id);
            return new ResponseEntity<>("Se elimino correctamente",HttpStatus.OK);
        }
            return new ResponseEntity<>("El producto ingresado no existe", HttpStatus.NOT_FOUND);
    }
}

