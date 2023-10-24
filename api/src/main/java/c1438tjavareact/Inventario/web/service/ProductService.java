package c1438tjavareact.Inventario.web.service;

import c1438tjavareact.Inventario.model.persistence.entity.Product;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ProductService {

    Optional<Product> create (Product supplier);

    Optional<Product> update (Product supplier);

    Optional<List<Product>> ProductList();

    Optional<Product> ProductId(Long id);

    void delete(Long id);
}
