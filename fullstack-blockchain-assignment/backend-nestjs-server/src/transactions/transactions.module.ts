import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import {MongooseModule} from "@nestjs/mongoose";
import {TransactionSchema} from "./transaction.model";
import {TransactionsController} from "./transactions.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Transaction', schema: TransactionSchema }]),
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
