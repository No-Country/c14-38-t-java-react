package c1438tjavareact.Inventario.web.controller.models;

import lombok.Builder;
import lombok.Data;

/**
 * Clase que representa una respuesta de autenticación que incluye un token de autenticación, identificación de usuario,
 * nombre, apellido, correo electrónico y nombre de la empresa.
 */
@Data
@Builder
public class AuthResponse {
    /**
     * El token de autenticación generado.
     */
    private String token;
    /**
     * La identificación única del usuario.
     */
    private Long id;
    /**
     * El nombre del usuario.
     */
    private String name;
    /**
     * El apellido del usuario.
     */
    private String lastName;
    /**
     * El correo electrónico del usuario.
     */
    private String email;
    /**
     * El nombre de la empresa del usuario.
     */
    private String companyName;
    
}
