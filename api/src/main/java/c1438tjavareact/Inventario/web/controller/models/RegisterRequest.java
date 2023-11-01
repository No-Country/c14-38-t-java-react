package c1438tjavareact.Inventario.web.controller.models;

import lombok.Builder;
import lombok.Data;

/**
 * Clase que representa una solicitud de registro que incluye el correo electrónico y la contraseña del usuario.
 */
@Data
@Builder
public class RegisterRequest {
    /**
     * El correo electrónico proporcionado en la solicitud de registro.
     */
    private String email;
    /**
     * La contraseña proporcionada en la solicitud de registro.
     */
	private String password;
    
}
