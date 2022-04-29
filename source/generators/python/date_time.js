/**
 * Blocks for work with date and time
 * Blocks are located here BlocklySource\source\blocks\date_time.js
 */

'use strict';
// If any new block imports any library, add that library name here.
Blockly.Python.addReservedWords('time');

Blockly.Python['time_sleep'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  var value_sleep = Blockly.Python.valueToCode(block, 'sleep', Blockly.Python.ORDER_ATOMIC);
  var code = 'time.sleep(' + value_sleep + ')\n';
  return code;
};