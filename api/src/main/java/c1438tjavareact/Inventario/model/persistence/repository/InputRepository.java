package c1438tjavareact.Inventario.model.persistence.repository;


import c1438tjavareact.Inventario.model.persistence.entity.Input;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repositorio que gestiona las operaciones de acceso a la base de datos para la entidad Input.
 */
public interface InputRepository extends JpaRepository<Input, Long> {
}
