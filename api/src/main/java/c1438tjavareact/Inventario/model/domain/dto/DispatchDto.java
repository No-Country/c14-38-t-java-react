package c1438tjavareact.Inventario.model.domain.dto;

import lombok.*;
import java.util.Date;

import c1438tjavareact.Inventario.model.persistence.entity.Product;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class DispatchDto {
    private Long id;
    private Date dispatchDate;
    private Integer quantity;
    private Product product;
}
