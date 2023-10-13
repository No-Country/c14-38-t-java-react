package c1438tjavareact.Inventario.model.persistence.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import c1438tjavareact.Inventario.model.persistence.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    public Optional<User> findByUsername(String user);
    public Boolean existsByUsername(String user);
    //public Boolean existsByEmail(String email);
    
}
