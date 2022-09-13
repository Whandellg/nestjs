import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProcedimentoService } from './procedimento.service';
import { CreateProcedimentoDto } from './dto/create-procedimento.dto';
import { UpdateProcedimentoDto } from './dto/update-procedimento.dto';

@Controller('procedimento')
export class ProcedimentoController {
  constructor(private readonly procedimentoService: ProcedimentoService) {}

  @Post()
  create(@Body() createProcedimentoDto: CreateProcedimentoDto) {
    return this.procedimentoService.create(createProcedimentoDto);
  }

  @Get()
  findAll() {
    return this.procedimentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.procedimentoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProcedimentoDto: UpdateProcedimentoDto) {
    return this.procedimentoService.update(id, updateProcedimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.procedimentoService.remove(id);
  }
}
