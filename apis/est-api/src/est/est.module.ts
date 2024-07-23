import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { PropertiesPrismaClientModule } from '@stratapro/properties-prisma-client';
import { EstablishmentController } from './est.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../auth/auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
    }),
    PropertiesPrismaClientModule,
  ],
  controllers: [EstablishmentController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class EstablishmentModule {}
