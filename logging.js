/* Logs messages to console with the [CodePush] prefix */
function log(message) {
  console.log(`[CodePush] ${message}`);
}

var debug_enabled = true;

log.debug = function(msg) {
  if (debug_enabled)
    log(msg);
}

module.exports = log;
