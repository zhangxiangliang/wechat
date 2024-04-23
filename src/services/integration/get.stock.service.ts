import { stocks } from "stock-api";

export const getStockService = async (code: string) => {
  try {
    const stock = await stocks.netease.getStock(code);

    return {
      name: stock.name,
      now: stock.now,
      low: stock.low,
      high: stock.high,
      yesterday: stock.yesterday
    };
  } catch (e) {
    return { name: 'Unknow', now: 0, low: 0, high: 0, yesterday: 0 };
  }
};
