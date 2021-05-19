import { EntityRepository, Repository } from "typeorm";
import { FSR } from "../entities/FSR";


@EntityRepository(FSR)
class FsrRepository extends Repository<FSR>{}

export { FsrRepository };