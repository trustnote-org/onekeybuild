"use strict";

exports.clientName = 'TTT';
exports.minClientVersion = '1.1.0';
exports.WS_PROTOCOL = 'ws://';
exports.pushApiProjectNumber = 0;
exports.pushApiKey = '';

exports.port = 6616;
exports.bServeAsHub = true;
exports.bSaveJointJson = true;
exports.bLight = false;
exports.bug_sink_email = 'admin@example.org';
exports.bugs_from_email = 'bugs@example.org';

exports.HEARTBEAT_TIMEOUT = 300*1000;
exports.storage = 'sqlite';
exports.initial_witnesses = REPLACE_WITNESSES;
exports.initial_peers = [];
console.log('finished hub conf');