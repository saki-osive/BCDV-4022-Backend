import { Controller, Get, Post, Body } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {}

    @Get('history')
    async getTransactionHistory(): Promise<any[]> {
        return this.transactionsService.getTransactionHistory();
    }

    @Post('send')
    async sendTransaction(@Body() body: { source: string; destination: string; value: number }): Promise<any> {
        const { source, destination, value } = body;
        return this.transactionsService.sendTransaction(source, destination, value);
    }
}