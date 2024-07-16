import { Module } from '@nestjs/common';

import { EstablishmentController } from './est.controller';
import { EstablishmentService } from './est.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
    }),
  ],
  controllers: [EstablishmentController],
  providers: [EstablishmentService],
})
export class EstablishmentModule {}
