import { DriversController } from './drivers.controller';
import { DriversService } from './drivers.service';
import { Role } from '@prisma/client';

describe('DriversController', () => {
  let controller: DriversController;

  const createDriverDto = {
    name: 'Max Verstappen',
    number: 1,
    nationality: 'Dutch',
    teamId: 'team-1',
  };

  const updateDriverDto = {
    nationality: 'Netherlands',
  };

  const driver = {
    id: 'driver-1',
    ...createDriverDto,
    team: null,
    createdAt: new Date('2026-01-01T00:00:00.000Z'),
    updatedAt: new Date('2026-01-01T00:00:00.000Z'),
  };

  const driversService: jest.Mocked<DriversService> = {
    create: jest.fn().mockResolvedValue(driver),
    findAll: jest.fn().mockResolvedValue([driver]),
    findOne: jest.fn().mockResolvedValue(driver),
    update: jest.fn().mockResolvedValue({ ...driver, ...updateDriverDto }),
    remove: jest.fn().mockResolvedValue(driver),
  } as unknown as jest.Mocked<DriversService>;

  beforeEach(() => {
    jest.clearAllMocks();
    controller = new DriversController(driversService);
  });

  it('creates a driver', async () => {
    await expect(controller.create(createDriverDto)).resolves.toEqual(driver);
    expect(driversService.create).toHaveBeenCalledWith(createDriverDto);
  });

  it('returns all drivers', async () => {
    await expect(controller.findAll()).resolves.toEqual([driver]);
    expect(driversService.findAll).toHaveBeenCalled();
  });

  it('returns one driver', async () => {
    await expect(controller.findOne('driver-1')).resolves.toEqual(driver);
    expect(driversService.findOne).toHaveBeenCalledWith('driver-1');
  });

  it('updates a driver', async () => {
    await expect(controller.update('driver-1', updateDriverDto)).resolves.toEqual({
      ...driver,
      ...updateDriverDto,
    });
    expect(driversService.update).toHaveBeenCalledWith('driver-1', updateDriverDto);
  });

  it('removes a driver', async () => {
    await expect(controller.remove('driver-1')).resolves.toEqual(driver);
    expect(driversService.remove).toHaveBeenCalledWith('driver-1');
  });

  it('uses admin role protection on write routes', () => {
    const createRoles = Reflect.getMetadata('roles', DriversController.prototype.create);
    const updateRoles = Reflect.getMetadata('roles', DriversController.prototype.update);
    const removeRoles = Reflect.getMetadata('roles', DriversController.prototype.remove);

    expect(createRoles).toEqual([Role.ADMIN]);
    expect(updateRoles).toEqual([Role.ADMIN]);
    expect(removeRoles).toEqual([Role.ADMIN]);
  });
});
