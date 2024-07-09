interface Props {
  errors?: Record<string, string[]>
  message?: string
}

export class BadRequest extends Error {
  errors: Record<string, string[]> | undefined
  code: number
  constructor( {message, errors}: Props) {
    super('Bad Request'); 
    this.errors = errors
    this.message = message ?? 'Bad Request'
    this.name = 'Bad Request'
    this.code = 400
  }
}