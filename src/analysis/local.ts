import passport from "passport";
import { Strategy } from "passport-local";

//* passport의 strategy 타이핑 연습
interface Option {
  usernameField: string;
  passwordField: string;
  passReqToCallback?: false;
}

interface OptionWithReq {
  usernameField: string;
  passwordField: string;
  passReqToCallback: true;
}

interface Done {
  (err: unknown | null, user?: Express.User | false, info?: unknown): void;
}

interface Callback {
  (userId: string, passwrod: String, done: Done): void;
}

interface CallbackWithReq {
  (req: Express.Request, userId: string, passwrod: String, done: Done): void;
}

declare class S {
  constructor(option: Option, callback: Callback);
  constructor(option: OptionWithReq, callback: CallbackWithReq);

  authenticate(): void;
}

const startegy: S = new S(
  { usernameField: "userId", passwordField: "password", passReqToCallback: false },
  async (userId, password, done) => {
    try {
      return done(null, false, { message: "비밀번호가 틀립니다." });
    } catch (err) {
      console.error(err);
      return done(err);
    }
  }
);

export default () => {
  passport.use("local", startegy);
};
