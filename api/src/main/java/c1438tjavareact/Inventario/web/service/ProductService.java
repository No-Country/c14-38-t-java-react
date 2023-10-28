package c1438tjavareact.Inventario.web.service;

import c1438tjavareact.Inventario.model.domain.dto.ProductDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ProductService {

    Optional<ProductDto> create (ProductDto productDto);

    Optional<ProductDto> update (ProductDto productDto);

    Optional<List<ProductDto>> ProductList();

    Optional<ProductDto> ProductId(Long id);

    void delete(Long id);

    boolean isItemNameDuplicate(String name);
}
