import {Injectable} from "@nestjs/common";
import Web3 from 'web3';

@Injectable()
export class AccountsService {

    private web3: Web3;

    constructor() {
        // Connect to your Ganache instance
        this.web3 = new Web3('http://localhost:7545'); // Update with your Ganache URL
    }

    async getAllAddresses(): Promise<string[]> {
        //return this.addressesConst;
        try {
            // Get the list of accounts from Ganache
            const accounts = await this.web3.eth.getAccounts();
            return accounts.map((account: string) => account.toLowerCase());
        } catch (error) {
            throw new Error(`Error getting accounts from Ganache: ${error.message}`);
        }
    }

    async getBalance(address: string): Promise<{ address: string; balance: string }> {
        try {
            // Get the balance of the specified address
            const balance = await this.web3.eth.getBalance(address);
            const formattedBalance = this.web3.utils.fromWei(balance, 'ether');

            return { address, balance: formattedBalance };
        } catch (error) {
            throw new Error(`Error getting balance for address ${address}: ${error.message}`);
        }
    }
}