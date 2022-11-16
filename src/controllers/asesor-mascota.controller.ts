import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {MascotaAsesor} from '../models';
import {MascotaAsesorRepository} from '../repositories';

export class AsesorMascotaController {
  constructor(
    @repository(MascotaAsesorRepository)
    public mascotaAsesorRepository: MascotaAsesorRepository,
  ) {}

  @post('/mascota-asesors')
  @response(200, {
    description: 'MascotaAsesor model instance',
    content: {'application/json': {schema: getModelSchemaRef(MascotaAsesor)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MascotaAsesor, {
            title: 'NewMascotaAsesor',
            exclude: ['id'],
          }),
        },
      },
    })
    mascotaAsesor: Omit<MascotaAsesor, 'id'>,
  ): Promise<MascotaAsesor> {
    return this.mascotaAsesorRepository.create(mascotaAsesor);
  }

  @get('/mascota-asesors/count')
  @response(200, {
    description: 'MascotaAsesor model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(MascotaAsesor) where?: Where<MascotaAsesor>,
  ): Promise<Count> {
    return this.mascotaAsesorRepository.count(where);
  }

  @get('/mascota-asesors')
  @response(200, {
    description: 'Array of MascotaAsesor model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(MascotaAsesor, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(MascotaAsesor) filter?: Filter<MascotaAsesor>,
  ): Promise<MascotaAsesor[]> {
    return this.mascotaAsesorRepository.find(filter);
  }

  @patch('/mascota-asesors')
  @response(200, {
    description: 'MascotaAsesor PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MascotaAsesor, {partial: true}),
        },
      },
    })
    mascotaAsesor: MascotaAsesor,
    @param.where(MascotaAsesor) where?: Where<MascotaAsesor>,
  ): Promise<Count> {
    return this.mascotaAsesorRepository.updateAll(mascotaAsesor, where);
  }

  @get('/mascota-asesors/{id}')
  @response(200, {
    description: 'MascotaAsesor model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(MascotaAsesor, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(MascotaAsesor, {exclude: 'where'})
    filter?: FilterExcludingWhere<MascotaAsesor>,
  ): Promise<MascotaAsesor> {
    return this.mascotaAsesorRepository.findById(id, filter);
  }

  @get('/mascota-asesors/asesor/{id}')
  @response(200, {
    description: 'MascotaAsesor model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(MascotaAsesor, {includeRelations: true}),
      },
    },
  })
  async asesorById(
    @param.path.string('id') id: string,
  ): Promise<MascotaAsesor[]> {
    const filter: Filter<MascotaAsesor> = {
      where: {
        asesorId: id,
      },
      fields: {
        mascotaId: true,
      },
      offset: 0,
      skip: 0,
      order: [],
    };
    const data = await this.mascotaAsesorRepository.find(filter);

    return data;
  }

  @patch('/mascota-asesors/{id}')
  @response(204, {
    description: 'MascotaAsesor PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MascotaAsesor, {partial: true}),
        },
      },
    })
    mascotaAsesor: MascotaAsesor,
  ): Promise<void> {
    await this.mascotaAsesorRepository.updateById(id, mascotaAsesor);
  }

  @put('/mascota-asesors/{id}')
  @response(204, {
    description: 'MascotaAsesor PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() mascotaAsesor: MascotaAsesor,
  ): Promise<void> {
    await this.mascotaAsesorRepository.replaceById(id, mascotaAsesor);
  }

  @del('/mascota-asesors/{id}')
  @response(204, {
    description: 'MascotaAsesor DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.mascotaAsesorRepository.deleteById(id);
  }
}
