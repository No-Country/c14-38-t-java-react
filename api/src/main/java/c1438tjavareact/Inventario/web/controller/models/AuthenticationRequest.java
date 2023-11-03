package c1438tjavareact.Inventario.web.controller.models;

import lombok.Builder;
import lombok.Data;

/**
 * Clase que representa una solicitud de autenticación, que incluye un correo electrónico y una contraseña.
 */
@Data
@Builder
public class AuthenticationRequest {
    /**
     * El correo electrónico proporcionado para la autenticación.
     */
    private String email;
    /**
     * La contraseña proporcionada para la autenticación.
     */
    private String password;
    
}
