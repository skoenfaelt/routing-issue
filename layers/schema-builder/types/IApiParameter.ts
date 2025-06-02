export interface IApiParameter {
  name: string
  type: string | number | boolean
  required: boolean
  description: string
  bindingSource: 'Route' | 'Query'
}
