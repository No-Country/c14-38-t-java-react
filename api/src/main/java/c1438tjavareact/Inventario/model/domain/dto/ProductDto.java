package c1438tjavareact.Inventario.model.domain.dto;

import c1438tjavareact.Inventario.model.persistence.entity.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto {

    private Long id;
    private String name;
    private String description;
    private Double price;
    private FamilyDto family;
    private SupplierDto supplier;



}
