import { EntityRepository, Repository } from "typeorm";
import { UnidadeSanitaria } from "../entities/UnidadeSanitaria";


@EntityRepository(UnidadeSanitaria)
class UnidadeSanitariaRepository extends Repository<UnidadeSanitaria>{}

export { UnidadeSanitariaRepository }