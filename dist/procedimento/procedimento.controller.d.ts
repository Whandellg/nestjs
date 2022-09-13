import { ProcedimentoService } from './procedimento.service';
import { CreateProcedimentoDto } from './dto/create-procedimento.dto';
import { UpdateProcedimentoDto } from './dto/update-procedimento.dto';
export declare class ProcedimentoController {
    private readonly procedimentoService;
    constructor(procedimentoService: ProcedimentoService);
    create(createProcedimentoDto: CreateProcedimentoDto): Promise<import("./entities/procedimento.entity").Procedimento>;
    findAll(): Promise<import("./entities/procedimento.entity").Procedimento[]>;
    findOne(id: string): Promise<import("./entities/procedimento.entity").Procedimento>;
    update(id: string, updateProcedimentoDto: UpdateProcedimentoDto): Promise<import("./entities/procedimento.entity").Procedimento>;
    remove(id: string): Promise<import("./entities/procedimento.entity").Procedimento>;
}
