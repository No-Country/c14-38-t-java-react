package c1438tjavareact.Inventario.model.persistence.repository;

import c1438tjavareact.Inventario.model.persistence.entity.Family;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Interfaz que define un repositorio JPA para la entidad Family.
 */
public interface FamilyRepository extends JpaRepository<Family, Long> {

    /**
     * Busca una entidad Family por su nombre.
     * @param name El nombre de la entidad Family a buscar.
     * @return La entidad Family encontrada o null si no se encuentra.
     */
    Family findByName(String name);
}



