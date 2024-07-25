import cookieParser from "cookie-parser";
import express, { ErrorRequestHandler, RequestHandler } from "express";
import session from "express-session";
import passport from "passport";
import flash from "connect-flash";

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

app.use(cookieParser()); // cookie-parser
app.use(
  session({
    secret: "secret",
  })
);
app.use(passport.initialize()); // passport
app.use(passport.session()); // passport

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

  req.cookies; // cookie-parser
  req.session; // express-session
  req.isAuthenticated(); // passport
  req.user?.front; // passport 타입 확장하기

  req.flash("플래시 메시지"); // 값을 설정한다.
  const a = req.flash(); // 값을 가져온다.
  req.flash(); // undefined가 된다.
};

app.get("/", middleware);

const errorMiddleware: ErrorRequestHandler = (err: Error, req, res, next) => {
  console.error(err.status);
};

app.use(errorMiddleware);

app.listen(8080, () => {});
