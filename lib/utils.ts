export { cn } from "cn";

export const parseToJSON = <T>(data: unknown): T | null => {
  try {
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const formatToCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(amount);
};
