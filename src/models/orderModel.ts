import { RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces';
import connection from './connection';

const getAll = async (): Promise<IOrder[]> => {
  const [result] = await connection.execute<RowDataPacket[] & IOrder[]>(
    `SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds 
    FROM Trybesmith.products AS p
    INNER JOIN Trybesmith.orders AS o ON o.id = p.order_id
    GROUP BY o.id, o.user_id;`,
  );
  return result;
};

export default { getAll };