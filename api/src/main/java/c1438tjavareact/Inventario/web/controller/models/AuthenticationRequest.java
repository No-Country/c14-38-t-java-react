package c1438tjavareact.Inventario.web.controller.models;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthenticationRequest {

    private String email;
    private String password;
    
}
