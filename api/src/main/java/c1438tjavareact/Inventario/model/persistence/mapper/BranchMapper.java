package c1438tjavareact.Inventario.model.persistence.mapper;
import c1438tjavareact.Inventario.model.domain.dto.BranchDto;
import c1438tjavareact.Inventario.model.persistence.entity.Branch;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BranchMapper {
    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "name", target = "name"),
            @Mapping(source = "address", target = "address"),
            @Mapping(source = "phone", target = "phone"),

    })
    BranchDto toBranch(Branch branch);
    List<BranchDto> toBranchs(List<Branch> branch);
    @InheritInverseConfiguration
    Branch toBranchdto(BranchDto BranchDto);
}
