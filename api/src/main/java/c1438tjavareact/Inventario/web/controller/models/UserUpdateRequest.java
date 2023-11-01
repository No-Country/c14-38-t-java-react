package c1438tjavareact.Inventario.web.controller.models;

import lombok.Builder;
import lombok.Data;

/**
 * Clase que representa una solicitud de actualización de usuario con varios campos modificables.
 */
@Data
@Builder
public class UserUpdateRequest {
    /**
     * El ID del usuario que se va a actualizar.
     */
    private Long id;
    /**
     * El correo electrónico del usuario que se desea actualizar.
     */
    private String email;
    /**
     * El nombre del usuario que se desea actualizar.
     */
    private String name;
    /**
     * La contraseña del usuario que se desea actualizar.
     */
    private String password;
    /**
     * El apellido del usuario que se desea actualizar.
     */
    private String lastName;
    /**
     * El nombre de la empresa a la que pertenece el usuario que se desea actualizar.
     */
    private String companyName;
}
