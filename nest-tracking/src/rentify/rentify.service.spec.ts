import { Test, TestingModule } from '@nestjs/testing';
import { RentifyService } from './rentify.service';

describe('RentifyService', () => {
  let service: RentifyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentifyService],
    }).compile();

    service = module.get<RentifyService>(RentifyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
