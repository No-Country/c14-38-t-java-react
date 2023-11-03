package c1438tjavareact.Inventario.web.service;

import c1438tjavareact.Inventario.web.controller.models.AuthResponse;
import c1438tjavareact.Inventario.web.controller.models.AuthenticationRequest;
import c1438tjavareact.Inventario.web.controller.models.RegisterRequest;

/**
 * Interfaz para servicios de autenticación.
 */

public interface AuthService {
    /**
     * Registra un usuario en el sistema.
     * @param request La solicitud de registro.
     * @return Una respuesta de autenticación que puede contener un token de acceso u otra información.
     */
    public AuthResponse register(RegisterRequest request);

    /**
     * Autentica a un usuario en el sistema.
     * @param request La solicitud de autenticación.
     * @return Una respuesta de autenticación que puede contener un token de acceso u otra información.
     */
    public AuthResponse authenticate(AuthenticationRequest request);

}
