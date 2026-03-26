import { PrismaClient, Role, StandingType, RaceStatus } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting un-opinionated F1 backend seeding...');

  // Roles + Default admin
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@f1backend.com' },
    update: {},
    create: {
      email: 'admin@f1backend.com',
      name: 'System Administrator',
      password: adminPassword,
      role: Role.ADMIN,
    },
  });

  console.log({ admin });

  // Add sample team
  const redBull = await prisma.team.upsert({
    where: { name: 'Red Bull Racing' },
    update: {},
    create: {
      name: 'Red Bull Racing',
      principal: 'Christian Horner',
      base: 'Milton Keynes, United Kingdom',
    },
  });

  // Add sample driver
  const maxVerstappen = await prisma.driver.upsert({
    where: { number: 1 },
    update: {},
    create: {
      name: 'Max Verstappen',
      number: 1,
      nationality: 'Dutch',
      teamId: redBull.id,
    },
  });

  // Add sample circuit
  const bahrainCircuit = await prisma.circuit.create({
    data: {
      name: 'Bahrain International Circuit',
      location: 'Sakhir',
      country: 'Bahrain',
      length: 5.412,
    },
  });

  // Add sample race
  const bahrainGp = await prisma.race.create({
    data: {
      name: 'Bahrain Grand Prix',
      date: new Date('2024-03-02T15:00:00Z'),
      circuitId: bahrainCircuit.id,
      status: RaceStatus.FINISHED,
    },
  });

  // Add standings
  await prisma.standing.create({
    data: {
      type: StandingType.DRIVER,
      season: 2024,
      points: 26,
      position: 1,
      driverId: maxVerstappen.id,
    },
  });

  console.log('Seeding completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
