package c1438tjavareact.Inventario.model.domain.dto;


import lombok.Data;

@Data
public class ProductDto {
    /**
     * Identificador único del producto (Product)
     */
    private Long id;
    /**
     * Nombre del producto
     */
    private String name;
    /**
     * Descripción del producto
     */
    private String description;
    /**
     * Precio del producto
     */
    private Double price;
    /**
     * Familia a la que pertenece el producto
     */
    private FamilyDto family;
    /**
     * Proveedor al que pertenece el producto
     */
    private SupplierDto supplier;

    private Long stock;



}
