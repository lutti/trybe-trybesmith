import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces';
import connection from './connection';

const getAll = async (): Promise<IProduct[]> => {
  const [rows] = await connection.execute<RowDataPacket[] & IProduct[]>(
    `SELECT id, name, amount, order_id as orderId
    FROM Trybesmith.products;`,
  );
  return rows;
};

const createProduct = async (prod: IProduct): Promise<IProduct> => {
  const [result] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.products
    (name, amount, order_id)
    VALUES( ?, ?, ?);`,
    [prod.name, prod.amount, null],
  );
  const retorno = { ...prod, id: result.insertId };
  return retorno;
};

export default { getAll, createProduct };