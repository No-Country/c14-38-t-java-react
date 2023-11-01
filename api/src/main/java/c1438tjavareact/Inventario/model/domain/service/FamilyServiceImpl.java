package c1438tjavareact.Inventario.model.domain.service;

import c1438tjavareact.Inventario.model.domain.dto.FamilyDto;
import c1438tjavareact.Inventario.model.persistence.entity.Family;
import c1438tjavareact.Inventario.model.persistence.repository.FamilyRepository;
import c1438tjavareact.Inventario.model.persistence.mapper.FamilyMapper;
import c1438tjavareact.Inventario.web.service.FamilyService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

/**
 * Implementación de servicio para operaciones relacionadas con familias de productos.
 */
@Service
@AllArgsConstructor
public class FamilyServiceImpl implements FamilyService {

    private FamilyRepository repository;
    private final FamilyMapper mapper;

    /**
     * Recupera todas las familias de productos.
     * @return Una lista de objetos FamilyDto opcional que representa todas las familias de productos.
     */
    @Override
    public Optional<List<FamilyDto>> findAll() {
        return Optional.of(mapper.toFamilys(repository.findAll()));
    }

    /**
     * Crea una nueva familia de productos.
     * @param familyDto El objeto FamilyDto que contiene la información de la familia a crear.
     * @return Un objeto FamilyDto opcional que representa la familia de productos creada.
     */
    @Override
    public Optional<FamilyDto> create(FamilyDto familyDto) {
        return Optional.of(mapper.toFamily(repository.save(mapper.toFamilydto(familyDto))));
    }

    /**
     * Actualiza una familia de productos existente.
     * @param familyDto El objeto FamilyDto que contiene la información de la familia a actualizar.
     * @return Un objeto FamilyDto opcional que representa la familia de productos actualizada.
     */
    @Override
    public Optional<FamilyDto> update(FamilyDto familyDto) {
        if (repository.existsById(familyDto.getId())) {
            return Optional.of(
                    mapper.toFamily(
                            repository.save(
                                    mapper.toFamilydto(familyDto)
                            )
                    ));
        }
        return Optional.of(new FamilyDto());
    }

    /**
     * Encuentra una familia de productos por su identificador único.
     * @param id El identificador único de la familia de productos a buscar.
     * @return Un objeto FamilyDto opcional que representa la familia de productos encontrada.
     */
    @Override
    public Optional<FamilyDto> findById(Long id) {
        return repository.findById(id).map(mapper::toFamily);
    }

    /**
     * Elimina una familia de productos por su identificador único.
     * @param id El identificador único de la familia de productos a eliminar.
     * @return `true` si la eliminación fue exitosa, `false` si no se encontró la familia.
     */
    @Override
    public boolean delete(Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }

    /**
     * Verifica si el nombre de la familia de productos está duplicado en la base de datos.
     * @param name El nombre de la familia a verificar.
     * @return `true` si el nombre está duplicado, `false` si no existe una familia con el mismo nombre.
     */
    @Override
    public boolean isItemNameDuplicate(String name) {
        // Implementa la lógica para verificar si el nombre está duplicado en la base de datos
        // Puedes usar el repositorio (repository) para realizar la consulta
        Family existingFamily = repository.findByName(name);
        return existingFamily != null;
    }
}
