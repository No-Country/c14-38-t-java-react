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

/**
 * Implementación del servicio SupplierService para gestionar los proveedores.
 */
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

    /**
     * Crea un nuevo proveedor en la base de datos.
     * @param supplierDto Los datos del proveedor que se creará.
     * @return Un objeto Optional que contiene el proveedor creado como SupplierDto.
     */
    @Override
    public Optional<SupplierDto> create(SupplierDto supplierDto) {
        return Optional.of(supplierMapper.toSupplierDTO(supplierRepository
                .save(supplierMapper.toSupplier(supplierDto))));
    }

    /**
     * Actualiza un proveedor existente en la base de datos.
     * @param supplierDto Los datos actualizados del proveedor.
     * @return Un objeto Optional que contiene el proveedor actualizado como SupplierDto, o un Optional vacío si el proveedor no existe.
     */

    @Override
    public Optional<SupplierDto> update(SupplierDto supplierDto) {
        if(supplierRepository.existsById(supplierDto.getId())){
            return Optional.of(supplierMapper.toSupplierDTO(supplierRepository
                    .save(supplierMapper.toSupplier(supplierDto))));
        }
        return Optional.of(new SupplierDto());
    }

    /**
     * Obtiene una lista de todos los proveedores.
     * @return Un objeto Optional que contiene la lista de proveedores como List de SupplierDto.
     */
    @Override
    public  Optional<List<SupplierDto>> SupplierList() {
        return Optional.of(supplierMapper.toSuppliersDTO(supplierRepository.findAll()));
    }

    /**
     * Obtiene un proveedor por su ID.
     * @param id El ID del proveedor que se desea obtener.
     * @return Un objeto Optional que contiene el proveedor encontrado como SupplierDto, o un Optional vacío si no se encontró el proveedor.
     */
    @Override
    public Optional<SupplierDto> SupplierId(Long id) {
        return supplierRepository.findById(id).map(supplierMapper::toSupplierDTO);
    }

    /**
     * Elimina un proveedor por su ID.
     * @param id El ID del proveedor que se desea eliminar.
     */

    @Override
    public void delete(Long id) {
        supplierRepository.deleteById(id);
    }

    /**
     * Verifica si un nombre de proveedor está duplicado en la base de datos.
     * @param name El nombre del proveedor que se desea verificar.
     * @return `true` si el nombre está duplicado, `false` en caso contrario.
     */
    @Override
    public boolean isItemNameDuplicate(String name) {

        // Implementa la lógica para verificar si el nombre está duplicado en la base de datos
        // Puedes usar el repositorio (repository) para realizar la consulta
        // Retorna true si el nombre está duplicado, false en caso contrario
        Supplier existingSupplier = supplierRepository.findByName(name);
        return existingSupplier != null;

    }
}
