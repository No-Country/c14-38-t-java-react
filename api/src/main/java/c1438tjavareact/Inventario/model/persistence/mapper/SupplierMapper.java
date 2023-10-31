package c1438tjavareact.Inventario.model.persistence.mapper;


import c1438tjavareact.Inventario.model.domain.dto.SupplierDto;
import c1438tjavareact.Inventario.model.persistence.entity.Supplier;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

/**
 * Interfaz que define las operaciones de mapeo entre entidades Supplier y sus respectivos DTOs.
 */
@Mapper(componentModel = "spring")
public interface SupplierMapper {
    /**
     * Realiza el mapeo de una entidad Supplier a su correspondiente DTO.
     * @param "supplier" La entidad Supplier a ser mapeada.
     * @return El DTO correspondiente a la entidad Supplier.
     */
    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "name", target = "name"),
            @Mapping(source = "phone", target = "phone"),
            @Mapping(source = "email", target = "email"),

            /*se deberían agregar?*/
            @Mapping(source = "address", target = "address")
    })
    Supplier toSupplier(SupplierDto supplierDto);

    /**
     * Realiza el mapeo de una lista de entidades Supplier a una lista de sus respectivos DTOs.
     * @param supplier La lista de entidades Supplier a ser mapeada.
     * @return La lista de DTOs correspondientes a las entidades Supplier.
     */
    List<SupplierDto> toSuppliersDTO(List<Supplier> supplier);

    /**
     * Realiza la operación inversa de mapeo, convirtiendo un DTO de Supplier a su entidad correspondiente.
     * @param "supplierDto" El DTO de Supplier a ser mapeado inversamente.
     * @return La entidad Supplier correspondiente al DTO.
     */
    @InheritInverseConfiguration
    SupplierDto toSupplierDTO(Supplier supplier);

}
