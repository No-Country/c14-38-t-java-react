package c1438tjavareact.Inventario.web.controller;

import c1438tjavareact.Inventario.model.domain.dto.SupplierDto;
import c1438tjavareact.Inventario.web.service.SupplierService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;
import java.util.Optional;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;
@ExtendWith(MockitoExtension.class)
public class SupplierControllerTest {

    private MockMvc mockMvc;

    @InjectMocks
    private SupplierController supplierController;

    @Mock
    private SupplierService supplierService;

    @BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders.standaloneSetup(supplierController).build();
    }

    @Test
    public void testCreateSupplier() {
        // Crea un objeto SupplierDto para la prueba
        SupplierDto supplierDto = new SupplierDto();

        // Crea un ResponseEntity con el objeto supplierDto
        ResponseEntity<SupplierDto> responseEntity = ResponseEntity.ok(supplierDto);

        // Configura el servicio para simular una creación exitosa con el objeto supplierDto
        Mockito.when(supplierService.create(Mockito.eq(supplierDto))).thenReturn(Optional.of(supplierDto));

        // Llama al método del controlador y obtén la respuesta
        ResponseEntity<SupplierDto> response = supplierController.create(supplierDto);

        // Verifica que la respuesta no esté vacía y que el código de estado sea HttpStatus.CREATED
        assertNotNull(response);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());

        // Verifica que el cuerpo de la respuesta sea el mismo objeto supplierDto
        assertEquals(supplierDto, response.getBody());
    }

    @Test
    public void testUpdateSupplier() {
        long supplierId = 1L;
        SupplierDto supplierDto = new SupplierDto();
        supplierDto.setId(supplierId);
        supplierDto.setName("Updated Supplier Name");

        when(supplierService.update(supplierDto)).thenReturn(Optional.of(supplierDto));

        ResponseEntity<SupplierDto> responseEntity = supplierController.update(supplierId, supplierDto);

        assertEquals(HttpStatus.ACCEPTED, responseEntity.getStatusCode());
        assertEquals(supplierDto, responseEntity.getBody());
    }

    @Test
    public void testGetSuppliers() {
        List<SupplierDto> supplierDtoList = List.of(new SupplierDto(), new SupplierDto());

        // Configura el comportamiento del servicio para devolver la lista
        when(supplierService.SupplierList()).thenReturn(Optional.of(supplierDtoList));

        // Llama al método del controlador que deseas probar
        ResponseEntity<List<SupplierDto>> responseEntity = supplierController.getSuppliers();

        // Verifica que el servicio fue llamado
        Mockito.verify(supplierService).SupplierList();

        // Realiza aserciones en la respuesta
        assertNotNull(responseEntity);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(supplierDtoList, responseEntity.getBody());
    }






    @Test
    public void testGetSupplier() {
        Long supplierId = 1L;
        SupplierDto supplierDto = new SupplierDto(); // Crea un objeto SupplierDto para la prueba

        // Configura el comportamiento del servicio
        when(supplierService.SupplierId(supplierId)).thenReturn(Optional.of(supplierDto));

        // Llama al método del controlador que deseas probar
        ResponseEntity<SupplierDto> response = supplierController.getSupplier(supplierId);

        // Verifica que el servicio fue llamado
        Mockito.verify(supplierService).SupplierId(supplierId);

        // Realiza aserciones en la respuesta
        assertNotNull(response);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(supplierDto, response.getBody());
    }



}