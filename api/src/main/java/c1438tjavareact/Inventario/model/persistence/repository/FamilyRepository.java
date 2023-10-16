package c1438tjavareact.Inventario.model.persistence.repository;
import c1438tjavareact.Inventario.model.persistence.entity.Family;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface FamilyRepository extends JpaRepository <Family, Long>{
}



