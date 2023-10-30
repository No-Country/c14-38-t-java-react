package c1438tjavareact.Inventario.model.domain.dto;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;
@Data
public class BranchDto {
    /**
     * Identificador único de la sucursal (Branch)
     */
    private Long id;
    /**
     * Nombre de la sucursal (Branch)
     */
    @NotEmpty
    private String name;
    /**
     * Dirección de la sucursal (Branch)
     */
    @NotEmpty
    private String address;
    /**
     * Teléfono de la sucursal (Branch)
     */
    @NotEmpty
    private String phone;
}
