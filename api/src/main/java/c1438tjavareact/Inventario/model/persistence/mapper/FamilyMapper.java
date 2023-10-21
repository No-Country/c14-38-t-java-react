package c1438tjavareact.Inventario.model.persistence.mapper;


import c1438tjavareact.Inventario.model.domain.dto.FamilyDto;
import c1438tjavareact.Inventario.model.persistence.entity.Family;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface FamilyMapper {
    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "name", target = "name"),
    })
    FamilyDto toFamily(Family family);
    List<FamilyDto> toFamilys(List<Family> family);
    @InheritInverseConfiguration
    Family toFamilydto(FamilyDto FamilyDto);
}
