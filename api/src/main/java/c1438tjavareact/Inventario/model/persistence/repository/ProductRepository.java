package c1438tjavareact.Inventario.model.persistence.repository;

import c1438tjavareact.Inventario.model.persistence.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositorio que gestiona las operaciones de acceso a la base de datos para la entidad Product.
 */
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    /**
     * Busca una entidad Product por su nombre.
     * @param name El nombre de la entidad product a buscar.
     * @return La entidad Product encontrada o null si no se encuentra.
     */

    Product findByName(String name);
}
