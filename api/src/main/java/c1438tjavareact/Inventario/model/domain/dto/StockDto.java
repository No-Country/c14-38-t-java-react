package c1438tjavareact.Inventario.model.domain.dto;
import c1438tjavareact.Inventario.model.persistence.entity.Product;
import lombok.*;
@Data
public class StockDto {

    private Long id;
    private Integer quantity;
    private Product product;
}
