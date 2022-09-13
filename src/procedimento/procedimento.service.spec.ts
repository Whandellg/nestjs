import { Test, TestingModule } from '@nestjs/testing';
import { ProcedimentoService } from './procedimento.service';

describe('ProcedimentoService', () => {
  let service: ProcedimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcedimentoService],
    }).compile();

    service = module.get<ProcedimentoService>(ProcedimentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
