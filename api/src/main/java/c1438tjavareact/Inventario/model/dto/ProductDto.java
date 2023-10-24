package c1438tjavareact.Inventario.model.dto;

import c1438tjavareact.Inventario.model.persistence.entity.*;
import lombok.Data;

@Data
public class ProductDto {

    private Long id;
    private String name;
    private String description;
    /*private Dispatch dispatch;*/
    private Input input;
    private Family family;
    private Supplier supplier;
    private Stock stock;

}
