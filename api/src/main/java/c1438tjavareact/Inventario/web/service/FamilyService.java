package c1438tjavareact.Inventario.web.service;

import c1438tjavareact.Inventario.model.domain.dto.FamilyDto;
import java.util.List;
import java.util.Optional;

public interface FamilyService {
    /**
     * Obtiene una lista de todas las familias.
     * @return Un Optional que contiene la lista de FamilyDto si se encuentra, o un Optional vacío si no hay familias.
     */
    Optional<List<FamilyDto>> findAll();

    /**
     * Obtiene una familia por su ID.
     * @param id El ID de la familia a buscar.
     * @return Un Optional que contiene la FamilyDto encontrada si existe, o un Optional vacío si no se encuentra.
     */
    Optional<FamilyDto> findById(Long id);

    /**
     * Crea una nueva familia.
     * @param familyDto La FamilyDto que se va a crear.
     * @return Un Optional que contiene la FamilyDto creada si tiene éxito, o un Optional vacío si hay un error.
     */
    Optional<FamilyDto> create(FamilyDto familyDto);

    /**
     * Actualiza una familia existente.
     * @param familyDto La FamilyDto que se va a actualizar.
     * @return Un Optional que contiene la FamilyDto actualizada si tiene éxito, o un Optional vacío si no se encuentra.
     */
    Optional<FamilyDto> update(FamilyDto familyDto);

    /**
     * Elimina una familia por su ID.
     * @param id El ID de la familia a eliminar.
     * @return true si la eliminación tiene éxito, o false si no se encuentra la familia.
     */
    boolean delete(Long id);

    /**
     * Verifica si el nombre de una familia está duplicado en la base de datos.
     * @param name El nombre de la familia a verificar.
     * @return true si el nombre está duplicado, false en caso contrario.
     */
    boolean isItemNameDuplicate(String name);
}
