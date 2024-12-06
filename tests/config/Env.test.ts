import { Env } from "../../src/config/Env";

describe("Env", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Limpa mocks após cada teste
  });

  it("should throw an error when environment variables are missing", () => {
    // Simula a ausência de todas as variáveis de ambiente
    process.env.BINANCE_API_KEY = "";
    process.env.BINANCE_API_SECRET = "";
    process.env.BINANCE_BASE_URL = "";
    process.env.TELEGRAM_BOT_TOKEN = "";
    process.env.TELEGRAM_CHAT_ID = "";

    expect(() => Env.getInstance()).toThrow(
      "Missing environment variables: BINANCE_API_KEY, BINANCE_API_SECRET, BINANCE_BASE_URL, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID",
    );
  });

  it("should throw an error when some environment variables are missing", () => {
    // Simula a ausência de algumas variáveis de ambiente
    process.env.BINANCE_API_KEY = "test_api_key";
    process.env.BINANCE_API_SECRET = "";
    process.env.BINANCE_BASE_URL = "";
    process.env.TELEGRAM_BOT_TOKEN = "test_bot_token";
    process.env.TELEGRAM_CHAT_ID = "";

    expect(() => Env.getInstance()).toThrow(
      "Missing environment variables: BINANCE_API_SECRET, BINANCE_BASE_URL, TELEGRAM_CHAT_ID",
    );
  });

  it("should return the same instance (singleton pattern)", () => {
    process.env.BINANCE_API_KEY = "test_api_key";
    process.env.BINANCE_API_SECRET = "test_api_secret";
    process.env.BINANCE_BASE_URL = "https://api.binance.com";
    process.env.TELEGRAM_BOT_TOKEN = "test_bot_token";
    process.env.TELEGRAM_CHAT_ID = "test_chat_id";

    const firstInstance = Env.getInstance(); // Primeira instância
    const secondInstance = Env.getInstance(); // Segunda chamada

    // Verifica se as duas instâncias são a mesma, garantindo que a linha 44 foi executada
    expect(firstInstance).toBe(secondInstance); // A linha 44 deve ser coberta aqui
  });
});
