package c1438tjavareact.Inventario.model.persistence.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

@Entity 
@Table(name="users")
public class Family {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotNull
	private Long id;
	
	@NotEmpty
	private String name;
	
	@NotNull
	private Double price;
	
    @OneToMany(mappedBy = "family", cascade = CascadeType.ALL)
    private List<Product> products = new ArrayList<>();

}
