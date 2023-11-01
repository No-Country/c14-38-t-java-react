package c1438tjavareact.Inventario.model.domain.service;
import c1438tjavareact.Inventario.model.domain.dto.StockDto;
import c1438tjavareact.Inventario.model.persistence.mapper.StockMapper;
import c1438tjavareact.Inventario.model.persistence.repository.StockRepository;
import c1438tjavareact.Inventario.web.service.StockService;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


/**
 * Implementación del servicio StockService para gestionar el inventario de productos.
 */
@Service
public class StockServiceImpl implements StockService {

    private StockRepository repository;
    private final StockMapper mapper;

    public StockServiceImpl(StockRepository repository, StockMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    /**
     * Obtiene una lista de todos los registros de inventario.
     * @return Un objeto Optional que contiene la lista de registros de inventario como List de StockDto.
     */

    @Override
    public Optional<List<StockDto>> findAll() {
        return Optional.of(mapper.toStocks(repository.findAll()));
    }

    /**
     * Crea un nuevo registro de inventario en la base de datos.
     * @param stockDto Los datos del registro de inventario que se creará.
     * @return Un objeto Optional que contiene el registro de inventario creado como StockDto, o un Optional vacío si no se pudo crear.
     */
    @Override
    public Optional<StockDto> create(StockDto stockDto)
    {
        return Optional.of(
                mapper.toStock(
                        repository.save(
                                mapper.toStockdto(stockDto)
                        )
                ));
    }

    /**
     * Actualiza un registro de inventario existente en la base de datos.
     * @param stockDto Los datos actualizados del registro de inventario.
     * @return Un objeto Optional que contiene el registro de inventario actualizado como StockDto, o un Optional vacío si el registro no existe.
     */

    @Override
    public Optional<StockDto> update(StockDto stockDto) {
        if (repository.existsById(stockDto.getId())){
            return Optional.of(
                    mapper.toStock(
                            repository.save(
                                    mapper.toStockdto(stockDto)
                            )
                    ));
        }
        return Optional.of(new StockDto());
    }

    /**
     * Obtiene un registro de inventario por su ID.
     * @param id El ID del registro de inventario que se desea obtener.
     * @return Un objeto Optional que contiene el registro de inventario encontrado como StockDto, o un Optional vacío si no se encontró el registro.
     */

    @Override
    public Optional<StockDto> findById(Long id) {
        return repository.findById(id).map(mapper::toStock);
    }

    /**
     * Elimina un registro de inventario por su ID.
     * @param id El ID del registro de inventario que se desea eliminar.
     * @return `true` si se eliminó el registro, `false` si el registro no existe.
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


