import { test } from '@playwright/test';

// 1. Make `@step` executable to enable function arguments
export function step(stepName?: string) {
  // 2. Return the original decorator
  return function decorator(target: Function, context: ClassMethodDecoratorContext) {
    
    const methodName = context.name as string;
    const hasStepName = stepName !== undefined;
    
    return function replacementMethod(...args: any) {
      // 3. Use `stepName` when it's defined or
      // fall back to class name / method name
      
      const name = hasStepName ? stepName! : `${this.constructor.name}.${methodName}`;
      return test.step(name, async () => {
        return await target.call(this, ...args);
      });
    };
  };
}
