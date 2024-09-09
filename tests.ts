// convertFromUSD.test.js - Tests for the convertFromUSD function
import { convertFromUSD } from "@/src/shared/utils/tools";

test("converts 1 USD to NGN correctly", () => {
  const result = convertFromUSD(1, "NGN");
  expect(result).toBe(1587);
});

test("converts 1 USD to GBP correctly", () => {
  const result = convertFromUSD(1, "GBP");
  expect(result).toBeCloseTo(0.78); // Use toBeCloseTo for floating point precision
});

test("converts 0 USD to NGN correctly", () => {
  const result = convertFromUSD(0, "NGN");
  expect(result).toBe(0);
});

test("converts 0 USD to GBP correctly", () => {
  const result = convertFromUSD(0, "GBP");
  expect(result).toBe(0);
});

test("converts negative USD amount to NGN correctly", () => {
  const result = convertFromUSD(-1, "NGN");
  expect(result).toBe(-1587);
});

test("converts negative USD amount to GBP correctly", () => {
  const result = convertFromUSD(-1, "GBP");
  expect(result).toBeCloseTo(-0.78);
});

test("throws error for unsupported currency type", () => {
  expect(() => {
    convertFromUSD(1, "EUR");
  }).toThrow("Unsupported currency type");
});
