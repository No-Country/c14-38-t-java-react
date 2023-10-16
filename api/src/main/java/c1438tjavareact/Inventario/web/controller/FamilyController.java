package c1438tjavareact.Inventario.web.controller;

import c1438tjavareact.Inventario.model.dto.FamilyDto;
import c1438tjavareact.Inventario.model.persistence.mapper.FamilyMapper;
import c1438tjavareact.Inventario.web.service.FamilyService;
import c1438tjavareact.Inventario.model.persistence.entity.Family;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/Family")
public class FamilyController {

    @Autowired
    private FamilyService familyService;

    @Autowired
    private FamilyMapper familyMapper;

    @PostMapping
    public ResponseEntity<FamilyDto> create(@Valid @RequestBody FamilyDto familyDto) {
        Family family = familyMapper.toFamily(familyDto);
        Family createdFamily = familyService.create(family);
        FamilyDto createdFamilyDto = familyMapper.toFamilyDto(createdFamily);
        return new ResponseEntity<>(createdFamilyDto, HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    public ResponseEntity<FamilyDto> update(@PathVariable Long id, @RequestBody FamilyDto familyDto) {
        familyDto.setId(id);
        Family family = familyMapper.toFamily(familyDto);
        Family updatedFamily = familyService.update(family);
        FamilyDto updatedFamilyDto = familyMapper.toFamilyDto(updatedFamily);
        return new ResponseEntity<>(updatedFamilyDto, HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public FamilyDto getFamilyById(@PathVariable Long id) {
        Family family = familyService.getFamilyById(id);
        FamilyDto familyDto = familyMapper.toFamilyDto(family);
        return familyDto;
    }

    @GetMapping("/all")
    public List<FamilyDto> getAllFamilies() {
        List<Family> families = familyService.getAllFamilies();
        List<FamilyDto> familyDtos = new ArrayList<>();
        for (Family family : families) {
            FamilyDto familyDto = familyMapper.toFamilyDto(family);
            familyDtos.add(familyDto);
        }
        return familyDtos;
    }
    @DeleteMapping("{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        familyService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}