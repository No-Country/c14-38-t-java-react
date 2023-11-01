package c1438tjavareact.Inventario.web.controller;

import c1438tjavareact.Inventario.model.domain.dto.ProductDto;
import c1438tjavareact.Inventario.web.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


/**
 * Controlador para gestionar las operaciones relacionadas con los productos.
 */

@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    /*return productService.create(productDto)
        .map(t-> new ResponseEntity<>(t, HttpStatus.CREATED));*/

    /**
     * Crea un nuevo producto.
     * @param productDto Los datos del producto que se va a crear.
     * @return ResponseEntity con el producto creado o CONFLICT si ya existe.
     */
    @PostMapping
    public ResponseEntity<ProductDto> create(@RequestBody ProductDto productDto){
        if(productService.isItemNameDuplicate(productDto.getName())){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
            return productService.create(productDto).map(t-> new ResponseEntity<>(t, HttpStatus.CREATED))
                    .orElse(new ResponseEntity<>(HttpStatus.CONFLICT));
    }

    /**
     * Obtiene un producto por su ID.
     * @param id El ID del producto que se desea obtener.
     * @return ResponseEntity con el producto correspondiente o NOT_FOUND si no se encuentra.
     */

    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> getProduct(@PathVariable Long id){
        return productService.ProductId(id).map(productDto -> new ResponseEntity<>(productDto, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


    /**
     * Obtiene todos los productos.
     * @return ResponseEntity con la lista de productos o NOT_FOUND si no hay productos.
     */

    @GetMapping("/all")
    public ResponseEntity<List<ProductDto>> getProducts() {
        Optional<List<ProductDto>> productListOptional = productService.ProductList();

        if (productListOptional.isPresent()) {
            List<ProductDto> productList = productListOptional.get();
            return new ResponseEntity<>(productList, HttpStatus.OK);
        }
            return ResponseEntity.notFound().build();
    }

    /*@GetMapping("/all")
    public Optional<ResponseEntity<List<ProductDto>>> getProducts(){
        return productService.ProductList().map(t-> new ResponseEntity<>(t, HttpStatus.OK));
    }*/

    /**
     * Actualiza un producto existente.
     * @param id        El ID del producto que se desea actualizar.
     * @param productDto Los datos actualizados del producto.
     * @return ResponseEntity con el producto actualizado o NOT_FOUND si no se encuentra.
     */

    @PatchMapping("/{id}")
    public ResponseEntity<ProductDto> update(@PathVariable Long id, @RequestBody ProductDto productDto){
        return productService.update(productDto).map(t-> new ResponseEntity<>(t, HttpStatus.ACCEPTED))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Elimina un producto por su ID.
     * @param id El ID del producto que se desea eliminar.
     * @return ResponseEntity con un mensaje que indica si se eliminó con éxito o no.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        Optional<ProductDto> currentProduct = productService.ProductId(id);
        if(currentProduct.isPresent()){
            productService.delete(id);
            return new ResponseEntity<>("Se eliminó correctamente",HttpStatus.OK);
        }
            return new ResponseEntity<>("El producto ingresado no existe", HttpStatus.NOT_FOUND);
    }
}

