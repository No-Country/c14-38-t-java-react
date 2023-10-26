package c1438tjavareact.Inventario.web.controller;

import c1438tjavareact.Inventario.model.domain.dto.FamilyDto;
import c1438tjavareact.Inventario.model.domain.dto.ProductDto;
import c1438tjavareact.Inventario.model.domain.dto.SupplierDto;
import c1438tjavareact.Inventario.model.persistence.entity.Family;
import c1438tjavareact.Inventario.model.persistence.entity.Supplier;
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
        // Crear un objeto FamilyDto
        FamilyDto familyDto = new FamilyDto();
        familyDto.setId(1L);
        familyDto.setName("Family 1");

        // Crear un objeto SupplierDto
        SupplierDto supplierDto = new SupplierDto();
        supplierDto.setId(1L);
        supplierDto.setName("Supplier 1");

        ProductDto productDto = new ProductDto();
        productDto.setId(1L);
        productDto.setName("Product Name");
        productDto.setDescription("Product Description");
        productDto.setPrice(99.99);
        productDto.setFamily(familyDto); // Asigna directamente el FamilyDto
        productDto.setSupplier(supplierDto); // Asigna directamente el SupplierDto

        when(productService.create(productDto)).thenReturn(Optional.of(productDto));

        ResponseEntity<Optional<ProductDto>> response = productController.create(productDto);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(productDto, response.getBody().get());
    }


    @Test
    public void testGetProductById() {
        long productId = 1L;
        ProductDto productDto = new ProductDto();
        productDto.setId(productId);

        // Configura el servicio para simular la obtención de un producto por su ID
        when(productService.ProductId(productId)).thenReturn(Optional.of(productDto));

        ResponseEntity<Optional<ProductDto>> response = productController.getProduct(productId);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(productDto, response.getBody().get());
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

        ResponseEntity<Optional<ProductDto>> response = productController.update(productId, productDto);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(productDto, response.getBody().get());
    }

    @Test
    public void testDeleteProduct() {
        long productId = 1L;

        // Configura el servicio para lanzar una excepción en lugar de devolver void
        doNothing().when(productService).delete(productId);
        ResponseEntity<String> response = productController.delete(productId);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Se eliminó correctamente", response.getBody());
    }

    @Test
    public void testGetAllProducts() {
        List<ProductDto> productDtoList = createProductList();
        when(productService.ProductList()).thenReturn(Optional.of(productDtoList));

        ResponseEntity<Optional<List<ProductDto>>> response = productController.getProducts();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(productDtoList, response.getBody().get());
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



}
