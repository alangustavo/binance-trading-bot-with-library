// ./tests/services/BinanceApiWebSocket.test.ts
import { BinanceApiWebSocket } from "../../src/services/BinanceApiWebSocket";
import { Env } from "../../src/config/Env";
import { WebsocketAPI } from "@binance/connector-typescript";

// Mock das dependências
jest.mock("../../src/config/Env");
jest.mock("@binance/connector-typescript");

describe("BinanceApiWebSocket", () => {
  const mockEnv = {
    BINANCE_API_KEY: "test-api-key",
    BINANCE_API_SECRET: "test-api-secret",
    BINANCE_BASE_URL: "wss://testnet.binance.vision",
  };

  beforeEach(() => {
    // Reset do singleton e mocks antes de cada teste
    BinanceApiWebSocket.reset();
    (Env.getInstance as jest.Mock).mockReturnValue(mockEnv);
    jest.clearAllMocks();
  });

  it("should create a new instance when getInstance is called for the first time", () => {
    const instance = BinanceApiWebSocket.getInstance();

    expect(instance).toBeInstanceOf(WebsocketAPI);
    expect(WebsocketAPI).toHaveBeenCalledWith(
      mockEnv.BINANCE_API_KEY,
      mockEnv.BINANCE_API_SECRET,
      {
        wsURL: mockEnv.BINANCE_BASE_URL,
      },
    );
  });

  it("should return the same instance on subsequent calls", () => {
    const firstInstance = BinanceApiWebSocket.getInstance();
    const secondInstance = BinanceApiWebSocket.getInstance();

    expect(firstInstance).toBe(secondInstance);
    expect(WebsocketAPI).toHaveBeenCalledTimes(1);
  });

  it("should create a new instance after reset", () => {
    const firstInstance = BinanceApiWebSocket.getInstance();
    BinanceApiWebSocket.reset();
    const secondInstance = BinanceApiWebSocket.getInstance();

    expect(firstInstance).not.toBe(secondInstance);
    expect(WebsocketAPI).toHaveBeenCalledTimes(2);
  });

  it("should return null when getInstanceForTesting is called without initialization", () => {
    BinanceApiWebSocket.reset();
    const instance = BinanceApiWebSocket.getInstanceForTesting();

    expect(instance).toBeNull();
  });

  it("should return current instance when getInstanceForTesting is called after initialization", () => {
    const instance = BinanceApiWebSocket.getInstance();
    const testInstance = BinanceApiWebSocket.getInstanceForTesting();

    expect(testInstance).toBe(instance);
  });
});
