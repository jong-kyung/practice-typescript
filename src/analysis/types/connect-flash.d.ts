declare module "connect-flash" {
  global {
    namespace Express {
      interface Request {
        flash(message: string): void;
        flash(event: string, message: String): void;
        flash(): { [key: string]: string[] };
      }
    }
  }

  import express = require("express");
  function flash(): express.RequestHandler;
  export default flash;
}
