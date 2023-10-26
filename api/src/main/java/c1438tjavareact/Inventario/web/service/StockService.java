package c1438tjavareact.Inventario.web.service;
import c1438tjavareact.Inventario.model.domain.dto.StockDto;
import java.util.List;
import java.util.Optional;

public interface StockService {

    Optional<List<StockDto>> findAll();
    Optional <StockDto> findById(Long id);
    Optional<StockDto> create(StockDto familyDto);

    Optional<StockDto> update(StockDto stockDto);
    boolean delete(Long id);
}
