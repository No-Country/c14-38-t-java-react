package c1438tjavareact.Inventario.model.domain.dto;

import c1438tjavareact.Inventario.model.persistence.entity.Branch;
import lombok.*;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class InputDto {

    private Long id;
    private Date entryDate;
    private Integer quantity;
    private Long product_id;

}
