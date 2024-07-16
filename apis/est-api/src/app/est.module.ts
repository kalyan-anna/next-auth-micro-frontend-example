import { Module } from '@nestjs/common';

import { EstablishmentController } from './est.controller';
import { EstablishmentService } from './est.service';

@Module({
  imports: [],
  controllers: [EstablishmentController],
  providers: [EstablishmentService],
})
export class EstablishmentModule {}
