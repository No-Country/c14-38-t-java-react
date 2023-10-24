package c1438tjavareact.Inventario.web.controller.models;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthResponse {

    private String token;
    private Long id;
    private String name;
    private String lastName;
    private String email;
    private String companyName;
    
}
