import { Injectable } from '@nestjs/common';
import { Property } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class PropertyService {
  constructor(private prisma: PrismaService) {}

  async getAllProperties(email: string): Promise<Property[] | []> {
    return this.prisma.property.findMany({
      where: {
        userEmails: {
          some: {
            email,
          },
        },
      },
    });
  }
}
