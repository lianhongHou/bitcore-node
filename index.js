'use strict';

module.exports = require('./lib');
module.exports.Node = require('./lib/node');
module.exports.Chain = require('./lib/chain');
module.exports.DB = require('./lib/db');
module.exports.Transaction = require('./lib/transaction');
module.exports.Module = require('./lib/module');
module.exports.errors = require('./lib/errors');

module.exports.modules = {};
module.exports.modules.AddressModule = require('./lib/modules/address');
module.exports.modules.BitcoinModule = require('./lib/modules/bitcoind');

module.exports.scaffold = {};
module.exports.scaffold.create = require('./lib/scaffold/create');
module.exports.scaffold.add = require('./lib/scaffold/add');
module.exports.scaffold.remove = require('./lib/scaffold/remove');
module.exports.scaffold.start = require('./lib/scaffold/start');
module.exports.scaffold.callMethod = require('./lib/scaffold/call-method');
module.exports.scaffold.findConfig = require('./lib/scaffold/find-config');
module.exports.scaffold.defaultConfig = require('./lib/scaffold/default-config');

module.exports.cli = {};
module.exports.cli.main = require('./cli/main');
