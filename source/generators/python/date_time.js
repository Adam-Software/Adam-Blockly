/**
 * Blocks for work with date and time
 * Blocks are located here BlocklySource\source\blocks\date_time.js
 */

'use strict';

Blockly.Python.addReservedWords('time');

/*Blockly.Python['time_sleep'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  var value_sleep = Blockly.Python.valueToCode(block, 'sleep', Blockly.Python.ORDER_ATOMIC);
  var code = 'time.sleep(' + value_sleep + ')\n';
  return [code, Blockly.Python.ORDER_NONE];
};*/

Blockly.Python['time_sleep'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  var value_sleep = Blockly.Python.valueToCode(block, 'sleep', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep(' + value_sleep + ')\n';
  return code;
};