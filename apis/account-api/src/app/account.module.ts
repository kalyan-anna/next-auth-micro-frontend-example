import { Module } from '@nestjs/common';

import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { PropertiesPrismaClientModule } from '@stratapro/properties-prisma-client';

@Module({
  imports: [PropertiesPrismaClientModule],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
