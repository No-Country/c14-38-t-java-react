package c1438tjavareact.Inventario.web.controller;

import c1438tjavareact.Inventario.model.domain.dto.FamilyDto;
import c1438tjavareact.Inventario.model.domain.dto.ProductDto;
import c1438tjavareact.Inventario.model.domain.dto.SupplierDto;
import c1438tjavareact.Inventario.web.service.ProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ProductControllerTest {

    @InjectMocks
    private ProductController productController;

    @Mock
    private ProductService productService;

    @BeforeEach
    public void init() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCreateProduct() {
        ProductDto productDto = new ProductDto();
        productDto.setId(1L);
        productDto.setName("Product Name");
        productDto.setDescription("Product Description");
        productDto.setPrice(99.99);
        productDto.setStock(100L);

        // Crear un objeto FamilyDto
        FamilyDto familyDto = new FamilyDto();
        familyDto.setId(1L);
        familyDto.setName("Family 1");

        // Crear un objeto SupplierDto
        SupplierDto supplierDto = new SupplierDto();
        supplierDto.setId(1L);
        supplierDto.setName("Supplier 1");

        productDto.setFamily(familyDto);
        productDto.setSupplier(supplierDto);

        // Configura el servicio para simular una actualización exitosa
        when(productService.create(productDto)).thenReturn(Optional.of(productDto)); // Cambio aquí

        ResponseEntity<ProductDto> responseEntity = productController.create(productDto);

        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(productDto, responseEntity.getBody());
    }

    @Test
    public void testGetProductById() {
        long productId = 1L;
        ProductDto productDto = new ProductDto();
        productDto.setId(productId);

        // Configura el servicio para simular la obtención de un producto por su ID
        when(productService.ProductId(productId)).thenReturn(Optional.of(productDto));

        ResponseEntity<ProductDto> responseEntity = productController.getProduct(productId);

        // Corrección: Verificar el código de estado en lugar de la respuesta completa
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(productDto, responseEntity.getBody());
    }
    @Test
    public void testUpdateProduct() {
        long productId = 1L;
        ProductDto productDto = new ProductDto();
        productDto.setId(productId);
        productDto.setName("Updated Product Name");

        // Supongamos que también has actualizado otros campos en productDto

        when(productService.ProductId(productId)).thenReturn(Optional.of(productDto));
        when(productService.update(productDto)).thenReturn(Optional.of(productDto));

        ResponseEntity<ProductDto> responseEntity = productController.update(productId, productDto);

        assertNotNull(responseEntity);
        assertEquals(HttpStatus.ACCEPTED, responseEntity.getStatusCode());
        assertEquals(productDto, responseEntity.getBody());
    }


    @Test
    public void testDeleteProduct() {
        long productId = 1L;
        ProductDto productDto = new ProductDto();
        productDto.setId(productId);

        // Configura el servicio para simular la obtención de un producto por su ID
        when(productService.ProductId(productId)).thenReturn(Optional.of(productDto));

        // Configura el servicio para simular la eliminación de un producto
        doNothing().when(productService).delete(productId);

        ResponseEntity<String> response = productController.delete(productId);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Se eliminó correctamente", response.getBody());

        // Vuelve a configurar el servicio para simular que no se encuentra un producto por el ID
        when(productService.ProductId(productId)).thenReturn(Optional.empty());

        ResponseEntity<String> responseNotFound = productController.delete(productId);

        assertEquals(HttpStatus.NOT_FOUND, responseNotFound.getStatusCode());
        assertEquals("El producto ingresado no existe", responseNotFound.getBody());
    }

    @Test
    public void testGetAllProducts() {
        // Arrange
        List<ProductDto> productDtoList = createProductList();
        when(productService.ProductList()).thenReturn(Optional.of(productDtoList));

        // Act
        ResponseEntity<List<ProductDto>> responseEntity = productController.getProducts(null, null, null);

        // Assert
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(productDtoList, responseEntity.getBody());
    }

    // Método de utilidad para crear una lista de productos ficticia
    private List<ProductDto> createProductList() {
        List<ProductDto> productList = new ArrayList<>();
        productList.add(createProduct(1L, "Product1", "Description1", 19.99, 15000L, 1L, 1L));
        productList.add(createProduct(2L, "Product2", "Description2", 29.99, 56000L, 2L, 2L));
        return productList;
    }

    // Método de utilidad para crear un objeto ProductDto
    private ProductDto createProduct(Long id, String name, String description, double price, long stock, long familyId, long supplierid) {
        ProductDto product = new ProductDto();
        product.setId(id);
        product.setName(name);
        product.setDescription(description);
        product.setPrice(price);
        product.setStock(stock);
        FamilyDto family = new FamilyDto();
        family.setId(id);
        product.setFamily(family);
        SupplierDto supplier = new SupplierDto();
        supplier.setId(id);
        product.setSupplier(supplier);
        return product;
    }

    @Test
    public void testGetProductsWithKeywordFilter() {
        // Arrange
        List<ProductDto> productDtoList = createProductList();
        when(productService.ProductList()).thenReturn(Optional.of(productDtoList));

        // Act: Filtra por la palabra clave "Product1"
        ResponseEntity<List<ProductDto>> responseEntity = productController.getProducts("Product1", null, null);

        // Assert: Debe devolver solo los productos que contienen "Product1" en su nombre o descripción
        List<ProductDto> filteredList = productDtoList.stream()
                .filter(product -> product.getName().contains("Product1") || product.getDescription().contains("Product1"))
                .toList();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(filteredList, responseEntity.getBody());
    }

    @Test
    public void testGetProductsWithFamilyFilter() {
        // Arrange
        List<ProductDto> productDtoList = createProductList();
        when(productService.ProductList()).thenReturn(Optional.of(productDtoList));

        // Act: Filtra por family_id igual a 1
        ResponseEntity<List<ProductDto>> responseEntity = productController.getProducts(null, 1L, null);

        // Assert: Debe devolver solo los productos con family_id igual a 1
        List<ProductDto> filteredList = productDtoList.stream()
                .filter(product -> product.getFamily() != null && product.getFamily().getId().equals(1L))
                .toList();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(filteredList, responseEntity.getBody());
    }

    @Test
    public void testGetProductsWithSupplierFilter() {
        // Arrange
        List<ProductDto> productDtoList = createProductList();
        when(productService.ProductList()).thenReturn(Optional.of(productDtoList));

        // Act: Filtra por supplier_id igual a 2
        ResponseEntity<List<ProductDto>> responseEntity = productController.getProducts(null, null, 2L);

        // Assert: Debe devolver solo los productos con supplier_id igual a 2
        List<ProductDto> filteredList = productDtoList.stream()
                .filter(product -> product.getSupplier() != null && product.getSupplier().getId().equals(2L))
                .toList();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(filteredList, responseEntity.getBody());
    }


}