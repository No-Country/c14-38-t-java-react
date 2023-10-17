package c1438tjavareact.Inventario.web.service;


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

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{

    private final UserRepository userRepo;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    @Override
    public AuthResponse register(RegisterRequest request) {
        var user = User.builder()
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .build();
        
        userRepo.save(user);
        var jwtToken = jwtService.generateToken(user);
        Long id = user.getId();
        String name = user.getName();
        String lastName = user.getLastName();
        String email = user.getEmail();
        return AuthResponse.builder()
                .id(id)
                .name(name)
                .lastName(lastName)
                .email(email)
                .token(jwtToken)
                .build();
    }

    @Override
    public AuthResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepo.findUserByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        Long id = user.getId();        
        String name = user.getName();
        String lastName = user.getLastName();
        String email = user.getEmail();
        return AuthResponse.builder()
                .id(id)
                .name(name)
                .lastName(lastName)
                .email(email)
                .token(jwtToken)
                .build();
    }
    
}
