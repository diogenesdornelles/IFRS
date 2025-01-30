import axios, { AxiosInstance, AxiosError } from "axios";
import { TBook } from "../models/models";

export type TOperationType = "SEARCH" | "POST" | "PUT" | "DELETE" | "GET_ALL" | "GET_PAGE" | "GET_BY_ID" | "FILE";

export interface IQueryOptions {
  title?: string,
  description?: string,
  excerpt?: string,
  minPages?: number,
  maxPages?: number,
  minPublishDate?: string,
  maxPublishDate?: string,
}

export interface IGetPageOptions {
  page?: number,
  limit?: 5 | 10 | 20
}

export interface IRequestOptions {
  operation: TOperationType;
  data?: TBook;
  _id?: string | number;
  query?: IQueryOptions
  pageOptions?: IGetPageOptions;
  formData?: FormData
}

let queryParams;

class ApiService<T> {
  private axiosInstance: AxiosInstance;

  constructor(
    private baseURL: string = "http://localhost:3001/api/v1/Books/"
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
    query,
    pageOptions,
    _id,
    formData
  }: IRequestOptions): Promise<T | void> {
    try {
      let response;
      switch (operation) {
        case "GET_BY_ID":
          if (!_id) throw new Error("ID is required for get by id operations");
          response = await this.axiosInstance.get(`/${_id}`);
          break;
        case "SEARCH":
          queryParams = new URLSearchParams();
          if (!query) throw new Error("Query is required for search operations");
          if (query.title) queryParams.append("title", query.title);
          if (query.description) queryParams.append("description", query.description);
          if (query.excerpt) queryParams.append("excerpt", query.excerpt);
          if (query.minPages) queryParams.append("minPages", query.minPages.toString());
          if (query.maxPages) queryParams.append("maxPages", query.maxPages.toString());
          if (query.minPublishDate) queryParams.append("minPublishDate", query.minPublishDate);
          if (query.maxPublishDate) queryParams.append("maxPublishDate", query.maxPublishDate);
          response = await this.axiosInstance.get(`search/?${queryParams.toString()}`);
          break;
        case "GET_ALL":
          response = await this.axiosInstance.get("/");
          break;
        case "GET_PAGE":
          response = await this.axiosInstance.get(`/page?page=${pageOptions?.page}&limit=${pageOptions?.limit}`);
          break;
        case "POST":
          if (!data || Object.keys(data).length === 0) throw new Error("Data is required for POST operations");
          response = await this.axiosInstance.post("/", data);
          break;
        case "PUT":
          if (!_id) throw new Error("ID is required for PUT operations");
          if (!data || Object.keys(data).length === 0) throw new Error("Data is required for PUT operations");
          response = await this.axiosInstance.put(`/${_id}`, data);
          break;
        case "DELETE":
          if (!_id) throw new Error("ID is required for DELETE operations");
          response = await this.axiosInstance.delete(`/${_id}`);
          break;
        case "FILE":
          if (!_id) throw new Error("ID is required for PUT operations");
          if (!formData) throw new Error("Data is required for PUT operations");
          response = await this.axiosInstance.post(`/upload/${_id}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          break;
        default:
          throw new Error("Invalid operation type");
      }
      if (response) return response.data as T
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
