import axios, { AxiosError } from "axios";

export enum OP {
  GET_ALL_CATS,
  GET_PROD_BY_ID,
  GET_PRODS_BY_CAT,
}

class ApiService<T> {
  constructor() {
  }

  public async executeRequest(op: OP, param?: string
  ): Promise<T | void> {
    const axiosInstance = axios.create({
      baseURL: '',
      headers: {
        "Content-Type": "application/json",
      },
    });
    try {
      switch (op) {
        case OP.GET_ALL_CATS: {
          const response = await axiosInstance.get("https://api.escuelajs.co/api/v1/categories");
          return response.data;
        } case OP.GET_PRODS_BY_CAT: {
          const response = await axiosInstance.get("https://api.escuelajs.co/api/v1/products", {
            params: { categoryId: param }
          });
          return response.data;
        } case (OP.GET_PROD_BY_ID): {
          const response = await axiosInstance.get(`https://api.escuelajs.co/api/v1/products/${param}`);
          return response.data;
        }
      }
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  private handleError(error: AxiosError): void {
    if (error.response) {
      console.error(`Error: ${error.response.status} - ${error.response.data}`);
    } else if (error.request) {
      console.error("Error: No response received from server.");
    } else {
      console.error(`Error: ${error.message}`);
    }
  }
}

export default ApiService;