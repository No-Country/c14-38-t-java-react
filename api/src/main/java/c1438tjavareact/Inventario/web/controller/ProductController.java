package c1438tjavareact.Inventario.web.controller;

import c1438tjavareact.Inventario.model.domain.dto.ProductDto;
import c1438tjavareact.Inventario.web.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


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
    public ResponseEntity<List<ProductDto>> getProducts(@RequestParam(name = "keyword", required = false) String keyword,
                                                        @RequestParam(name = "family_id", required = false) Long familyId,
                                                        @RequestParam(name = "supplier_id", required = false) Long supplierId) {
        Optional<List<ProductDto>> productListOptional = productService.ProductList();

        if (productListOptional.isPresent()) {
            List<ProductDto> productList = productListOptional.get();

            if (keyword != null && !keyword.isEmpty()) {
                // Filtrar la lista de productos por nombre o descripción que contengan la palabra clave
                productList = productList.stream()
                        .filter(product ->
                                product.getName().contains(keyword) ||
                                        product.getDescription().contains(keyword)
                        )
                        .collect(Collectors.toList());
            }

            if (familyId != null) {
                // Filtrar la lista de productos por family_id
                productList = productList.stream()
                        .filter(product -> product.getFamily() != null && product.getFamily().getId().equals(familyId))
                        .collect(Collectors.toList());
            }

            if (supplierId != null) {
                // Filtrar la lista de productos por supplier_id
                productList = productList.stream()
                        .filter(product -> product.getSupplier() != null && product.getSupplier().getId().equals(supplierId))
                        .collect(Collectors.toList());
            }

            if (!productList.isEmpty()) {
                return new ResponseEntity<>(productList, HttpStatus.OK);
            }
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
    @PatchMapping("/update")
    public ResponseEntity<ProductDto> update(@RequestBody ProductDto productDto){

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
        if (currentProduct.isPresent()) {
            // Obtener el producto
            ProductDto productDto = currentProduct.get();

            // Establecer family y supplier en null
            productDto.setFamily(null);
            productDto.setSupplier(null);

            // Actualizar el producto en la base de datos con los campos family_id y supplier_id en null
            productService.update(productDto);

            // Eliminar el producto
            productService.delete(id);
            return new ResponseEntity<>("Se eliminó correctamente",HttpStatus.OK);
        }
            return new ResponseEntity<>("El producto ingresado no existe", HttpStatus.NOT_FOUND);
    }
}

