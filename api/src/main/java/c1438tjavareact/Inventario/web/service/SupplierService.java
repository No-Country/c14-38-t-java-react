package c1438tjavareact.Inventario.web.service;


import c1438tjavareact.Inventario.model.domain.dto.SupplierDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface SupplierService{

    Optional<SupplierDto> create (SupplierDto supplierDto);

    Optional<SupplierDto> update (SupplierDto supplierDto);

    Optional<List<SupplierDto>> SupplierList();

    Optional<SupplierDto> SupplierId(Long id);

    void delete(Long id);

    boolean isItemNameDuplicate(String name);

}
