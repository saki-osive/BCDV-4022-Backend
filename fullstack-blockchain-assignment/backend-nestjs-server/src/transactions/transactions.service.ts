import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TransactionsService {
    constructor(@InjectModel('Transaction') private readonly transactionModel: Model<any>) {}

    async getTransactionHistory(): Promise<any[]> {
        try {
            const transactions = await this.transactionModel.find().exec();
            return transactions;
        } catch (error) {
            throw new Error(`Error fetching transaction history: ${error.message}`);
        }
    }

    async sendTransaction(source: string, destination: string, value: number): Promise<any> {
        // Implement mock logic for sending transactions
        const receipt = {
            transactionHash: '0x123abc',
            status: 'success',
            timestamp: new Date(),
        };
        return receipt;
    }
}
