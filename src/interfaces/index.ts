export interface IProduct {
  id: number,
  name: string,
  amount: string,
  orderId: number
}

export interface IUser {
  id: number,
  username: string,
  vocation: string,
  level: number,
  password: string
}

export interface IOrder {
  id: number,
  orderId: number,
  productsIds: number[]
}