package c1438tjavareact.Inventario.model.domain.dto;

import lombok.*;
import java.util.Date;

import c1438tjavareact.Inventario.model.persistence.entity.Product;

@Data
public class InputDto {

    private Long id;
    private Date entryDate;
    private Integer quantity;
    private Product product;

}
