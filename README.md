# Math API

Math API is a Restful API that takes math expressions 
as url parameters and returns the solution as a GET response.

#### Setup:
```ruby
npm install express
``` ```ruby
npm install mathjs
```

#### Get started by entering any basic math expression into the url:
- In the form of …/{expression}

- For example, /2+3 will return 5. Use * for multiplication, _ for division and +/- for addition/subtraction.

- Supports sqrt(), abs(), ^ for exponentials, and ! for factorials.

#### Alternatively, you can try one of these extensions:
- …/simplify/{expression}
  - Simplifies the given expression.
- …/equality/{expression}
  - Checks for equality and returns a boolean.
  - For example, …./equality/0.1+0.2==0.3 will return true
- …/derivative/{expression}/{with respect to}
  - Solves for the derivative with respect to a variable
  - For example, …./derivative/2x^2/x will return 4x

