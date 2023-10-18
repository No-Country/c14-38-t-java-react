package c1438tjavareact.Inventario.model.domain.dto;

import c1438tjavareact.Inventario.model.persistence.entity.Dispatch;
import c1438tjavareact.Inventario.model.persistence.entity.Family;
import c1438tjavareact.Inventario.model.persistence.entity.Input;
import c1438tjavareact.Inventario.model.persistence.entity.Supplier;
import lombok.*;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProductDto {

    private Long id;
    private String name;
    private String description;
    private Dispatch dispatch;
    private Input input;
    private Family family;
    private Supplier supplier;
}
