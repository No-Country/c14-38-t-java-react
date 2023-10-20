package c1438tjavareact.Inventario.model.domain.dto;
import c1438tjavareact.Inventario.model.persistence.entity.Product;
import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import lombok.*;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class StockDto {

    private Long id;
    private Integer quantity;
    private Product product;
}
