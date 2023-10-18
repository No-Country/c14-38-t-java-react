package c1438tjavareact.Inventario.model.domain.services.impl;

import c1438tjavareact.Inventario.web.service.SupplierService;
import c1438tjavareact.Inventario.model.persistence.entity.Supplier;
import c1438tjavareact.Inventario.model.persistence.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SupplierServiceImpl implements SupplierService {

    @Autowired
    private SupplierRepository supplierRepository;

    @Override
    public Optional<Supplier> create(Supplier supplier) {
        return Optional.of(supplierRepository.save(supplier));
    }

    @Override
    public Optional<Supplier> update(Supplier supplier) {
        return Optional.of(supplierRepository.save(supplier));
    }

    @Override
    public List<Supplier> SupplierList() {
        return supplierRepository.findAll();
    }

    @Override
    public Optional<Supplier> SupplierId(Long id) {
        return supplierRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        supplierRepository.deleteById(id);
    }
}
