export interface IApiSchema {
  [domain: string]: {
    [controller: string]: {
      [endpoint: string]: IEndpointConfig
    }
  }
}
