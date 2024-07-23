import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { PropertiesPrismaClientModule } from '@stratapro/properties-prisma-client';
import { EstablishmentController } from './est.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
    }),
    PropertiesPrismaClientModule,
  ],
  controllers: [EstablishmentController],
  providers: [],
})
export class EstablishmentModule {}
