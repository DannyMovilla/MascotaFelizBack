import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {MascotaAsesor, MascotaAsesorRelations} from '../models';

export class MascotaAsesorRepository extends DefaultCrudRepository<
  MascotaAsesor,
  typeof MascotaAsesor.prototype.id,
  MascotaAsesorRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(MascotaAsesor, dataSource);
  }
}
