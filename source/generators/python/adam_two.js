/**
 * Python code for Adam v.2.0 blocks
 * Blocks are located here BlocklySource\source\blocks\adam_two.js
 */

'use strict';
// If any new block imports any library, add that library name here.
//Blockly.Python.addReservedWords('math,random,Number,smbus');

//import_adam_servo_api
Blockly.Python['import_adam_servo_api'] = function(block) {
  Blockly.Python.definitions_['from_adamApi_import_AdamIMU'] = 'from adamApi import AdamIMU';
  var value_numcam = Blockly.Python.valueToCode(block, 'numCam', Blockly.Python.ORDER_ATOMIC);
  var value_flagconf = Blockly.Python.valueToCode(block, 'flagConf', Blockly.Python.ORDER_ATOMIC);
  
// TODO: Assemble Python into code variable.
  var code = 'AdamIMU(numCam=' + value_numcam + ', flag_conf=' + value_flagconf  +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

//servo_head
Blockly.Python['servo_head'] = function(block) {
  var value_servo_api_variable = Blockly.Python.valueToCode(block, 'servo_api_variable', Blockly.Python.ORDER_ATOMIC);
  var value_one = Blockly.Python.valueToCode(block, 'one', Blockly.Python.ORDER_ATOMIC);
  var value_two = Blockly.Python.valueToCode(block, 'two', Blockly.Python.ORDER_ATOMIC);
  var value_three = Blockly.Python.valueToCode(block, 'three', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_servo_api_variable + '.nodeServoWrite("Head", ' + value_one + ', ' + value_two + ', ' + value_three + ')\n';
  return code;
};