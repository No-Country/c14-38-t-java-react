package c1438tjavareact.Inventario.model.persistence.mapper;


import c1438tjavareact.Inventario.model.domain.dto.SupplierDto;
import c1438tjavareact.Inventario.model.persistence.entity.Supplier;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface SupplierMapper {
    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "name", target = "name"),
            @Mapping(source = "phone", target = "phone"),
            @Mapping(source = "email", target = "email"),

            /*se deberían agregar?*/
            @Mapping(source = "address", target = "address")
    })
    Supplier toSupplier(SupplierDto supplierDto);
    List<SupplierDto> toSuppliersDTO(List<Supplier> supplier);
    @InheritInverseConfiguration
    SupplierDto toSupplierDTO(Supplier supplier);

}
