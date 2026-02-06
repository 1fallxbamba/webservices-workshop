import { Test, TestingModule } from '@nestjs/testing';
import { PartenersController } from './parteners.controller';

describe('partenersController', () => {
  let controller: partenersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [partenersController],
    }).compile();

    controller = module.get<partenersController>(partenersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
