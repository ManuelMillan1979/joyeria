import { getJoyasLimitModel } from '../model/joyasModel.js';
import HATEOAS from '../utils/hateoas.js';
import {ERRORS} from '../utils/errors.js';

export const getJoyasLimitController = async (req, res) => {
try {
    const { order_by, limits, page } = req.query;
    const results = await getJoyasLimitModel(order_by, limits, page);
    const hateos = await HATEOAS(results.rows, results.count)

    res.status(200).json(hateos);
} catch (error) {
    console.log(error);
    return res
    .status(500)
    .json(ERRORS[error.code] || { error: "Internal error server" });
}
};

export const getJoyasFilterController = async (req, res) => {
try {
    const query = req.query;
    const data = await getJoyasFilterModel(query);
    res.status(200).json(data);
}
catch (error) {
    return res
    .status(500)
    .json({ error: "Error Filter" });
  }
};
