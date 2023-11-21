const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const {connect, connection} = require("mongoose");

const connectionString = "mongodb://localhost:27017/blockchain-explorer";
connect(connectionString, { useNewUrlParser: true });

const transactionSchema = new Schema({
    source: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    gasUsed: {
        type: Number,
        default: null, // Optional field, defaults to null if not provided
    },
    receiptHash: {
        type: String,
        default: null, // Optional field, defaults to null if not provided
    },
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema);

const seedData = [
    {
        source: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
        destination: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
        amount: 10,
        status: 'success',
        gasUsed: 200,
        receiptHash: '0xabc123',
    },
    {
        source: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
        destination: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
        amount: 10,
        status: 'success',
        gasUsed: 200,
        receiptHash: '0xabc123',
    },
    {
        source: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
        destination: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
        amount: 10,
        status: 'success',
        gasUsed: 200,
        receiptHash: '0xabc123',
    },
];

Transaction.insertMany(seedData)
    .then(() => {
        console.log("Transaction data inserted successfully");
        connection.close();
    })
    .catch(error => {
        console.error("Error loading Transaction data:", error);
        connection.close();
    });
