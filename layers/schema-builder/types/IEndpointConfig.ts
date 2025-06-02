export interface IEndpointConfig {
  path: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  description: string
  parameters?: IApiParameter[]
  requestModel: IRequestModel
  responses: IApiResponse[]
  header?: {
    Authorisation?: boolean
    Captcha?: boolean
  }
  version: string
}
