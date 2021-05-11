import { IBook } from '@books/common'
import _ from 'lodash'

export class Book implements IBook {
  id: string
  title: string
  description: string
  year: number

  constructor(id: string, title: string, description: string, year: number) {
    this.id = id
    this.title = title
    this.description = description
    this.year = year
  }

  get shortDescription(): string {
    return _.truncate(this.description, {
      length: 20,
    })
  }
}
