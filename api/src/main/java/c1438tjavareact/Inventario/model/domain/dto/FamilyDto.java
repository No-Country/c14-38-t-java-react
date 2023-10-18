package c1438tjavareact.Inventario.model.domain.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import lombok.*;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class FamilyDto {
    private Long id;
    private String name;
    @NotNull
    @DecimalMin(value = "0.0", message = "Debe ser un número positivo")
    private Double price;
}
