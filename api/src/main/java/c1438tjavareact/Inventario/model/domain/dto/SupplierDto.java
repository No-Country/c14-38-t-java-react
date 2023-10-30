package c1438tjavareact.Inventario.model.domain.dto;

import lombok.*;

@Data
public class SupplierDto {
    /**
     * Identificador único de proveedor (Supplier)
     */
    private Long id;
    /**
     * Nombre del proveedor
     */
    private String name;
    /**
     * Dirección del proveedor
     */
    private String address;
    /**
     * Teléfono del proveedor
     */
    private String phone;
    /**
     * Correo del proveedor
     */
    private String email;
}
