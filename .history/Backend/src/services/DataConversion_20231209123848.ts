
export class DataConversionService {
    public convertOrderId(orderId: string): number {
      return parseInt(orderId);
    }
  }
  