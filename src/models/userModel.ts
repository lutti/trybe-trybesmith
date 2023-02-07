import { ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';
import connection from './connection';

const createUser = async (user: IUser): Promise<IUser> => {
  const [result] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.users
    (username, vocation, level, password)
    VALUES(?, ?, ?, ?);`,
    [user.username, user.vocation, user.level, user.password],
  );
  const retorno = { ...user, id: result.insertId };
  return retorno;
};

export default { createUser };