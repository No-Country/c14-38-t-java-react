package c1438tjavareact.Inventario.model.domain.dto;

import lombok.*;
import java.util.Date;

import c1438tjavareact.Inventario.model.persistence.entity.Product;

@Data
public class InputDto {
    /**
     * Identificador único del ingreso
     */
    private Long id;
    /**
     * Fecha del ingreso
     */
    private Date entryDate;
    /**
     * Cantidad del ingreso
     */
    private Integer quantity;
    /**
     * Producto a ingresar
     */
    private Product product;

}
