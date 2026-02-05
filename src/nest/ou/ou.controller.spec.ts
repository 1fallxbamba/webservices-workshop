import { Test, TestingModule } from '@nestjs/testing';
import { OuController } from './ou.controller';

describe('OuController', () => {
  let controller: OuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OuController],
    }).compile();

    controller = module.get<OuController>(OuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
