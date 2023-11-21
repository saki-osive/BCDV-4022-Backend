import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {AccountsService} from "./accounts.service";
import {Account} from "./account.entity";

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) {}

    @Get()
    getAddresses(): Promise<string[]> {
        return this.accountsService.getAllAddresses();
    }

    @Get(':address/balance')
    async getBalance(@Param('address') address: string): Promise<{ address: string; balance: string }> {
        const formattedAddress = address.toLowerCase();
        return this.accountsService.getBalance(formattedAddress);
    }
}
