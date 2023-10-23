package c1438tjavareact.Inventario.model.persistence.mapper;

import c1438tjavareact.Inventario.model.domain.dto.InputDto;
import c1438tjavareact.Inventario.model.persistence.entity.Input;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")

public interface InputMapper {
    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "entryDate", target = "entryDate"),
            @Mapping(source = "quantity", target = "quantity"),
            @Mapping(source = "product_id", target = "product_id"),

    })
    InputDto toInput(Input input);
    List<InputDto> toInputs(List<Input> input);
    @InheritInverseConfiguration
    Input toInputdto(InputDto InputDto);
}
