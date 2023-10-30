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
import java.util.List;
import java.util.Optional;
import static org.junit.Assert.assertTrue;
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

        // Crear un objeto FamilyDto
        FamilyDto familyDto = new FamilyDto();
        familyDto.setId(1L);
        familyDto.setName("Family 1");

        // Crear un objeto SupplierDto
        SupplierDto supplierDto = new SupplierDto();
        supplierDto.setId(1L);
        supplierDto.setName("Supplier 1");

        productDto.setFamily(familyDto); // Asigna directamente el FamilyDto
        productDto.setSupplier(supplierDto); // Asigna directamente el SupplierDto

        // Configura el servicio para simular una actualización exitosa
        when(productService.create(productDto)).thenReturn(Optional.of(productDto));

        Optional<ResponseEntity<ProductDto>> response = productController.create(productDto);

        assertTrue(response.isPresent());

        ResponseEntity<ProductDto> responseEntity = response.get();

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

        Optional<ResponseEntity<ProductDto>> response = productController.getProduct(productId);

        assertTrue(response.isPresent());
        assertEquals(HttpStatus.OK, response.get().getStatusCode());
        assertEquals(productDto, response.get().getBody());
    }

    @Test
    public void testGetAllProducts() {
        List<ProductDto> productDtoList = createProductList();
        when(productService.ProductList()).thenReturn(Optional.of(productDtoList));

        Optional<ResponseEntity<List<ProductDto>>> response = productController.getProducts();

        // Verificar si el Optional no está vacío
        assertTrue(response.isPresent());

        // Verificar el código de estado
        assertEquals(HttpStatus.OK, response.get().getStatusCode());

        // Verificar la lista de ProductDto
        assertEquals(productDtoList, response.get().getBody());
    }


    // Método de utilidad para crear una lista de productos ficticia
    private List<ProductDto> createProductList() {
        // Crea una lista de productos ficticia con algunos elementos
        // Puedes personalizar esto según tus necesidades de prueba
        return List.of(
                new ProductDto(1L, "Product1", "Description1", 19.99, new FamilyDto(), new SupplierDto()),
                new ProductDto(2L, "Product2", "Description2", 29.99, new FamilyDto(), new SupplierDto())
        );
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

        Optional<ResponseEntity<ProductDto>> response = productController.update(productId, productDto);

        assertTrue(response.isPresent());
        ResponseEntity<ProductDto> responseEntity = response.get();
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
        assertEquals("Se elimino correctamente", response.getBody());

        // Vuelve a configurar el servicio para simular que no se encuentra un producto por el ID
        when(productService.ProductId(productId)).thenReturn(Optional.empty());

        ResponseEntity<String> responseNotFound = productController.delete(productId);

        assertEquals(HttpStatus.NOT_FOUND, responseNotFound.getStatusCode());
        assertEquals("El producto ingresado no existe", responseNotFound.getBody());
    }
}