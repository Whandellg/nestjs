import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Procedimento } from './entities/procedimento.entity';
import { ProcedimentoService } from './procedimento.service';
import { ProcedimentoController } from './procedimento.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Procedimento])],
  controllers: [ProcedimentoController],
  providers: [ProcedimentoService]
 })
 export class ProcedimentoModule { }




