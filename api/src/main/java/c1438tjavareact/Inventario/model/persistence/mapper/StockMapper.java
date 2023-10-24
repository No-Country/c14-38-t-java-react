package c1438tjavareact.Inventario.model.persistence.mapper;

import c1438tjavareact.Inventario.model.domain.dto.StockDto;
import c1438tjavareact.Inventario.model.persistence.entity.Stock;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;
@Mapper(componentModel = "spring")
public interface StockMapper {
    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "quantity", target = "quantity"),
            @Mapping(source = "product", target = "product"),

    })
    StockDto toStock(Stock stock);
    List<StockDto> toStocks(List<Stock> stock);
    @InheritInverseConfiguration
    Stock toStockdto(StockDto StockDto);
}
