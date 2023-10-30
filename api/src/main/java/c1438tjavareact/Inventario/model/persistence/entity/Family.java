package c1438tjavareact.Inventario.model.persistence.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonIgnore;
/**
 * Clase que representa una familia de productos en el sistema.
 */
@Entity
@Table(name="families")
@Data
public class Family {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotEmpty
	private String name;
	@JsonIgnore
    @OneToMany(fetch = FetchType.EAGER,mappedBy = "family", cascade = CascadeType.ALL)
    private List<Product> products = new ArrayList<>();

}
