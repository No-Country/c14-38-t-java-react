package c1438tjavareact.Inventario.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import c1438tjavareact.Inventario.web.controller.models.AuthResponse;
import c1438tjavareact.Inventario.web.controller.models.AuthenticationRequest;
import c1438tjavareact.Inventario.web.controller.models.RegisterRequest;
import c1438tjavareact.Inventario.web.service.AuthService;
import lombok.RequiredArgsConstructor;

/**
 * Controlador para la autenticación y registro de usuarios.
 */
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class AuthController {

    @Autowired
    private AuthService authService;
    /**
     * Maneja la solicitud de registro de un nuevo usuario.
     * @param request La información de registro proporcionada por el usuario.
     * @return ResponseEntity con la respuesta de autenticación.
     */
    
    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request){
        return ResponseEntity.ok(authService.register(request));
    }

    /**
     * Maneja la solicitud de autenticación de un usuario existente.
     * @param request La información de autenticación proporcionada por el usuario.
     * @return ResponseEntity con la respuesta de autenticación.
     */
    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> auhtenticate (@RequestBody AuthenticationRequest request){
        return ResponseEntity.ok(authService.authenticate(request));
    }

}
