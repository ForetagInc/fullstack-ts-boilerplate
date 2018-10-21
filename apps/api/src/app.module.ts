import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TerminusModule } from '@brunnerlivio/terminus';

import { GraphqlOptions } from './graphql.options';
import { TerminusService } from './terminus.service';

import { CommonModule } from './common.module';
import { PrismaModule } from './prisma';
import { UserModule } from './user';
// import { AuthModule } from './auth';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    TerminusModule.forRootAsync({
      useClass: TerminusService,
    }),
    CommonModule,
    // AuthModule,
    PrismaModule,
    UserModule,
  ],
})
export class AppModule {}
