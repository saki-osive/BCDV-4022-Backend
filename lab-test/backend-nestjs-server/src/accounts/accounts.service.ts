import {Injectable} from "@nestjs/common";

@Injectable()
export class AccountsService {

    private readonly addressesConst = [
        "0x3DdfA8eC3052539b6C9549F12cEA2C295cfF5296",
        "0x6B175474E89094C44Da98b954EedeAC495271d0f",
        "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
        "0x7122db0Ebe4EB9B434a9F2fFE6760BC03BFbD0E0",
        "0x6c6Bc977E13Df9b0de53b251522280BB72383700",
        "0x1111111254EEB25477B68fb85Ed929f73A960582",
        "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
        "0xae7ab96520DE3A18E5e111B5EaAb095312D7FE84",
        "0xA910f92ACdAf488fa6eF02174fb86208Ad7722ba",
        "0x6782472a11987e6f4A8aFB10dEF25B498Cb622db",
        "0xDAC55181425c95D2D436C74768cC13937BbfA665",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "OxdAC17F958D2ee523a2206206994597C13D831ec7",
        "0x2260FAC5E5542a773Aa44fBCfeDF7C193bc2C599",
        "0x1ec4dE886d40d487366Cde7664767Db1DF6a02e7",
    ];
    getAllAddresses(): string[] {
        return this.addressesConst;
    }
}