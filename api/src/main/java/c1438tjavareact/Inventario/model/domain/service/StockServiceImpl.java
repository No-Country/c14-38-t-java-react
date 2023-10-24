package c1438tjavareact.Inventario.model.domain.service;
import c1438tjavareact.Inventario.model.domain.dto.StockDto;
import c1438tjavareact.Inventario.model.persistence.mapper.StockMapper;
import c1438tjavareact.Inventario.model.persistence.repository.StockRepository;
import c1438tjavareact.Inventario.web.service.StockService;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class StockServiceImpl implements StockService {

    private StockRepository repository;
    private final StockMapper mapper;

    public StockServiceImpl(StockRepository repository, StockMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public Optional<List<StockDto>> findAll() {
        return Optional.of(mapper.toStocks(repository.findAll()));
    }

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

    @Override
    public Optional<StockDto> findById(Long id) {
        return repository.findById(id).map(mapper::toStock);
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


