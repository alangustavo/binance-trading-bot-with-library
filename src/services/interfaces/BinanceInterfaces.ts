// ./src/services/interfaces/BinanceInterfaces.ts
import { WebsocketAPI } from "@binance/connector-typescript";

export interface BinanceWebsocketInstance extends WebsocketAPI {
  closeAllConnections: () => void;
}

export interface Balance {
  asset: string;
  free: string;
  locked: string;
}

export interface BalanceUpdate {
  e: string; // Event type
  E: number; // Event time
  a: string; // Asset
  d: string; // Balance delta
  T: number; // Clear time
}

export interface AccountUpdate {
  e: string; // Event type
  E: number; // Event time
  u: number; // Time of last account update
  B: Array<{
    // Balances Array
    a: string; // Asset
    f: string; // Free amount
    l: string; // Locked amount
  }>;
}
