import { Test, TestingModule } from '@nestjs/testing';
import { PlalistsController } from './plalists.controller';

describe('PlalistsController', () => {
  let controller: PlalistsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlalistsController],
    }).compile();

    controller = module.get<PlalistsController>(PlalistsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
