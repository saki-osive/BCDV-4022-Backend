import * as mongoose from 'mongoose';

export const TransactionSchema = new mongoose.Schema({
    source: { type: String, required: true },
    destination: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, required: true },
    gasUsed: { type: Number, required: true },
    receiptHash: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

export interface Transaction extends mongoose.Document {
    source: string;
    destination: string;
    amount: number;
    status: string;
    gasUsed: number;
    receiptHash: string;
    timestamp: Date;
}