import { pool } from '../db/config.js';
import format from 'pg-format';

export const getJoyasLimitModel = async (order_by = "id_ASC", limit = 5, page = 0) => {

const [field, direction] = order_by.split("_");

  const offset = page * limit;

const queryCount = format("SELECT COUNT(*) FROM inventario");
const formatQuery = format(
    "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s",
    field,
    direction,
    limit,
    offset
);

const response = await pool.query(formatQuery);
const count = await pool.query(queryCount);
return {
    count: count.rows[0].count,
    rows : response.rows,
};
};


export const getJoyasFilterModel = async (filter) => {
const { query, values } = await filterQuery("inventario", filter);

const sqlQuery = {
    text: query,
    values: values,
};

const response = await pool.query(sqlQuery);
return response.rows;
};
