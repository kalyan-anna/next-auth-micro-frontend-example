import { Injectable } from '@nestjs/common';
import { Email, Property } from '@prisma/client';
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

  async getProperty(propertyId: number): Promise<Property | null> {
    return this.prisma.property.findUnique({
      where: {
        id: propertyId,
      },
    });
  }

  async getUserEmails(propertyId: number): Promise<Email[] | []> {
    return this.prisma.email.findMany({
      where: {
        propertyId,
      },
    });
  }

  async getPropertyDetails(propertyId: number) {
    const property = await this.getProperty(propertyId);
    const emails = await this.getUserEmails(propertyId);
    return {
      ...property,
      userEmails: emails.map((item) => item.email as string),
    };
  }

  async addNewUser(propertyId: number, email: string) {
    await this.prisma.email.create({
      data: {
        email,
        Property: {
          connect: { id: propertyId },
        },
      },
    });
  }
}
