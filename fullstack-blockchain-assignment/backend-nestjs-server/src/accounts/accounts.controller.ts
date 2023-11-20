import {Body, Controller, Get, Post} from "@nestjs/common";
import {AccountsService} from "./accounts.service";
import {Account} from "./account.entity";

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) {}

    @Get()
    getAllBooks(): string[] {
        return this.accountsService.getAllAddresses();
    }
}
