import {Entity, hasMany, model, property} from '@loopback/repository';
import {Mascota} from './mascota.model';

@model()
export class Usuario extends Entity {
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
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  documento: string;

  @property({
    type: 'string',
    required: false,
  })
  contrasena: string;

  @property({
    type: 'string',
    required: false,
  })
  foto: string;

  @property({
    type: 'string',
  })
  rolId?: string;

  @hasMany(() => Mascota, {keyTo: 'usuarioId'})
  mascotas: Mascota[];

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
