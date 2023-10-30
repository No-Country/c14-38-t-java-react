package c1438tjavareact.Inventario.model.domain.dto;
import c1438tjavareact.Inventario.model.persistence.entity.Product;
import lombok.*;
@Data
public class StockDto {
    /**
     * Identificador unico de stock
     */
    private Long id;
    /**
     * Cantidad de stock
     */
    private Integer quantity;
    /**
     * Producto en stock
     */
    private Product product;
}
