package c1438tjavareact.Inventario.model.persistence.mapper;

import c1438tjavareact.Inventario.model.domain.dto.InputDto;
import c1438tjavareact.Inventario.model.persistence.entity.Input;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

/**
 * Interfaz que define las operaciones de mapeo entre entidades Input y sus respectivos DTOs.
 */
@Mapper(componentModel = "spring")
public interface InputMapper {

    /**
     * Realiza el mapeo de una entidad Input a su correspondiente DTO.
     * @param input La entidad Input a ser mapeada.
     * @return El DTO correspondiente a la entidad Input.
     */
    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "entryDate", target = "entryDate"),
            @Mapping(source = "quantity", target = "quantity"),
            @Mapping(source = "product", target = "product"),
    })
    InputDto toInput(Input input);

    /**
     * Realiza el mapeo de una lista de entidades Input a una lista de sus respectivos DTOs.
     * @param input La lista de entidades Input a ser mapeada.
     * @return La lista de DTOs correspondientes a las entidades Input.
     */
    List<InputDto> toInputs(List<Input> input);

    /**
     * Realiza la operación inversa de mapeo, convirtiendo un DTO de Input a su entidad correspondiente.
     * @param "inputDto" El DTO de Input a ser mapeado inversamente.
     * @return La entidad Input correspondiente al DTO.
     */
    @InheritInverseConfiguration
    Input toInputdto(InputDto InputDto);
}
