import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
    }),
  ],
  providers: [PropertyService, PrismaService],
  exports: [PropertyService],
})
export class PropertiesPrismaClientModule {}
