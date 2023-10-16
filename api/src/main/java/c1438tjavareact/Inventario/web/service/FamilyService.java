package c1438tjavareact.Inventario.web.service;
import c1438tjavareact.Inventario.model.dto.FamilyDto;
import c1438tjavareact.Inventario.model.persistence.entity.Family;
import org.springframework.stereotype.Service;
import java.util.List;

import java.util.Optional;

public interface FamilyService {
    Family create(Family family);
    //Family delete(Family family);
    Family update(Family family);
    void delete(Long id);
    Family getFamilyById(Long id);
    List<Family> getAllFamilies();
}
