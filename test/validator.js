/**
 * Created by Rain on 2015/12/8.
 */

var Validator = require('validator');

var rules = {
  username: 'required|min :5',
  password: 'required|confirmed|min:6|max:16'
};

var data = username = {
  username: 'test',
  password: '123456'
};

var v = Validator.make(data, rules);

if (v.fails()) {
  console.log(v.messages());
  console.log(v.errors());
}






