package c1438tjavareact.Inventario.model.persistence.mapper;

import c1438tjavareact.Inventario.model.domain.dto.DispatchDto;
import c1438tjavareact.Inventario.model.persistence.entity.Dispatch;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface DispatchMapper {
    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "dispatchDate", target = "dispatchDate"),
            @Mapping(source = "quantity", target = "quantity"),
            @Mapping(source = "product", target = "product")
    })
    DispatchDto toDispatch(Dispatch dispatch);
    List<DispatchDto> toDispatchs(List<Dispatch> dispatch);
    @InheritInverseConfiguration
    Dispatch toDispatchdto(DispatchDto DispatchDto);
}
