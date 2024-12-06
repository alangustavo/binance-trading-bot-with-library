// ./tests/services/BinanceSpot.test.ts
import { BinanceSpot } from "../../src/services/BinanceSpot";
import { Env } from "../../src/config/Env";
import { Spot } from "@binance/connector-typescript";

// Mock das dependências
jest.mock("../../src/config/Env");
jest.mock("@binance/connector-typescript");

describe("BinanceSpot", () => {
  const mockEnv = {
    BINANCE_API_KEY: "test-api-key",
    BINANCE_API_SECRET: "test-api-secret",
    BINANCE_BASE_URL: "wss://testnet.binance.vision",
  };

  beforeEach(() => {
    // Reset do singleton e mocks antes de cada teste
    BinanceSpot.reset();
    (Env.getInstance as jest.Mock).mockReturnValue(mockEnv);
    jest.clearAllMocks();
  });

  it("should create a new instance when getInstance is called for the first time", () => {
    const instance = BinanceSpot.getInstance();

    expect(instance).toBeInstanceOf(Spot);
    expect(Spot).toHaveBeenCalledWith(
      mockEnv.BINANCE_API_KEY,
      mockEnv.BINANCE_API_SECRET,
      {
        baseURL: mockEnv.BINANCE_BASE_URL,
      },
    );
  });

  it("should return the same instance on subsequent calls", () => {
    const firstInstance = BinanceSpot.getInstance();
    const secondInstance = BinanceSpot.getInstance();

    expect(firstInstance).toBe(secondInstance);
    expect(Spot).toHaveBeenCalledTimes(1);
  });

  it("should create a new instance after reset", () => {
    const firstInstance = BinanceSpot.getInstance();
    BinanceSpot.reset();
    const secondInstance = BinanceSpot.getInstance();

    expect(firstInstance).not.toBe(secondInstance);
    expect(Spot).toHaveBeenCalledTimes(2);
  });
});
