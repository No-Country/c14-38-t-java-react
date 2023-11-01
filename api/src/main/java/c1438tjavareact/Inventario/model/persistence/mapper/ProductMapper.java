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

/**
 * Interfaz que define las operaciones de mapeo entre entidades Product y sus respectivos DTOs.
 */
@Mapper(componentModel = "spring")
public interface ProductMapper {
    /**
     * Realiza el mapeo de una entidad Product a su correspondiente DTO.
     * @param productDto La entidad Product a ser mapeada.
     * @return El DTO correspondiente a la entidad Product.
     */

    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "name", target = "name"),
            @Mapping(source = "description", target = "description"),
            @Mapping(source = "price", target = "price"),
            @Mapping(source = "family", target = "family"),
            @Mapping(source = "supplier", target = "supplier"),
            @Mapping(source = "stock", target = "stock")
    })

    ProductDto toProductDTO(Product product);
  
    /**
     * Realiza el mapeo de una lista de entidades Product a una lista de sus respectivos DTOs.
     * @param products La lista de entidades Product a ser mapeada.
     * @return La lista de DTOs correspondientes a las entidades Product.
     */
    List<ProductDto> toProductsDTO(List<Product> products);

    /**
     * Realiza la operación inversa de mapeo, convirtiendo un DTO de Product a su entidad correspondiente.
     * @param product El DTO de Product a ser mapeado inversamente.
     * @return La entidad Product correspondiente al DTO.
     */
    @InheritInverseConfiguration
    Product toProduct(ProductDto productDto);

    /**
     * Realiza el mapeo de una entidad Family a su correspondiente DTO.
     * @param family La entidad Family a ser mapeada.
     * @return El DTO correspondiente a la entidad Family.
     */

    FamilyDto toFamilyDto(Family family);

    /**
     * Realiza la operación inversa de mapeo, convirtiendo un DTO de Family a su entidad correspondiente.
     * @param familyDto El DTO de Family a ser mapeado inversamente.
     * @return La entidad Family correspondiente al DTO.
     */
    Family toFamily(FamilyDto familyDto);
}
