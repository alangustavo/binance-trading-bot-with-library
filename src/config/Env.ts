import * as dotenv from "dotenv";

export class Env {
  private static instance: Env;

  public BINANCE_API_KEY: string;
  public BINANCE_API_SECRET: string;
  public BINANCE_BASE_URL: string;
  public TELEGRAM_BOT_TOKEN: string;
  public TELEGRAM_CHAT_ID: string;

  private constructor() {
    dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

    // Verifica se todas as variáveis de ambiente essenciais estão presentes
    this.BINANCE_API_KEY = process.env.BINANCE_API_KEY || "";
    this.BINANCE_API_SECRET = process.env.BINANCE_API_SECRET || "";
    this.BINANCE_BASE_URL = process.env.BINANCE_BASE_URL || "";
    this.TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
    this.TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "";

    this.checkRequiredVariables();
  }

  private checkRequiredVariables(): void {
    const missingVariables = [];
    if (!this.BINANCE_API_KEY) missingVariables.push("BINANCE_API_KEY");
    if (!this.BINANCE_API_SECRET) missingVariables.push("BINANCE_API_SECRET");
    if (!this.BINANCE_BASE_URL) missingVariables.push("BINANCE_BASE_URL");
    if (!this.TELEGRAM_BOT_TOKEN) missingVariables.push("TELEGRAM_BOT_TOKEN");
    if (!this.TELEGRAM_CHAT_ID) missingVariables.push("TELEGRAM_CHAT_ID");

    if (missingVariables.length > 0) {
      throw new Error(
        `Missing environment variables: ${missingVariables.join(", ")}`,
      );
    }
  }

  public static getInstance(): Env {
    if (!Env.instance) {
      Env.instance = new Env();
    }
    return Env.instance;
  }
}
