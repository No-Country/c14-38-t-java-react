package c1438tjavareact.Inventario.web.controller;

import c1438tjavareact.Inventario.model.domain.dto.ProductDto;
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
    public Optional<ResponseEntity<ProductDto>> create(@RequestBody ProductDto productDto){
        return productService.create(productDto).map(t-> new ResponseEntity<>(t, HttpStatus.CREATED));
    }

    @GetMapping("/{id}")
    public Optional<ResponseEntity<ProductDto>> getProduct(@PathVariable Long id){
        return Optional.of(productService.ProductId(id).map(t -> new ResponseEntity<>(t, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND)));
    }

    @GetMapping("/all")
    public Optional<ResponseEntity<List<ProductDto>>> getProducts(){
        return productService.ProductList().map(t-> new ResponseEntity<>(t, HttpStatus.OK));
    }

    @PatchMapping("/{id}")
    public Optional<ResponseEntity<ProductDto>> update(@PathVariable Long id, @RequestBody ProductDto productDto){
        return Optional.of(productService.update(productDto).map(t-> new ResponseEntity<>(t, HttpStatus.ACCEPTED))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND)));
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

