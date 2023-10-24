package c1438tjavareact.Inventario.model.domain.services.impl;

import c1438tjavareact.Inventario.model.dto.ProductDto;
import c1438tjavareact.Inventario.model.persistence.mapper.ProductMapper;
import c1438tjavareact.Inventario.model.persistence.repository.ProductRepository;
import c1438tjavareact.Inventario.web.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private final ProductMapper productMapper;

    @Override
    public Optional<ProductDto> create(ProductDto productDto) {
        return Optional.of(productMapper.toProductDTO(productRepository
                .save(productMapper.toProduct(productDto))));
    }

    @Override
    public Optional<ProductDto> update(ProductDto productDto) {
        return Optional.of(productMapper.toProductDTO(productRepository
                .save(productMapper.toProduct(productDto))));
    }

    @Override
    public Optional<List<ProductDto>> ProductList() {
        return Optional.of(productMapper.toProductsDTO(productRepository.findAll()));
    }

    @Override
    public Optional<ProductDto> ProductId(Long id) {
        return productRepository.findById(id).map(productMapper::toProductDTO);
    }

    @Override
    public void delete(Long id) {
        productRepository.deleteById(id);
    }
}
