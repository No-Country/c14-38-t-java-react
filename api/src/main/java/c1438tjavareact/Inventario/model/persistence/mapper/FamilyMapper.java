package c1438tjavareact.Inventario.model.persistence.mapper;
import c1438tjavareact.Inventario.model.dto.FamilyDto;
import c1438tjavareact.Inventario.model.persistence.entity.Family;
import org.springframework.stereotype.Component;

@Component
public class FamilyMapper {

    public FamilyDto toFamilyDto(Family family) {
        FamilyDto familyDto = new FamilyDto();
        familyDto.setId(family.getId());
        familyDto.setName(family.getName());
        familyDto.setPrice(family.getPrice());
        return familyDto;
    }

    public Family toFamily(FamilyDto familyDto) {
        Family family = new Family();
        family.setId(familyDto.getId());
        family.setName(familyDto.getName());
        family.setPrice(familyDto.getPrice());
        return family;
    }
}
