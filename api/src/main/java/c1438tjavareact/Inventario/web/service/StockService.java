package c1438tjavareact.Inventario.web.service;
import c1438tjavareact.Inventario.model.domain.dto.StockDto;
import java.util.List;
import java.util.Optional;

/**
 * Interfaz para servicios relacionados con el stock de productos.
 */
public interface StockService {

    /**
     * Obtiene una lista de todos los elementos de stock.
     * @return Un Optional que contiene una lista de elementos de stock, si existen elementos.
     */
    Optional<List<StockDto>> findAll();
    /**
     * Obtiene un elemento de stock por su identificador único.
     * @param id El identificador único del elemento de stock.
     * @return Un Optional que contiene el elemento de stock encontrado, si existe un elemento con el ID proporcionado.
     */
    Optional <StockDto> findById(Long id);

    /**
     * Crea un nuevo elemento de stock con los datos proporcionados.
     * @param familyDto Los datos del elemento de stock a crear.
     * @return Un Optional que contiene el elemento de stock creado, si se ha creado con éxito.
     */
    Optional<StockDto> create(StockDto familyDto);
    /**
     * Actualiza un elemento de stock con los datos proporcionados.
     * @param stockDto Los datos del elemento de stock con las actualizaciones.
     * @return Un Optional que contiene el elemento de stock actualizado, si se ha actualizado con éxito.
     */
    Optional<StockDto> update(StockDto stockDto);
    /**
     * Elimina un elemento de stock por su identificador único.
     * @param id El identificador único del elemento de stock a eliminar.
     * @return True si el elemento de stock se eliminó con éxito, false en caso contrario.
     */
    boolean delete(Long id);
}
