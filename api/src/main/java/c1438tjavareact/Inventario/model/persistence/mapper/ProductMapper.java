package c1438tjavareact.Inventario.model.persistence.mapper;

import c1438tjavareact.Inventario.model.domain.dto.FamilyDto;
import c1438tjavareact.Inventario.model.domain.dto.ProductDto;
import c1438tjavareact.Inventario.model.persistence.entity.Family;
import c1438tjavareact.Inventario.model.persistence.entity.Product;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "name", target = "name"),
            @Mapping(source = "description", target = "description"),
            @Mapping(source = "price", target = "price"),
            @Mapping(source = "family", target = "family"),
            @Mapping(source = "supplier", target = "supplier"),
            @Mapping(source = "stock", target = "stock")
    })

    Product toProduct(ProductDto productDto);
    List<ProductDto> toProductsDTO(List<Product> products);
    @InheritInverseConfiguration
    ProductDto toProductDTO(Product product);

    FamilyDto toFamilyDto(Family family);
    Family toFamily(FamilyDto familyDto);
}
