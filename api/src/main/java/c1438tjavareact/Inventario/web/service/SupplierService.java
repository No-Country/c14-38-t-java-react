package c1438tjavareact.Inventario.web.service;


import c1438tjavareact.Inventario.model.domain.dto.SupplierDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Interfaz para servicios relacionados con los proveedores.
 */

@Service
public interface SupplierService{

    /**
     * Crea un nuevo proveedor con los datos proporcionados.
     * @param supplierDto Los datos del proveedor a crear.
     * @return Un Optional que contiene el proveedor creado, si se ha creado con éxito.
     */
    Optional<SupplierDto> create (SupplierDto supplierDto);

    /**
     * Actualiza un proveedor con los datos proporcionados.
     * @param supplierDto Los datos del proveedor con las actualizaciones.
     * @return Un Optional que contiene el proveedor actualizado, si se ha actualizado con éxito.
     */
    Optional<SupplierDto> update (SupplierDto supplierDto);
    /**
     * Obtiene una lista de todos los proveedores.
     * @return Un Optional que contiene una lista de proveedores, si existen proveedores.
     */
    Optional<List<SupplierDto>> SupplierList();

    /**
     * Obtiene un proveedor por su identificador único.
     * @param id El identificador único del proveedor.
     * @return Un Optional que contiene el proveedor encontrado, si existe un proveedor con el ID proporcionado.
     */
    Optional<SupplierDto> SupplierId(Long id);
    /**
     * Elimina un proveedor por su identificador único.
     * @param id El identificador único del proveedor a eliminar.
     */

    void delete(Long id);
    /**
     * Verifica si ya existe un proveedor con el mismo nombre.
     * @param name El nombre del proveedor a verificar.
     * @return True si ya existe un proveedor con el mismo nombre, false en caso contrario.
     */

    boolean isItemNameDuplicate(String name);

}
