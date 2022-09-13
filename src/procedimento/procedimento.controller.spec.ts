import { Test, TestingModule } from '@nestjs/testing';
import { ProcedimentoController } from './procedimento.controller';
import { ProcedimentoService } from './procedimento.service';

describe('ProcedimentoController', () => {
  let controller: ProcedimentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProcedimentoController],
      providers: [ProcedimentoService],
    }).compile();

    controller = module.get<ProcedimentoController>(ProcedimentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
