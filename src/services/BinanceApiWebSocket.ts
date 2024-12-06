//./src/services/BinanceApiWebSocket.ts
import { WebsocketAPI } from "@binance/connector-typescript";
import { BinanceWebsocketInstance } from "./interfaces/BinanceInterfaces";
import { Env } from "../config/Env";

export class BinanceApiWebSocket {
  private static instance: BinanceWebsocketInstance | null = null;

  private constructor() {}

  public static getInstance(): BinanceWebsocketInstance {
    if (!BinanceApiWebSocket.instance) {
      const env = Env.getInstance();

      BinanceApiWebSocket.instance = new WebsocketAPI(
        env.BINANCE_API_KEY,
        env.BINANCE_API_SECRET,
        { wsURL: env.BINANCE_BASE_URL }, // Assumindo que `baseUrl` é usado para WebSocket também
      ) as BinanceWebsocketInstance;
    }
    return BinanceApiWebSocket.instance;
  }

  public static reset(): void {
    BinanceApiWebSocket.instance = null;
  }

  // Método apenas para testes
  public static getInstanceForTesting(): BinanceWebsocketInstance | null {
    return BinanceApiWebSocket.instance;
  }
}
