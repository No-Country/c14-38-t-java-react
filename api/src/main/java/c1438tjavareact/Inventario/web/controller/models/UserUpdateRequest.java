package c1438tjavareact.Inventario.web.controller.models;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserUpdateRequest {
    private Long id;
    private String email;
    private String name;
    private String password;
    private String lastName;
    private String companyName;
}
