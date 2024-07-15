# node-postgres-template
## Setup

## node

tool versions on osx:
nvm 0.39.2
node v18.12.0
npm 9.1.3

## Setup
### web app

`npm install`

#### App config files
create a copy of ./config/config.js.init and call it ./db/config.js
set the
create a copy of ./db/initialDb.js.init and call it ./db/initialDb.js
set the 

#### initialize database in dev

`node ./db/dbreset.js`



### express generator output

``vmax:nodeapp john$ express --ejs --view ejs --git

warning: option `--ejs' has been renamed to `--view=ejs'

destination is not empty, continue? [y/N] y

create : public/
create : public/javascripts/
create : public/images/
create : public/stylesheets/
create : public/stylesheets/style.css
create : routes/
create : routes/index.js
create : routes/users.js
create : views/
create : views/error.ejs
create : views/index.ejs
create : .gitignore
create : app.js
create : package.json
create : bin/
create : bin/www

install dependencies:
$ npm install

run the app:
$ DEBUG=nodeapp:* npm start``
