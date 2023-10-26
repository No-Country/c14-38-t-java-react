package c1438tjavareact.Inventario.web.service;

import c1438tjavareact.Inventario.model.domain.dto.InputDto;
import java.util.List;
import java.util.Optional;

public interface InputService {
    Optional<List<InputDto>> findAll();
    Optional <InputDto> findById(Long id);
    Optional<InputDto> create(InputDto inputDto);
    Optional<InputDto> update(InputDto familyDto);
    boolean delete(Long id);
}
