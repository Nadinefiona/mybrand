"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = exports.register = exports.login = exports.allUsers = exports.UserbyId = void 0;

var _User = _interopRequireDefault(require("../model/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _bcrypt = _interopRequireDefault(require("bcryptjs/dist/bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var schema = _joi["default"].object({
  name: _joi["default"].string().min(6).required(),
  email: _joi["default"].string().min(6).required().email(),
  password: _joi["default"].string().min(6).required()
});

exports.schema = schema;

var register = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _schema$validate, error, emailExist, salt, hashedPassword, user, savedUser;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //Lets validate   the data before  we  create a user
            // const validation = Joi.validate(req.body, schema);
            // res.send(validation);
            _schema$validate = schema.validate(req.body), error = _schema$validate.error;

            if (!error) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(400).send(error.details[0].message));

          case 3:
            _context.next = 5;
            return _User["default"].findOne(req.body);

          case 5:
            emailExist = _context.sent;

            if (!emailExist) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.status(400).send('Email already exist'));

          case 8:
            _context.next = 10;
            return _bcrypt["default"].gentSalt(10);

          case 10:
            salt = _context.sent;
            _context.next = 13;
            return _bcrypt["default"].hash(req.body.password, salt);

          case 13:
            hashedPassword = _context.sent;
            //create  a new  user
            user = new _User["default"]({
              name: req.body.name,
              email: req.body.email,
              password: req.body.password
            });
            _context.prev = 15;
            _context.next = 18;
            return user.save();

          case 18:
            savedUser = _context.sent;
            res.send(savedUser);
            _context.next = 25;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](15);
            res.status(400).send(_context.t0);

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[15, 22]]);
  }));

  return function register(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.register = register;

var login = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _schema$validate2, error, user, validPass, token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _schema$validate2 = schema.validate(req.body), error = _schema$validate2.error;

            if (!error) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", res.status(400).send(error.details[0].message));

          case 3:
            _context2.next = 5;
            return _User["default"].findOne(req.body);

          case 5:
            user = _context2.sent;

            if (user) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(400).send('Email is not found'));

          case 8:
            _context2.next = 10;
            return _bcrypt["default"].compare.apply(req.body.password, user.password);

          case 10:
            validPass = _context2.sent;

            if (validPass) {
              _context2.next = 13;
              break;
            }

            return _context2.abrupt("return", res.status(400).send('Invalid password'));

          case 13:
            token = _jsonwebtoken["default"].sign({
              _id: user.id
            }, process.env.TOKEN_SECRET);
            res.header('authorization', token).send(token);
            res.send('Login successful!');

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.login = login;

var UserbyId = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _User["default"].findById(req.params.userId);

          case 3:
            user = _context3.sent;
            res.send(user);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            res.status.send(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function UserbyId(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.UserbyId = UserbyId;

var allUsers = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _User["default"].find();

          case 3:
            user = _context4.sent;
            res.send(user);
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res.status.send(_context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function allUsers(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.allUsers = allUsers;