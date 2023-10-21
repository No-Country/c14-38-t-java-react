package c1438tjavareact.Inventario.model.domain.service;

import c1438tjavareact.Inventario.model.domain.dto.FamilyDto;
import c1438tjavareact.Inventario.model.persistence.repository.FamilyRepository;
import c1438tjavareact.Inventario.model.persistence.mapper.FamilyMapper;
import c1438tjavareact.Inventario.web.service.FamilyService;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class FamilyServiceImpl implements FamilyService {

    private FamilyRepository repository;
    private final FamilyMapper mapper;

    public FamilyServiceImpl(FamilyRepository repository, FamilyMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public Optional<List<FamilyDto>> findAll() {
        return Optional.of(mapper.toFamilys(repository.findAll()));
    }

    @Override
    public Optional<FamilyDto> create(FamilyDto familyDto)
    {
        return Optional.of(
                mapper.toFamily(
                        repository.save(
                                mapper.toFamilydto(familyDto)
                        )
                ));
    }

    @Override
    public Optional<FamilyDto> update(FamilyDto familyDto) {
        if (repository.existsById(familyDto.getId())){
            return Optional.of(
                    mapper.toFamily(
                            repository.save(
                                    mapper.toFamilydto(familyDto)
                            )
                    ));
        }
        return Optional.of(new FamilyDto());
    }

    @Override
    public Optional<FamilyDto> findById(Long id) {
        return repository.findById(id).map(mapper::toFamily);
    }

    @Override
    public boolean delete(Long id) {
        if (repository.existsById(id)){
            repository.deleteById(id);
            return true;
        }
        return false;
    }
}
