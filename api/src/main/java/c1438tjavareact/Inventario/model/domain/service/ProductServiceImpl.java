package c1438tjavareact.Inventario.model.domain.service;

import c1438tjavareact.Inventario.model.domain.dto.ProductDto;
import c1438tjavareact.Inventario.model.persistence.entity.Product;
import c1438tjavareact.Inventario.model.persistence.mapper.ProductMapper;
import c1438tjavareact.Inventario.model.persistence.repository.ProductRepository;
import c1438tjavareact.Inventario.web.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Implementación del servicio ProductService para gestionar productos.
 */
@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private final ProductMapper productMapper;

    /**
     * Crea un nuevo producto en la base de datos.
     * @param productDto Los datos del producto que se creará.
     * @return Un objeto Optional que contiene el producto creado como ProductDto, o un Optional vacío si no se pudo crear.
     */
    @Override
    public Optional<ProductDto> create(ProductDto productDto) {
        return Optional.of(productMapper.toProductDTO(productRepository
                .save(productMapper.toProduct(productDto))));
    }

    /**
     * Actualiza un producto existente en la base de datos.
     * @param productDto Los datos actualizados del producto.
     * @return Un objeto Optional que contiene el producto actualizado como ProductDto, o un Optional vacío si el producto no existe.
     */
    @Override
    public Optional<ProductDto> update(ProductDto productDto) {
        if(productRepository.existsById(productDto.getId())){
            return Optional.of(productMapper.toProductDTO(productRepository
                    .save(productMapper.toProduct(productDto))));
        }
        return Optional.of(new ProductDto());
    }

    /**
     * Obtiene una lista de todos los productos en la base de datos.
     * @return Un objeto Optional que contiene la lista de productos como List de ProductDto.
     */
    @Override
    public Optional<List<ProductDto>> ProductList() {
        return Optional.of(productMapper.toProductsDTO(productRepository.findAll()));
    }

    /**
     * Obtiene un producto por su ID.
     * @param id El ID del producto que se desea obtener.
     * @return Un objeto Optional que contiene el producto encontrado como ProductDto, o un Optional vacío si no se encontró el producto.
     */

    @Override
    public Optional<ProductDto> ProductId(Long id) {
        return productRepository.findById(id).map(productMapper::toProductDTO);
    }
    /**
     * Elimina un producto por su ID.
     * @param id El ID del producto que se desea eliminar.
     */

    @Override
    public void delete(Long id) {
        productRepository.deleteById(id);
    }


    /**
     * Verifica si un nombre de producto está duplicado en la base de datos.
     * @param name El nombre del producto que se verificará.
     * @return `true` si el nombre está duplicado, `false` en caso contrario.
     */
    @Override
    public boolean isItemNameDuplicate(String name) {

            // Implementa la lógica para verificar si el nombre está duplicado en la base de datos
            // Puedes usar el repositorio (repository) para realizar la consulta
            // Retorna true si el nombre está duplicado, false en caso contrario
            Product existingProduct = productRepository.findByName(name);
            return existingProduct != null;
    }
}
