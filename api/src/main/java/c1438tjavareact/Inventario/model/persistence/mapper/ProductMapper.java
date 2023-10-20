package c1438tjavareact.Inventario.model.persistence.mapper;

import c1438tjavareact.Inventario.model.domain.dto.ProductDto;
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
            @Mapping(source = "dispatch", target = "dispatch"),
            @Mapping(source = "input", target = "input"),
            @Mapping(source = "family", target = "family"),
            @Mapping(source = "supplier", target = "supplier"),

    })
    ProductDto toProduct(Product product);
    List<ProductDto> toProducts(List<Product> product);
    @InheritInverseConfiguration
    Product toProductdto(ProductDto ProductDto);

}
