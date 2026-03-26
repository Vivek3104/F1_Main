import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';

import { DatabaseModule } from './database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { TeamsModule } from './modules/teams/teams.module';
import { DriversModule } from './modules/drivers/drivers.module';
import { CircuitsModule } from './modules/circuits/circuits.module';
import { RacesModule } from './modules/races/races.module';
import { StandingsModule } from './modules/standings/standings.module';
import { LiveModule } from './modules/live/live.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig],
    }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    TeamsModule,
    DriversModule,
    CircuitsModule,
    RacesModule,
    StandingsModule,
    LiveModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
