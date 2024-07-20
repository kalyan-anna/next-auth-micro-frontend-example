import { Module } from '@nestjs/common';

import { PropertiesPrismaClientModule } from '@stratapro/properties-prisma-client';
import { AccountController } from './account.controller';

@Module({
  imports: [PropertiesPrismaClientModule],
  controllers: [AccountController],
  providers: [],
})
export class AccountModule {}
