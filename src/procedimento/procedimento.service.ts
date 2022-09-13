import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProcedimentoDto } from './dto/create-procedimento.dto';
import { UpdateProcedimentoDto } from './dto/update-procedimento.dto';
import { Procedimento } from './entities/procedimento.entity';

@Injectable()
export class ProcedimentoService {
 constructor(@InjectRepository(Procedimento) private readonly repository: Repository<Procedimento>) { }

 create(createProcedimentoDto: CreateProcedimentoDto): Promise<Procedimento> {
   const procedimento = this.repository.create(createProcedimentoDto);
   return this.repository.save(procedimento);
 }

 findAll(): Promise<Procedimento[]> {
   return this.repository.find();
 }

 findOne(id: any): Promise<Procedimento> {
   return this.repository.findOne(id);
 }

 async update(id: string, updateProcedimentoDto: UpdateProcedimentoDto): Promise<Procedimento> {
   const procedimento = await this.repository.preload({
     id: id,
     ...updateProcedimentoDto,
   });
   if (!procedimento) {
     throw new NotFoundException(`Procedimento ${id} not found`);
   }
   return this.repository.save(procedimento);
 }

 async remove(id: string) {
   const procedimento = await this.findOne(id);
   return this.repository.remove(procedimento);
 }
}
