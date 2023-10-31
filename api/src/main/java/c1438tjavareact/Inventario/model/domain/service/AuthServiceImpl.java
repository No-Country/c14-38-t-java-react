package c1438tjavareact.Inventario.model.domain.service;


import c1438tjavareact.Inventario.web.service.AuthService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import c1438tjavareact.Inventario.model.persistence.entity.User;
import c1438tjavareact.Inventario.model.persistence.repository.UserRepository;
import c1438tjavareact.Inventario.web.controller.models.AuthResponse;
import c1438tjavareact.Inventario.web.controller.models.AuthenticationRequest;
import c1438tjavareact.Inventario.web.controller.models.RegisterRequest;
import lombok.RequiredArgsConstructor;



/**
 * Implementación del servicio de autenticación que maneja el registro y la autenticación de usuarios.
 */
@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepo;

    private final PasswordEncoder passwordEncoder;

    private final JwtServiceImpl jwtServiceImpl;

    private final AuthenticationManager authenticationManager;


    /**
     * Registra un nuevo usuario con la información proporcionada.
     * @param request La solicitud de registro del usuario.
     * @return Una respuesta de autenticación que incluye el token JWT generado.
     */

    @Override
    public AuthResponse register(RegisterRequest request) {
        var user = User.builder()
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .build();

        userRepo.save(user);
        var jwtToken = jwtServiceImpl.generateToken(user);
        Long id = user.getId();
        String email = user.getEmail();
        return AuthResponse.builder()
                .id(id)
                .email(email)
                .token(jwtToken)
                .build();
    }

    /**
     * Autentica a un usuario con las credenciales proporcionadas.
     * @param request La solicitud de autenticación del usuario.
     * @return Una respuesta de autenticación que incluye el token JWT generado.
     * @throws "AuthenticationException" Si la autenticación no tiene éxito.
     */
    @Override
    public AuthResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepo.findUserByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtServiceImpl.generateToken(user);
        Long id = user.getId();
        String name = user.getName();
        String lastName = user.getLastName();
        String email = user.getEmail();
        String companyName = user.getCompanyName();
        return AuthResponse.builder()
                .id(id)
                .name(name)
                .lastName(lastName)
                .email(email)
                .token(jwtToken)
                .companyName(companyName)
                .build();
    }

}
