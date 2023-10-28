package c1438tjavareact.Inventario.model.domain.service;

import c1438tjavareact.Inventario.model.domain.dto.SupplierDto;
import c1438tjavareact.Inventario.model.persistence.entity.Supplier;
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


    /*if(supplierRepository.existsById(supplierDto.getId())){
            return Optional.of(supplierMapper.toSupplierDTO(supplierRepository
                    .save(supplierMapper.toSupplier(supplierDto))));
        }
            return Optional.of(new supplierDto());*/
    @Override
    public Optional<SupplierDto> create(SupplierDto supplierDto) {
        return Optional.of(supplierMapper.toSupplierDTO(supplierRepository
                .save(supplierMapper.toSupplier(supplierDto))));
    }

    @Override
    public Optional<SupplierDto> update(SupplierDto supplierDto) {
        if(supplierRepository.existsById(supplierDto.getId())){
            return Optional.of(supplierMapper.toSupplierDTO(supplierRepository
                    .save(supplierMapper.toSupplier(supplierDto))));
        }
        return Optional.of(new SupplierDto());
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

    @Override
    public boolean isItemNameDuplicate(String name) {

        // Implementa la lógica para verificar si el nombre está duplicado en la base de datos
        // Puedes usar el repositorio (repository) para realizar la consulta
        // Retorna true si el nombre está duplicado, false en caso contrario
        Supplier existingSupplier = supplierRepository.findByName(name);
        return existingSupplier != null;

    }
}
