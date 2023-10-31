package c1438tjavareact.Inventario.model.domain.service;
import c1438tjavareact.Inventario.model.domain.dto.InputDto;
import c1438tjavareact.Inventario.model.persistence.mapper.InputMapper;
import c1438tjavareact.Inventario.model.persistence.repository.InputRepository;
import c1438tjavareact.Inventario.web.service.InputService;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

/**
 * Implementación del servicio de gestión de registros de entrada (inputs).
 */
@Service
public class InputServiceImpl implements InputService {
    private InputRepository repository;
    private final InputMapper mapper;

    /**
     * Constructor de la clase InputServiceImpl.
     * @param repository El repositorio de registros de entrada.
     * @param mapper El mapeador para convertir entre InputDto y entidades Input.
     */

    public InputServiceImpl(InputRepository repository, InputMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    /**
     * Obtiene todos los registros de entrada disponibles.
     * @return Una lista de InputDto en un contenedor Optional.
     */
    @Override
    public Optional<List<InputDto>> findAll() {
        return Optional.of(mapper.toInputs(repository.findAll()));
    }

    /**
     * Crea un nuevo registro de entrada basado en el InputDto proporcionado.
     * @param inputDto El InputDto que se va a crear.
     * @return Un InputDto que representa el registro de entrada creado en un contenedor Optional.
     */
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

    /**
     * Actualiza un registro de entrada existente con la información proporcionada en el InputDto.
     * @param inputDto El InputDto que se utilizará para actualizar el registro de entrada.
     * @return Un InputDto que representa el registro de entrada actualizado en un contenedor Optional.
     */
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

    /**
     * Encuentra un registro de entrada por su identificador único (ID).
     * @param id El ID del registro de entrada que se desea encontrar.
     * @return Un InputDto que representa el registro de entrada encontrado en un contenedor Optional.
     */

    @Override
    public Optional<InputDto> findById(Long id) {
        return repository.findById(id).map(mapper::toInput);
    }


    /**
     * Elimina un registro de entrada por su identificador único (ID).
     * @param id El ID del registro de entrada que se desea eliminar.
     * @return `true` si se elimina con éxito, `false` si no se encuentra el registro.
     */
    @Override
    public boolean delete(Long id) {
        if (repository.existsById(id)){
            repository.deleteById(id);
            return true;
        }
        return false;
    }

}


