'use strict';

const QServer = require('@nmq/q/server');
const events = require('./utils/events.js');

QServer.start();

/**
 * Files
 * Initiate a queue called “files” that monitors “save” and “error” events
 */
const files = new QServer('files');
files.monitorEvent(events.files.SAVE);
files.monitorEvent(events.files.ERROR);

/**
 * Database
 * Initiate a queue called “database” that monitors “create”, “read”, “update”, “delete” and “error” events
 */
const database = new QServer('database');
database.monitorEvent(events.database.CREATE);
database.monitorEvent(events.database.READ);
database.monitorEvent(events.database.UPDATE);
database.monitorEvent(events.database.DELETE);

console.log('Server is Up');
