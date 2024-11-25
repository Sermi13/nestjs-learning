import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { EnvConfigModule } from './shared/infrastructure/env-config/env-config.module';
import { UsersModule } from './users/infrastructure/users.module';

@Module({
  imports: [ConfigModule, EnvConfigModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
