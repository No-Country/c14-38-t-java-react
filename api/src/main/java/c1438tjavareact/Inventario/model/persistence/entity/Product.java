package c1438tjavareact.Inventario.model.persistence.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity 
@Table(name="products")
@Data
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotEmpty
	private String name;
	
	@NotEmpty
	private String description;

	@NotNull
	private Double price;
    
    @ManyToOne
    @JoinColumn(name = "family_id")
    private Family family;
    
    @ManyToOne
    @JoinColumn(name = "supplier_id")
    private Supplier supplier;
}
