import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { PropertiesPrismaClientModule } from '@stratapro/properties-prisma-client';
import { AccountController } from './account.controller';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../auth/auth.guard';
import { UserMiddleware } from '../middleware/user.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
    }),
    PropertiesPrismaClientModule,
  ],
  controllers: [AccountController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AccountModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes('*');
  }
}
