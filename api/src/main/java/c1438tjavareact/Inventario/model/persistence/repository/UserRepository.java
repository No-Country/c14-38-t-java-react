package c1438tjavareact.Inventario.model.persistence.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import c1438tjavareact.Inventario.model.persistence.entity.User;

/**
 * Repositorio que gestiona las operaciones de acceso a la base de datos para la entidad User.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    public Optional<User> findUserByEmail(String email);
    
}
