package c1438tjavareact.Inventario.model.persistence.repository;

import c1438tjavareact.Inventario.model.persistence.entity.Family;
import c1438tjavareact.Inventario.model.persistence.entity.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository extends JpaRepository<Stock, Long> {
}