package c1438tjavareact.Inventario.model.persistence.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;
/**
 * Entidad que representa una sucursal en el sistema.
 */

@Entity
@Table(name="branchs")
@Data
public class Branch {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotEmpty
	private String name;
	@NotEmpty
	private String address;
	@NotEmpty
	private String phone;
}
