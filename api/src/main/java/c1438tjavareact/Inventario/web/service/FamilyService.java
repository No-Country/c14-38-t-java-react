package c1438tjavareact.Inventario.web.service;
import c1438tjavareact.Inventario.model.domain.dto.FamilyDto;


import java.util.List;
import java.util.Optional;

public interface FamilyService {
    Optional<List<FamilyDto>> findAll();
    Optional <FamilyDto> findById(Long id);
    Optional<FamilyDto> create(FamilyDto familyDto);

    Optional<FamilyDto> update(FamilyDto familyDto);
    boolean delete(Long id);
}
