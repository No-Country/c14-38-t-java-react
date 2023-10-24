package c1438tjavareact.Inventario.model.domain.services.impl;

import c1438tjavareact.Inventario.model.dto.SupplierDto;
import c1438tjavareact.Inventario.model.persistence.mapper.SupplierMapper;
import c1438tjavareact.Inventario.web.service.SupplierService;
import c1438tjavareact.Inventario.model.persistence.repository.SupplierRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class SupplierServiceImpl implements SupplierService {

    @Autowired
    private SupplierRepository supplierRepository;
    @Autowired
    private final SupplierMapper supplierMapper;


    /*Optional.of(mapper.toFamily(repository.save(mapper.toFamilydto(familyDto)*/
    @Override
    public Optional<SupplierDto> create(SupplierDto supplierDto) {
        return Optional.of(supplierMapper.toSupplierDTO(supplierRepository
                .save(supplierMapper.toSupplier(supplierDto))));
    }

    @Override
    public Optional<SupplierDto> update(SupplierDto supplierDto) {
        return Optional.of(supplierMapper.toSupplierDTO(supplierRepository
                .save(supplierMapper.toSupplier(supplierDto))));
    }

    @Override
    public  Optional<List<SupplierDto>> SupplierList() {
        return Optional.of(supplierMapper.toSuppliersDTO(supplierRepository.findAll()));
    }

    @Override
    public Optional<SupplierDto> SupplierId(Long id) {
        return supplierRepository.findById(id).map(supplierMapper::toSupplierDTO);
    }

    @Override
    public void delete(Long id) {
        supplierRepository.deleteById(id);
    }
}
