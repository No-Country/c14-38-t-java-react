package c1438tjavareact.Inventario.model.domain.services.impl;

import c1438tjavareact.Inventario.model.persistence.entity.Product;
import c1438tjavareact.Inventario.model.persistence.repository.ProductRepository;
import c1438tjavareact.Inventario.web.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Optional<Product> create(Product product) {
        return Optional.of(productRepository.save(product));
    }

    @Override
    public Optional<Product> update(Product product) {
        return Optional.of(productRepository.save(product));
    }

    @Override
    public Optional<List<Product>> ProductList() {
        return Optional.of(productRepository.findAll());
    }

    @Override
    public Optional<Product> ProductId(Long id) {
        return productRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        productRepository.deleteById(id);
    }
}
