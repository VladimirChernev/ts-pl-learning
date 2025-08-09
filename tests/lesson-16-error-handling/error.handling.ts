
// Why handle errors?
// Errors are a part of programming, and they can occur for various reasons, such as network issues, invalid user input, or unexpected conditions in the code. Handling errors allows you to gracefully manage these situations, providing a better user experience and preventing crashes or unexpected behavior in your application.
// By catching and handling errors, you can log them, display user-friendly messages, or take corrective actions, ensuring that your application remains robust and reliable even in the face of unexpected issues.

// How to handle errors in TypeScript:
// the try catch statement allows you to test a block of code for errors:

try {
  // Block of code to try
} catch (err) {
  // Block of code to handle errors
  throw 'Error occurred: ' + err.message; // throw a custom error message
} finally {
  // Block of code to be executed regardless of the try / catch result
}

// example
try {
  console.log('Run/Test this code');
} catch (err) {
  console.log('Run this code when there is an error');
  throw 'Actual Error: ' + err.message; // throw a custom error message
} finally {
  console.log('Run this code always');
}
  

// The 5 rules of Error Handling in TypeScript:

// #1: Make sure Errors are, well… Errors
// In the magnificent JavaScript (Typescript) world, you might not be aware, but you can throw anything, not only Error instances.
// wrong example:
function throwNumber() {
  throw 123;
}

try {
  throwNumber();
} catch (err) {
  // type of err is 'number' not 'Error'
  console.log(err); // 123
}

// check if an error is an instance of Error
function ensureError(value: unknown): Error {
  if (value instanceof Error) return value;

  let stringified = '[Unable to stringify the thrown value]';
  try {
    stringified = JSON.stringify(value);
  } catch {
    /* empty */
  }

  const error = new Error(`This value was thrown as is, not through an Error: ${stringified}`);
  return error;
}

// correct example:
try {
  throw new Error('Running fragile operation failed');
} catch (err) {
  const error = ensureError(err);

  console.log(error.message);
}

// #2: Don’t lose your stack trace
// wrong example:
try {
  throw new Error('Running fragile operation failed');
} catch (err) {
  const error = ensureError(err);

  throw new Error(`Running fragile operation failed: ${error.message}`);
}

// correct example:
const error1 = new Error('Network error');
const error2 = new Error('The update failed', { cause: error1 }); // chaining always errors keeps stack trace

console.log(error2);

// #3: Use constant error messages
// wrong example:
// try {
//   await logRequest(requestId, { elapsedTime });
// } catch (err) {
//   const error = ensureError(err);

//   throw new Error(`Could not log request with ID "${requestId}"`, { cause: error });
// }
// Imagine that logRequest logs the request in a database, and the database fails. If 1 000 requests fail due to this, there will be 1 000 different error messages:
// Could not log request with ID "9r7S8_ZoobNwRKafaVeP7"
// Could not log request with ID "v2zGvKj-JVdFg_vjJyUP1"
// Could not log request with ID "CaU_eS8olPcbbxfIPiUWN"
// [...]

// correct example:
//The solution to this is to make sure your error messages are constant. The variable data should be set as part of the error context (or metadata or any other name you prefer).
// type Jsonable = string | number | boolean | null | undefined | readonly Jsonable[] | { readonly [key: string]: Jsonable } | { toJSON(): Jsonable };

// export class BaseError extends Error {
//   public readonly context?: Jsonable;

//   constructor(message: string, options: { error?: Error; context?: Jsonable } = {}) {
//     const { cause, context } = options;

//     super(message, { cause });
//     this.name = this.constructor.name;

//     this.context = context;
//   }
// }

// #4: Provide the right amount of context
// This is a small one, but an important one nonetheless: attach the relevant data to your error context. Providing too little or too much context will make it harder for you to debug issues. Take the following example:
// try {
//   await billCustomer(customer.id, quote.amount);
// } catch (err) {
//   const error = ensureError(err);

//   throw new BaseError('Could not bill customer', {
//     cause: error,
//     context: { customer, quote },
//   });
// }
// There’s probably too much context here: chances are, to debug this, you’ll only need the customer.id and quote.amount. Debugging the issue, in this case, will require you to dig through the whole context, which might be huge (e.g. the quote could have a lot of information). Also, what if there are sensitive data in customer? Having your customer's personal information in your error monitoring platform is probably not something you want.
// In this case, providing customerId and quoteAmount would have been enough.

// #5: Don’t throw errors for problems that are expected to happen
// Because of the nature of TypeScript, throwing errors should be considered a last resort, something that is hard or impossible to recover from.
// Indeed, unlike other languages, it’s impossible in TypeScript to guarantee that thrown errors will be handled. This is due to the fact that thrown error types are not part of the function signature.

// Indeed, unlike other languages, it’s impossible in TypeScript to guarantee that thrown errors will be handled. This is due to the fact that thrown error types are not part of the function signature.
// type Result<T, E extends BaseError = BaseError> = { success: true; result: T } | { success: false; error: E };

// With this type, you can now express the fact that a function can fail. For example, a function reaching out to an API server would look like this:
// type ApiResponse = { data: string };

// Now, it’s impossible to access the data from the API without making sure it was successful first. Also, notice that this function will never throw.
// export async function fetchDataFromApi(): Result<ApiResponse> {
//   try {
//     const result = await fetch('https://api.local');

//     // for the sake of this snippet we don't do it
//     // but we should validate `result` matches the expected format

//     return { success: true, result };
//   } catch (err) {
//     const error = ensureError(err);

//     return { success: false, error };
//   }
// }
