package c1438tjavareact.Inventario.model.domain.dto;

import lombok.*;
import java.util.Date;

import c1438tjavareact.Inventario.model.persistence.entity.Product;

@Data

public class DispatchDto {
    /**
     * Identificador único del despacho (Dispatch)
     */
    private Long id;
    /**
     * Fecha del despacho ()
     */
    private Date dispatchDate;
    /**
     * Cantidad a despachar ()
     */
    private Integer quantity;
    /**
     * Producto a despachar ()
     */
    private Product product;
}
