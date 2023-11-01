package c1438tjavareact.Inventario.web.service;

import c1438tjavareact.Inventario.model.domain.dto.ProductDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Interfaz para servicios relacionados con productos.
 */

@Service
public interface ProductService {

    /**
     * Crea un nuevo producto con los datos proporcionados.
     * @param productDto Los datos del producto a crear.
     * @return Un Optional que contiene el producto creado, si se ha creado con éxito.
     */

    Optional<ProductDto> create (ProductDto productDto);

    /**
     * Actualiza un producto con los datos proporcionados.
     * @param productDto Los datos del producto con las actualizaciones.
     * @return Un Optional que contiene el producto actualizado, si se ha actualizado con éxito.
     */

    Optional<ProductDto> update (ProductDto productDto);
    /**
     * Obtiene una lista de todos los productos.
     * @return Un Optional que contiene una lista de productos, si existen productos.
     */

    Optional<List<ProductDto>> ProductList();

    /**
     * Obtiene un producto por su identificador único.
     * @param id El identificador único del producto.
     * @return Un Optional que contiene el producto encontrado, si existe un producto con el ID proporcionado.
     */
    Optional<ProductDto> ProductId(Long id);

    /**
     * Elimina un producto por su identificador único.
     * @param id El identificador único del producto a eliminar.
     */
    void delete(Long id);
    /**
     * Comprueba si ya existe un producto con el nombre proporcionado.
     * @param name El nombre del producto a verificar.
     * @return True si ya existe un producto con el nombre proporcionado, false en caso contrario.
     */
    boolean isItemNameDuplicate(String name);
}
