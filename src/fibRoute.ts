// Endpoint for querying the fibonacci numbers

import { Request, Response } from "express";
import fibonacci from "./fib";

export default (req: Request<{ num: string }>, res: Response) => {
  try {
    const { num } = req.params;

    // Validate input
    const parsedNum : number = parseInt(num, 10)

    if (isNaN(parsedNum)) {
      return res.status(400).send("Invalid input")
    }

    if (parsedNum < 0) {
      return res.status(400).send("Input needs to be a non-negative integer")
    }

    const fibN : number = fibonacci(parsedNum);
    const result = `fibonacci(${num}) is ${fibN}`;

    res.send(result);
  }
  catch (e) {
    res.status(500).send("Internal server error")
  }
};
