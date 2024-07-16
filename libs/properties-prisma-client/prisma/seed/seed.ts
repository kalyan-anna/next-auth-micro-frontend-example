import { PrismaClient, Property } from '@prisma/client';

const prisma = new PrismaClient();

const data = [
  {
    id: 1,
    propertyName: 'CityCenter Plaza',
    propertyType: 'commercial',
    noOfUnits: 23,
    userEmails: {
      create: {
        id: 1,
        email: 'kalyan.shelf@gmail.com',
      },
    },
  },
  {
    id: 2,
    propertyName: 'Prime Commerce Building',
    propertyType: 'commercial',
    noOfUnits: 7,
    userEmails: {
      create: {
        id: 2,
        email: 'kalyan.shelf@gmail.com',
      },
    },
  },
  {
    id: 3,
    propertyName: 'Sunnyvale Apartments',
    propertyType: 'residential',
    noOfUnits: 17,
    userEmails: {
      create: {
        id: 3,
        email: 'kalyan.shelf@gmail.com',
      },
    },
  },
  {
    id: 4,
    propertyName: 'Parkview Condominiums',
    propertyType: 'residential',
    noOfUnits: 11,
    userEmails: {
      create: {
        id: 4,
        email: 'kalyan.shelf@gmail.com',
      },
    },
  },
];

export async function seedData() {
  for (const item of data) {
    await prisma.property.create({
      data: {
        ...item,
      },
      include: {
        userEmails: true,
      },
    });
  }
}
