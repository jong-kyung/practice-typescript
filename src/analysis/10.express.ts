import express, { ErrorRequestHandler, RequestHandler } from "express";

// Express 대략적인 타입 형태 예상
// interface Express {
//   (): App;
//   json: () => Middleware;
//   urlEncoded: ({extended?: boolean}) => Middleware;
//   static: (path: string) => Middleware;
// }

const app = express();

app.use(express.json()); // body-parser
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static("public"));

// 미들웨어는 RequestHandler 타입이다.
const middleware: RequestHandler<
  { paramType: string },
  { message: string },
  { bodyType: number },
  { queryType: boolean },
  { localType: unknown }
> = (req, res, next) => {
  req.params.paramType;
  req.body.bodyType;
  req.query.queryType;
  res.locals.localType;
  res.json({ message: "Hello World" });
};

app.get("/", middleware);

const errorMiddleware: ErrorRequestHandler = (err: Error, req, res, next) => {
  console.error(err.status);
};

app.use(errorMiddleware);

app.listen(8080, () => {});
