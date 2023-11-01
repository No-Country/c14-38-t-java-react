package c1438tjavareact.Inventario.model.persistence.repository;

import c1438tjavareact.Inventario.model.persistence.entity.Family;
import c1438tjavareact.Inventario.model.persistence.entity.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repositorio que gestiona las operaciones de acceso a la base de datos para la entidad Stock.
 */
public interface StockRepository extends JpaRepository<Stock, Long> {
}