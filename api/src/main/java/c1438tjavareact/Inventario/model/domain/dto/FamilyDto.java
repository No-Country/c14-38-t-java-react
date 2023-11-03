package c1438tjavareact.Inventario.model.domain.dto;

import lombok.*;
@Data

public class FamilyDto {
    /**
     * Identificador único de la familia (Family)
     */
    private Long id;
    /**
     * Nombre de la familia
     */
    private String name;
    /**
     * Campo donde se almacena URL de la imagen
     */
    private String image;

}
