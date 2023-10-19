package c1438tjavareact.Inventario.model.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import c1438tjavareact.Inventario.model.persistence.entity.Branch;

@Repository
public interface BranchRepository extends JpaRepository<Branch, Long> {
    
}
