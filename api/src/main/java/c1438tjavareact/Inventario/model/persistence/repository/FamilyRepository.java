package c1438tjavareact.Inventario.model.persistence.repository;

import c1438tjavareact.Inventario.model.persistence.entity.Family;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface FamilyRepository extends JpaRepository <Family, Long>{
    Family findByName(String name);
}



