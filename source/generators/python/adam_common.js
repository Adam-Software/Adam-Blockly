/**
 * Python code for common adam blocks
 * Blocks are located here BlocklySource\source\blocks\adam_common.js
 */

'use strict';
// If any new block imports any library, add that library name here.
Blockly.Python.addReservedWords('smbus');

/**
  * common_eye_pack
  *
  */
  
Blockly.Python['common_eye_pack'] = function (block) {
    var value_addr = Blockly.Python.valueToCode(block, 'addr', Blockly.Python.ORDER_ATOMIC);
    var value_reg = Blockly.Python.valueToCode(block, 'reg', Blockly.Python.ORDER_ATOMIC);
    var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
    var value_start_led = Blockly.Python.valueToCode(block, 'start_led', Blockly.Python.ORDER_ATOMIC);
    var value_stop_led = Blockly.Python.valueToCode(block, 'stop_led', Blockly.Python.ORDER_ATOMIC);
    var value_step = Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_ATOMIC);
    var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
    
	var code = '[' + value_addr + ', ' + value_reg + ', ' + value_color + ', ' + value_start_led + ', ' + value_stop_led + ', ' + value_step + ', ' + value_time + ', 0' + ']';
    
	return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_eye_pack_simple
  *
  */

Blockly.Python['common_eye_pack_simple'] = function(block) {
  var value_reg = Blockly.Python.valueToCode(block, 'reg', Blockly.Python.ORDER_ATOMIC);
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var value_start_led = Blockly.Python.valueToCode(block, 'start_led', Blockly.Python.ORDER_ATOMIC);
  var value_stop_led = Blockly.Python.valueToCode(block, 'stop_led', Blockly.Python.ORDER_ATOMIC);
  var value_step = Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_ATOMIC);
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  
  var code = '[170, ' + value_reg + ', ' + value_color + ', ' + value_start_led + ', ' + value_stop_led + ', ' + value_step + ', ' + value_time + ', 0' + ']';
  
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_import_smbus
  *
  */

Blockly.Python['common_import_smbus'] = function(block) {
  Blockly.Python.definitions_['import_smbus'] = 'import smbus';
  var value_bus_number = Blockly.Python.valueToCode(block, 'bus_number', Blockly.Python.ORDER_ATOMIC);
  
  var code = 'smbus.SMBus(' + value_bus_number + ')\n';
  
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_write_i2c_block_data
  *
  */

Blockly.Python['common_write_i2c_block_data'] = function(block) {
  var variable_bus = Blockly.Python.nameDB_.getName(block.getFieldValue('bus'), Blockly.Variables.NAME_TYPE);
  var value_addr = Blockly.Python.valueToCode(block, 'addr', Blockly.Python.ORDER_ATOMIC);
  var value_cmd = Blockly.Python.valueToCode(block, 'cmd', Blockly.Python.ORDER_ATOMIC);
  var value_packet = Blockly.Python.valueToCode(block, 'packet', Blockly.Python.ORDER_ATOMIC);
  
  var code = variable_bus + '.write_i2c_block_data(' + value_addr + ', ' + value_cmd + ', ' + value_packet +')\n'
  
  return code;
};

Blockly.Python['common_simple_write_i2c_block_data'] = function(block) {
  var variable_bus = Blockly.Python.nameDB_.getName(block.getFieldValue('bus'), Blockly.Variables.NAME_TYPE);
  var value_addr = Blockly.Python.valueToCode(block, 'addr', Blockly.Python.ORDER_ATOMIC);
  var value_packet = Blockly.Python.valueToCode(block, 'packet', Blockly.Python.ORDER_ATOMIC);
  
  var code = variable_bus + '.write_i2c_block_data(' + value_addr + ', 0, ' + value_packet +')\n'
  
  return code;
};

/**
  * common_eye_color
  *
  */

Blockly.Python['common_eye_color'] = function(block) {
  var dropdown_color = block.getFieldValue('color');
  
  var code = dropdown_color;
  
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * common_eye_diode_number
  *
  */

Blockly.Python['common_eye_diode_number'] = function(block) {
  var number_diode_number = block.getFieldValue('diode_number');
  
  var code = number_diode_number;
  
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * common_reg_constant
  *
  */

Blockly.Python['common_reg_constant'] = function(block) {
  var dropdown_const = block.getFieldValue('const');
  
  var code = dropdown_const;
  
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * common_i2c_device_address
  *
  */
  
Blockly.Python['common_i2c_device_address'] = function(block) {
  var dropdown_device_addr = block.getFieldValue('device_addr');
  
  var code = dropdown_device_addr;
  
  return [code, Blockly.Python.ORDER_ATOMIC];
};