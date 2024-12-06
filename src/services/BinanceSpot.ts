//./src/services/BinanceSpot.ts
import { Spot } from "@binance/connector-typescript";
import { Env } from "../config/Env";

export class BinanceSpot {
  private static instance: Spot | null = null;

  private constructor() {}

  public static getInstance(): Spot {
    if (!BinanceSpot.instance) {
      const env = Env.getInstance();

      BinanceSpot.instance = new Spot(
        env.BINANCE_API_KEY,
        env.BINANCE_API_SECRET,
        {
          baseURL: env.BINANCE_BASE_URL,
        },
      );
    }
    return BinanceSpot.instance;
  }

  // Método para resetar a instância (útil para testes)
  public static reset(): void {
    BinanceSpot.instance = null;
  }
}
