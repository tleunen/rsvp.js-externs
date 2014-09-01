/**
 * @fileoverview Closure Compiler externs for rsvp.js.
 * @see https://github.com/tildeio/rsvp.js
 * @see https://github.com/tleunen/rsvp.js-externs
 * @externs
 */

/**
 * @type {Object}
 * @const
 */
var RSVP = {};

/**
  @method race
  @static
  @for RSVP
  @param {Array} array Array of promises.
  @param {String} label An optional label. This is useful
  for tooling.
 */
RSVP.race = function(array, label) {};

/**
  @class RSVP.Promise
  @param {function} resolver
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @constructor
 */
RSVP.Promise = function(resolver, label) {};

/**
  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
 */
RSVP.Promise.all = function(entries, label) {};

/**
  @method race
  @static
  @param {Array} promises array of promises to observe
  @param {String} label optional string for describing the promise returned.
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
 */
RSVP.Promise.race = function(entries, label) {};

/**
  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  @param {String} label optional string for identifying the returned promise.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
 */
RSVP.Promise.reject = function(reason, label) {};

/**
  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  @param {String} label optional string for identifying the returned promise.
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
 */
RSVP.Promise.resolve = function(object, label) {};

/**
  @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise}
 */
RSVP.Promise.prototype.then = function(onFulfillment, onRejection, label) {};

/**
  @method catch
  @param {Function} onRejection
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise}
 */
RSVP.Promise.prototype.catch = function(onRejection, label) {};

/**
  @method finally
  @param {Function} callback
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise}
 */
RSVP.Promise.prototype.finally = function(callback, label) {};

/**
  @method allSettled
  @static
  @for RSVP
  @param {Array} promises
  @param {String} label - optional string that describes the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled with an array of the settled
  states of the constituent promises.
 */
RSVP.allSettled = function(array, label) {};

/**
  @method hash
  @static
  @for RSVP
  @param {Object} promises
  @param {String} label optional string that describes the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all properties of `promises`
  have been fulfilled, or rejected if any of them become rejected.
 */
RSVP.hash = function(object, label) {};

/**
  @method hashSettled
  @for RSVP
  @param {Object} promises
  @param {String} label optional string that describes the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when when all properties of `promises`
  have been settled.
  @static
 */
RSVP.hashSettled = function(object, label) {};

/**
  @method denodeify
  @static
  @for RSVP
  @param {Function} nodeFunc a 'node-style' function that takes a callback as
  its last argument. The callback expects an error to be passed as its first
  argument (if an error occurred, otherwise null), and the value from the
  operation as its second argument ('function(err, value){ }').
  @param {Boolean|Array} argumentNames An optional paramter that if set
  to `true` causes the promise to fulfill with the callback's success arguments
  as an array. This is useful if the node function has multiple success
  paramters. If you set this paramter to an array with names, the promise will
  fulfill with a hash with these names as keys and the success parameters as
  values.
  @return {Function} a function that wraps `nodeFunc` to return an
  `RSVP.Promise`
  @static
 */
RSVP.denodeify = function(nodeFunc, options) {};

RSVP.configure = function(name, value) {};
RSVP.on = function(name, value) {};
RSVP.off = function(name, value) {};
RSVP.async = function(callback, arg) {};

/**
  @method map
  @static
  @for RSVP
  @param {Array} promises
  @param {Function} mapFn function to be called on each fulfilled promise.
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled with the result of calling
  `mapFn` on each fulfilled promise or value when they become fulfilled.
   The promise will be rejected if any of the given `promises` become rejected.
  @static
 */
RSVP.map = function(promises, mapFn, label) {};

/**
  @method filter
  @static
  @for RSVP
  @param {Array} promises
  @param {Function} filterFn - function to be called on each resolved value to
  filter the final results.
  @param {String} label optional string describing the promise. Useful for
  tooling.
  @return {Promise}
 */
RSVP.filter = function(promises, filterFn, label) {};

/**
  @method resolve
  @static
  @for RSVP
  @param {Any} value value that the returned promise will be resolved with
  @param {String} label optional string for identifying the returned promise.
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
 */
RSVP.resolve = function(value, label) {};

/**
  @method reject
  @static
  @for RSVP
  @param {Any} reason value that the returned promise will be rejected with.
  @param {String} label optional string for identifying the returned promise.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
 */
RSVP.reject = function(reason, label) {};

/**
  @method all
  @static
  @for RSVP
  @param {Array} array Array of promises.
  @param {String} label An optional label. This is useful
  for tooling.
 */
RSVP.all = function(array, label) {};

/**
  @method rethrow
  @static
  @for RSVP
  @param {Error} reason reason the promise became rejected.
  @throws Error
  @static
 */
RSVP.rethrow = function(reason) {};

/**
  @method defer
  @static
  @for RSVP
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Object}
 */
RSVP.defer = function(label) {};

/**
 * @type {Function}
 */
RSVP.defer.promise = function() {};

/**
 * @type {Function}
 */
RSVP.defer.resolve = function() {};

/**
 * @type {Function}
 */
RSVP.defer.reject = function() {};

/**
  @class RSVP.EventTarget
 */
RSVP.EventTarget = function(label) {};

/**
  @method mixin
  @for RSVP.EventTarget
  @private
  @param {Object} object object to extend with EventTarget methods
 */
RSVP.EventTarget.mixin = function(object) {};

/**
  @method on
  @for RSVP.EventTarget
  @private
  @param {String} eventName name of the event to listen for
  @param {Function} callback function to be called when the event is triggered.
 */
RSVP.EventTarget.on = function(eventName, callback) {};

/**
  @method off
  @for RSVP.EventTarget
  @private
  @param {String} eventName event to stop listening to
  @param {Function} callback optional argument. If given, only the function
  given will be removed from the event's callback queue. If no `callback`
  argument is given, all callbacks will be removed from the event's callback
  queue.
 */
RSVP.EventTarget.off = function(eventName, callback) {};

/**
  @method trigger
  @for RSVP.EventTarget
  @private
  @param {String} eventName name of the event to be triggered
  @param {Any} options optional value to be passed to any event handlers for
  the given `eventName`
*/
RSVP.EventTarget.trigger = function(eventName, callback) {};