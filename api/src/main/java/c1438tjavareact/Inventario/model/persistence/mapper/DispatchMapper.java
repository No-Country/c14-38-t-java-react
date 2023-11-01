package c1438tjavareact.Inventario.model.persistence.mapper;

import c1438tjavareact.Inventario.model.domain.dto.DispatchDto;
import c1438tjavareact.Inventario.model.persistence.entity.Dispatch;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

/**
 * Interfaz que define las operaciones de mapeo entre entidades Dispatch y sus respectivos DTOs.
 */
@Mapper(componentModel = "spring")
public interface DispatchMapper {

    /**
     * Realiza el mapeo de una entidad Dispatch a su correspondiente DTO.
     * @param dispatch La entidad Dispatch a ser mapeada.
     * @return El DTO correspondiente a la entidad Dispatch.
     */
    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "dispatchDate", target = "dispatchDate"),
            @Mapping(source = "quantity", target = "quantity"),
            @Mapping(source = "product", target = "product")
    })

    /**
     * Realiza el mapeo de una lista de entidades Dispatch a una lista de sus respectivos DTOs.
     * @param dispatch La lista de entidades Dispatch a ser mapeada.
     * @return La lista de DTOs correspondientes a las entidades Dispatch.
     */
    DispatchDto toDispatch(Dispatch dispatch);
    List<DispatchDto> toDispatchs(List<Dispatch> dispatch);

    /**
     * Realiza la operación inversa de mapeo, convirtiendo un DTO de Dispatch a su entidad correspondiente.
     * @param "dispatchDto" El DTO de Dispatch a ser mapeado inversamente.
     * @return La entidad Dispatch correspondiente al DTO.
     */
    @InheritInverseConfiguration
    Dispatch toDispatchdto(DispatchDto DispatchDto);
}
