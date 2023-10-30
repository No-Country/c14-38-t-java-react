package c1438tjavareact.Inventario.web.controller;

import c1438tjavareact.Inventario.model.domain.dto.FamilyDto;
import c1438tjavareact.Inventario.web.service.FamilyService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
@ExtendWith(MockitoExtension.class)
class FamilyControllerTest {

    @Mock
    private FamilyService familyService;
    private FamilyController familyController;

    @BeforeEach
    public void setUp() {
        familyController = new FamilyController(familyService);
    }

    @Test
    public void testCreate() {
        // Define un objeto FamilyDto para la prueba
        FamilyDto familyDto = new FamilyDto();
        familyDto.setName("Familia de Prueba");

        // Configura el servicio para simular un escenario exitoso
        when(familyService.isItemNameDuplicate(familyDto.getName())).thenReturn(false);
        when(familyService.create(familyDto)).thenReturn(Optional.of(familyDto));

        // Configura el servicio para simular un escenario de error
        //when(familyService.isItemNameDuplicate(familyDto.getName())).thenReturn(true);
        //when(familyService.create(familyDto)).thenReturn(Optional.empty());

        // Ejecuta la prueba
        ResponseEntity<FamilyDto> response = familyController.create(familyDto);

        // Verifica el resultado
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(familyDto, response.getBody());
    }
    @Test
    public void testCreateConflict() {
        // Define un objeto FamilyDto para la prueba
        FamilyDto familyDto = new FamilyDto();
        familyDto.setName("Familia Duplicada");

        // Configura el servicio para simular un escenario de error
        //when(familyService.isItemNameDuplicate(familyDto.getName())).thenReturn(false);
        //when(familyService.create(familyDto)).thenReturn(Optional.of(familyDto));

        // Configura el servicio para simular un escenario exitoso
        when(familyService.isItemNameDuplicate(familyDto.getName())).thenReturn(true);

        // Ejecuta la prueba
        ResponseEntity<FamilyDto> response = familyController.create(familyDto);

        // Verifica el resultado
        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
    }

    @Test
    public void testFindAll() {
        // Configura el servicio para simular una lista de familias
        List<FamilyDto> familyList = new ArrayList<>();
        FamilyDto family1 = new FamilyDto();
        family1.setId(1L);
        family1.setName("Familia 1");
        familyList.add(family1);

        when(familyService.findAll()).thenReturn(Optional.of(familyList));

        // Ejecuta la prueba
        ResponseEntity<List<FamilyDto>> response = familyController.findAll();

        // Verifica el resultado
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(familyList, response.getBody());
    }

    @Test
    public void testFindById() {
        Long familyId = 1L;
        FamilyDto familyDto = new FamilyDto();
        familyDto.setId(familyId);
        familyDto.setName("Familia de Prueba");

        when(familyService.findById(familyId)).thenReturn(Optional.of(familyDto));

        // Ejecuta la prueba
        ResponseEntity<FamilyDto> response = familyController.findById(familyId);

        // Verifica el resultado
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(familyDto, response.getBody());
    }

    @Test
    public void testUpdate() {
        // Define un objeto FamilyDto para la prueba
        FamilyDto familyDto = new FamilyDto();
        familyDto.setId(1L);
        familyDto.setName("Familia Actualizada");

        // Configura el servicio para simular una actualización exitosa
        when(familyService.update(familyDto)).thenReturn(Optional.of(familyDto));

        // Configura el servicio para simular una actualización no exitosa
        //when(familyService.update(familyDto)).thenReturn(Optional.empty());


        // Ejecuta la prueba
        ResponseEntity<FamilyDto> response = familyController.update(familyDto);

        // Verifica el resultado
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(familyDto, response.getBody());
    }

    @Test
    public void testDelete() {
        Long familyId = 1L;

        // Configura el servicio para simular una eliminación exitosa
        when(familyService.delete(familyId)).thenReturn(true);

        // Configura el servicio para simular una eliminación no exitosa
        //when(familyService.delete(familyId)).thenReturn(false);

        // Ejecuta la prueba
        ResponseEntity<Boolean> response = familyController.delete(familyId);

        // Verifica el resultado
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(true, response.getBody());
    }
}