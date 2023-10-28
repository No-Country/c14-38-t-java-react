package c1438tjavareact.Inventario.model.domain.dto;


import lombok.Data;

@Data
public class ProductDto {

    private Long id;
    private String name;
    private String description;
    private Double price;
    private FamilyDto family;
    private SupplierDto supplier;
    private Long stock;


}
