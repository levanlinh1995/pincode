In this source code, I used Laravel + vuejs (integrated in blade template) 


How to run source code?

Step 1: pull source code form this rep
https://github.com/levanlinh1995/pincode
Step 2:
Run composer install 
npm install
npm run watch
Step 3:
php artisan serve

Task Desc:
Create a pin input (code input) like this example (like when you input your pin (code) for unlocking your phone for example)

Minimum requirements:
- Each box should only contain 1 digit (0-9)
- After filling in 1 box, focus pointer should move to very next empty box
- Input wrong character should not move to next box
- Allow secret mode -> mask all the boxes if in secret mode
- Auto focus on the first when the pin input render
- Invoke some method after all the boxes are filled

Plus points:
- allow to change number of input boxes (lenght of the pin)
- allow pasting
- as most configurable as possile
- Allow passing regex for box input -> can no longer digit but can be other
- default value
- Fancy UI
- Unit test
- Typescript
