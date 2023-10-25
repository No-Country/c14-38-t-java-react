package c1438tjavareact.Inventario.model.domain.service;
import c1438tjavareact.Inventario.model.domain.dto.InputDto;
import c1438tjavareact.Inventario.model.persistence.mapper.InputMapper;
import c1438tjavareact.Inventario.model.persistence.repository.InputRepository;
import c1438tjavareact.Inventario.web.service.InputService;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class InputServiceImpl implements InputService {
    private InputRepository repository;
    private final InputMapper mapper;

    public InputServiceImpl(InputRepository repository, InputMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public Optional<List<InputDto>> findAll() {
        return Optional.of(mapper.toInputs(repository.findAll()));
    }

    @Override
    public Optional<InputDto> create(InputDto inputDto)
    {
        return Optional.of(
                mapper.toInput(
                        repository.save(
                                mapper.toInputdto(inputDto)
                        )
                ));
    }
    @Override
    public Optional<InputDto> update(InputDto inputDto) {
        if (repository.existsById(inputDto.getId())){
            return Optional.of(
                    mapper.toInput(
                            repository.save(
                                    mapper.toInputdto(inputDto)
                            )
                    ));
        }
        return Optional.of(new InputDto());
    }

    @Override
    public Optional<InputDto> findById(Long id) {
        return repository.findById(id).map(mapper::toInput);
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


