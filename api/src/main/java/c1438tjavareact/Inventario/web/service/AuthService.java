package c1438tjavareact.Inventario.web.service;

import c1438tjavareact.Inventario.web.controller.models.AuthResponse;
import c1438tjavareact.Inventario.web.controller.models.AuthenticationRequest;
import c1438tjavareact.Inventario.web.controller.models.RegisterRequest;

public interface AuthService {
    
    public AuthResponse register(RegisterRequest request);
    public AuthResponse authenticate(AuthenticationRequest request);

}
