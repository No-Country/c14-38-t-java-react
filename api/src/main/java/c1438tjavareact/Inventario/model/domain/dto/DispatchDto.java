package c1438tjavareact.Inventario.model.domain.dto;

import lombok.*;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class DispatchDto {
    private Long id;
    private Date dispatchDate;
    private Integer quantity;
}
