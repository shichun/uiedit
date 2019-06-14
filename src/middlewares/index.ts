import statics from './statics'
import parser from './parser'
import { Application } from 'express'

export default (app: Application) => {
  statics(app)
  parser(app)
}
