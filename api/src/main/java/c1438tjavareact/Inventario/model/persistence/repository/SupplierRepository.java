package c1438tjavareact.Inventario.model.persistence.repository;

import c1438tjavareact.Inventario.model.persistence.entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositorio que gestiona las operaciones de acceso a la base de datos para la entidad Supplier.
 */
@Repository
public interface SupplierRepository extends JpaRepository<Supplier, Long> {
    Supplier findByName(String name);
}
