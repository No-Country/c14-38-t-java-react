package c1438tjavareact.Inventario.web.service;

import c1438tjavareact.Inventario.model.domain.dto.InputDto;
import java.util.List;
import java.util.Optional;


/**
 * Interfaz para servicios relacionados con las entradas (inputs) en el sistema.
 */

public interface InputService {

    /**
     * Recupera todos los registros de entradas.
     * @return Una lista opcional de objetos InputDto que representa las entradas.
     */
    Optional<List<InputDto>> findAll();

    /**
     * Busca una entrada por su identificador único.
     * @param id El identificador único de la entrada.
     * @return Una entrada encapsulada en un objeto InputDto (opcional).
     */
    Optional <InputDto> findById(Long id);
    /**
     * Crea una nueva entrada en el sistema.
     * @param inputDto El objeto InputDto que representa la entrada a crear.
     * @return Una entrada encapsulada en un objeto InputDto (opcional).
     */
    Optional<InputDto> create(InputDto inputDto);

    /**
     * Actualiza una entrada existente en el sistema.
     *@param "inputDto El objeto InputDto que contiene los datos actualizados de la entrada.
     * @return La entrada actualizada encapsulada en un objeto InputDto (opcional).
     */
    Optional<InputDto> update(InputDto familyDto);

    /**
     * Elimina una entrada del sistema.
     * @param id El identificador único de la entrada a eliminar.
     * @return True si la entrada se eliminó con éxito, false en caso contrario.
     */
    boolean delete(Long id);
}
