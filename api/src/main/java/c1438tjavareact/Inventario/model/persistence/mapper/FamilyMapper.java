package c1438tjavareact.Inventario.model.persistence.mapper;

import c1438tjavareact.Inventario.model.domain.dto.FamilyDto;
import c1438tjavareact.Inventario.model.persistence.entity.Family;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import java.util.List;

/**
 * Interfaz que define las operaciones de mapeo entre entidades Family y FamilyDto.
 */
@Mapper(componentModel = "spring")
public interface FamilyMapper {

    /**
     * Convierte una entidad Family a su correspondiente DTO FamilyDto.
     * @param family La entidad Family a ser convertida.
     * @return El DTO FamilyDto resultante.
     */
    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "name", target = "name"),
    })
    FamilyDto toFamily(Family family);

    /**
     * Convierte una lista de entidades Family a una lista de DTOs FamilyDto.
     * @param family La lista de entidades Family a ser convertida.
     * @return La lista de DTOs FamilyDto resultante.
     */
    List<FamilyDto> toFamilys(List<Family> family);

    /**
     * Realiza la operación inversa de mapeo, convirtiendo un DTO FamilyDto a su correspondiente entidad Family.
     * @param FamilyDto El DTO FamilyDto a ser convertido.
     * @return La entidad Family resultante.
     */
    @InheritInverseConfiguration
    Family toFamilydto(FamilyDto FamilyDto);
}
