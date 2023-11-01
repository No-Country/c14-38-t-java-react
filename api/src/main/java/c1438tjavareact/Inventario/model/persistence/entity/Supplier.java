package c1438tjavareact.Inventario.model.persistence.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

/**
 * Entidad que representa un proveedor en el sistema.
 */

@Entity
@Table(name="suppliers")
@Data
public class  Supplier {
	//proveedores
	/*TODO
	*  hacer CRUD de esto, si es posible agregar DTO*/
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotEmpty
	private String name;
	
	@NotEmpty
	private String address;
	
	@NotEmpty
	private String phone;
	
	@NotEmpty
	private String email;
	@JsonIgnore
    @OneToMany(fetch = FetchType.EAGER,mappedBy ="supplier", cascade = CascadeType.ALL)
    private List<Product> products = new ArrayList<>();

}
