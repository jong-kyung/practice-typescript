//* 데코레이터는 클래스, 메서드, 프로퍼티, 파라미터에 사용할 수 있다.

//* 메서드 데코레이터는 고차함수이다.
function startAndEnd(start = "start", end = "end") {
  return function DealDecorator<This, Args extends any[], Return>(
    originalMethod: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
  ) {
    if (context.kind === "method") {
      return function replacementMethod(this: This, ...args: Args) {
        console.log(context.name, start);
        const result = originalMethod.call(this, ...args);
        console.log(context.name, end);
        return result;
      };
    }
    return originalMethod;
  };
}

//* 클래스 데코레이터
function log<Input extends new (...args: any[]) => any>(value: Input, context: ClassDecoratorContext) {
  if (context.kind === "class") {
    return class extends value {
      constructor(...args: any[]) {
        super(...args);
      }
      log(msg: string): void {
        console.log(msg);
      }
    };
  }
  return value;
}

function bound(originalMethod: unknown, context: ClassMethodDecoratorContext<any>) {
  const methodname = context.name;
  if (context.kind === "method") {
    context.addInitializer(function () {
      this[context.name] = this[context.name].bind(this);
    });
  }
}

@log
class A {
  @startAndEnd()
  @bound
  eat() {
    console.log("eat");
  }

  @bound
  @startAndEnd("시작", "끝")
  work() {
    console.log("work");
  }

  @startAndEnd()
  sleep() {
    console.log("sleep");
  }
}
