import { Repository } from 'typeorm';
import { CreateProcedimentoDto } from './dto/create-procedimento.dto';
import { UpdateProcedimentoDto } from './dto/update-procedimento.dto';
import { Procedimento } from './entities/procedimento.entity';
export declare class ProcedimentoService {
    private readonly repository;
    constructor(repository: Repository<Procedimento>);
    create(createProcedimentoDto: CreateProcedimentoDto): Promise<Procedimento>;
    findAll(): Promise<Procedimento[]>;
    findOne(id: any): Promise<Procedimento>;
    update(id: string, updateProcedimentoDto: UpdateProcedimentoDto): Promise<Procedimento>;
    remove(id: string): Promise<Procedimento>;
}
