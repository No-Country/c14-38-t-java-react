package c1438tjavareact.Inventario.model.persistence.mapper;

import c1438tjavareact.Inventario.model.domain.dto.StockDto;
import c1438tjavareact.Inventario.model.persistence.entity.Stock;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

/**
 * Interfaz que define las operaciones de mapeo entre entidades Stock y sus respectivos DTOs.
 */
@Mapper(componentModel = "spring")
public interface StockMapper {


    /**
     * Realiza el mapeo de una entidad Stock a su correspondiente DTO.
     * @param stock La entidad Stock a ser mapeada.
     * @return El DTO correspondiente a la entidad Stock.
     */
    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "quantity", target = "quantity"),
            @Mapping(source = "product", target = "product"),

    })
    StockDto toStock(Stock stock);/**
     * Realiza el mapeo de una lista de entidades Stock a una lista de sus respectivos DTOs.
     * @param stock La lista de entidades Stock a ser mapeada.
     * @return La lista de DTOs correspondientes a las entidades Stock.
     */
    List<StockDto> toStocks(List<Stock> stock);


    /**
     * Realiza la operación inversa de mapeo, convirtiendo un DTO de Stock a su entidad correspondiente.
     * @param "stockDto" El DTO de Stock a ser mapeado inversamente.
     * @return La entidad Stock correspondiente al DTO.
     */
    @InheritInverseConfiguration
    Stock toStockdto(StockDto StockDto);
}
