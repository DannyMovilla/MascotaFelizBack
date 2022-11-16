import {Entity, model, property} from '@loopback/repository';
import {Mascota} from './mascota.model';

@model()
export class MascotaAsesor extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  asesorId: string;

  @property({
    type: 'string',
    required: true,
  })
  mascotaId: string;

  @property({
    type: 'string',
    required: false,
  })
  mascota: Mascota;

  constructor(data?: Partial<MascotaAsesor>) {
    super(data);
  }
}

export interface MascotaAsesorRelations {
  // describe navigational properties here
}

export type MascotaAsesorWithRelations = MascotaAsesor & MascotaAsesorRelations;
