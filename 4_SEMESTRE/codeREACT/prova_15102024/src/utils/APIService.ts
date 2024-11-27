import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { TLivro } from "../models/models";

export type OperationType = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface RequestOptions {
  operation: OperationType;
  data?: TLivro;
  id?: string | number;
}

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor(
    private baseURL: string = "https://fakerestapi.azurewebsites.net/api/v1/Books"
  ) {
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async executeRequest({
    operation,
    data,
    id,
  }: RequestOptions): Promise<AxiosResponse | void> {
    try {
      let response: AxiosResponse;

      switch (operation) {
        case "GET":
          response = await this.axiosInstance.get(id ? `/${id}` : "/");
          break;
        case "POST":
          response = await this.axiosInstance.post("/", data);
          break;
        case "PUT":
          if (!id) throw new Error("ID is required for PUT operations");
          response = await this.axiosInstance.put(`/${id}`, data);
          break;
        case "PATCH":
          if (!id) throw new Error("ID is required for PATCH operations");
          response = await this.axiosInstance.patch(`/${id}`, data);
          break;
        case "DELETE":
          if (!id) throw new Error("ID is required for DELETE operations");
          response = await this.axiosInstance.delete(`/${id}`);
          break;
        default:
          throw new Error("Invalid operation type");
      }

      return response;
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
