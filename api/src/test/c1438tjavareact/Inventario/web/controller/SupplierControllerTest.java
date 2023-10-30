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

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
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
        SupplierDto supplierDto = new SupplierDto(); // Crea un objeto SupplierDto para la prueba
        Mockito.when(supplierService.create(Mockito.any(SupplierDto.class))).thenReturn(Optional.of(supplierDto));

        Optional<ResponseEntity<SupplierDto>> response = supplierController.create(supplierDto);
        Mockito.verify(supplierService).create(Mockito.any(SupplierDto.class)); // Verifica que se llamó al servicio
        // Realiza aserciones en la respuesta
        assert(response.isPresent());
        assert(response.get().getStatusCode() == HttpStatus.CREATED);
        assert(response.get().getBody() == supplierDto);
    }

    @Test
    public void testUpdateSupplier() {
        Long supplierId = 1L;
        SupplierDto supplierDto = new SupplierDto(); // Crea un objeto SupplierDto para la prueba
        Mockito.when(supplierService.update(supplierDto)).thenReturn(Optional.of(supplierDto));

        Optional<ResponseEntity<SupplierDto>> response = supplierController.update(supplierId, supplierDto);
        Mockito.verify(supplierService).update(Mockito.any(SupplierDto.class)); // Verifica que se llamó al servicio
        // Realiza aserciones en la respuesta
        assert(response.isPresent());
        assert(response.get().getStatusCode() == HttpStatus.ACCEPTED);
        assert(response.get().getBody() == supplierDto);
    }
    @Test
    public void testGetSuppliers() {
        List<SupplierDto> supplierDtoList = List.of(new SupplierDto(), new SupplierDto());
        Mockito.when(supplierService.SupplierList()).thenReturn(Optional.of(supplierDtoList));

        Optional<ResponseEntity<List<SupplierDto>>> response = supplierController.getSuppliers();
        Mockito.verify(supplierService).SupplierList();

        assertTrue(response.isPresent());

        ResponseEntity<List<SupplierDto>> responseEntity = response.get();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(supplierDtoList, responseEntity.getBody());
    }

    @Test
    public void testGetSupplier() {
        Long supplierId = 1L;
        SupplierDto supplierDto = new SupplierDto(); // Crea un objeto SupplierDto para la prueba
        Mockito.when(supplierService.SupplierId(supplierId)).thenReturn(Optional.of(supplierDto));

        Optional<ResponseEntity<SupplierDto>> response = supplierController.getSupplier(supplierId);
        Mockito.verify(supplierService).SupplierId(supplierId); // Verifica que se llamó al servicio

        assertTrue(response.isPresent());

        ResponseEntity<SupplierDto> responseEntity = response.get();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(supplierDto, responseEntity.getBody());
    }

}