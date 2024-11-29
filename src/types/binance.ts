// ./src/types/binance.ts

export interface BinanceConfig {
  apiKey: string;
  apiSecret: string;
  baseURL?: string;
  reconnectOptions?: ReconnectOptions;
}

export interface ReconnectOptions {
  maxRetries: number;
  delay: number; // delay in milliseconds
  backoffFactor: number; // multiplicative factor for each retry
}

export interface BinanceError extends Error {
  code?: number;
  url?: string;
  status?: number;
}

export enum BinanceErrorCodes {
  DISCONNECTED = -1001,
  UNAUTHORIZED = -2015,
  IP_BANNED = -2016,
  RATE_LIMIT = -429,
}
