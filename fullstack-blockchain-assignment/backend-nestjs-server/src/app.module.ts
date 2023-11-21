import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [AccountsModule,
    TransactionsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/blockchain-explorer'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
