## API of tasks daily

## Technologies 
**back-end** 
* server **node.js**, 
* database nosql **mongodb** 
* encrypt password **bcrypt** 
* token of access the app **JWT**
* manage routes **express**
  
**Test**
* jest

* send email **Sendgrid**
The sendgrid is used at application for send email with a new password(reset password).

como utilizar
#### Clone the repository
  git clone https://github.com/Suele/ntask-api.git

#### Install dependency
  npm install

#### rum project
  npm run dev  
  
#### For used sendgrid 
create account at the sendgrid.
Generate the API key on the sendgrid website
Create a .env configuration file with the API key and your email.
