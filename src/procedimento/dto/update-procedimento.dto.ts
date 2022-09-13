import { PartialType } from '@nestjs/swagger';
import { CreateProcedimentoDto } from './create-procedimento.dto';
 
export class UpdateProcedimentoDto extends PartialType(CreateProcedimentoDto) {}