package c1438tjavareact.Inventario.model.persistence.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.annotation.sql.DataSourceDefinitions;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;


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
	
    @OneToMany(fetch = FetchType.EAGER,mappedBy ="supplier", cascade = CascadeType.ALL)
    private List<Product> products = new ArrayList<>();

}
