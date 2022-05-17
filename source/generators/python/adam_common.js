/**
 * Python code for common adam blocks
 * Blocks are located here BlocklySource\source\blocks\adam_common.js
 */

'use strict';
// If any new block imports any library, add that library name here.
Blockly.Python.addReservedWords('smbus, board, adafruit_extended_bus, ExtendedI2C');

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

/**
  * common_i2c_sensor_device
  *
  */
  
Blockly.Python['common_i2c_sensor_device'] = function(block) {
  Blockly.Python.definitions_['import_board'] = 'import board';
  var code = 'board.I2C()';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_i2c_sensor_device_extended
  *
  */
  
Blockly.Python['common_i2c_sensor_device_extended'] = function(block) {
  Blockly.Python.definitions_['from_adafruit_extended_bus_import_ExtendedI2C_as_I2C'] = 'from adafruit_extended_bus import ExtendedI2C as I2C';
  var value_i2c_bus = Blockly.Python.valueToCode(block, 'i2c_bus', Blockly.Python.ORDER_ATOMIC);
  var code = 'I2C(' + value_i2c_bus +')';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_sensor_declaration
  *
  */

Blockly.Python['common_sensor_declaration'] = function(block) {
  Blockly.Python.definitions_['import_adafruit_bno055'] = 'import adafruit_bno055';
  var variable_i2c_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('i2c_variable'), Blockly.Variables.NAME_TYPE);
  var code = 'adafruit_bno055.BNO055_I2C(' + variable_i2c_variable +' ,0x29)';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['common_sensor_declaration_extended'] = function(block) {
  Blockly.Python.definitions_['import_adafruit_bno055'] = 'import adafruit_bno055';
  var variable_i2c_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('i2c_variable'), Blockly.Variables.NAME_TYPE);
  var value_sensor_address = Blockly.Python.valueToCode(block, 'sensor_address', Blockly.Python.ORDER_ATOMIC);
  var code = 'adafruit_bno055.BNO055_I2C(' + variable_i2c_variable + ' ,' + value_sensor_address + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_sensor_temperature
  *
  */

Blockly.Python['common_sensor_temperature'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.temperature';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_sensor_acceleration
  *
  */

Blockly.Python['common_sensor_acceleration'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.acceleration';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_sensor_magnetometer
  *
  */

Blockly.Python['common_sensor_magnetometer'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.magnetic';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_sensor_gyro
  *
  */

Blockly.Python['common_sensor_gyro'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.gyro';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_sensor_euler
  *
  */

Blockly.Python['common_sensor_euler'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.euler';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_sensor_quaternion
  *
  */

Blockly.Python['common_sensor_quaternion'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.quaternion';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_sensor_linear_acceleration
  *
  */

Blockly.Python['common_sensor_linear_acceleration'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.linear_acceleration';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_sensor_linear_gravity
  *
  */

Blockly.Python['common_sensor_gravity'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.gravity';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_music_major_chord
  *
  */

Blockly.Python['common_music_major_chord'] = function(block) {
  var dropdown_chord = block.getFieldValue('chord');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_music_minor_chord
  *
  */

Blockly.Python['common_music_minor_chord'] = function(block) {
  var dropdown_chord = block.getFieldValue('chord');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_music_minor_major_seventh_chords
  *
  */

Blockly.Python['common_music_minor_major_seventh_chords'] = function(block) {
  var dropdown_chord = block.getFieldValue('chord');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_music_minor_minor_seventh_chords
  *
  */

Blockly.Python['common_music_minor_minor_seventh_chords'] = function(block) {
  var dropdown_chord = block.getFieldValue('chord');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_music_major_chord_extended
  *
  */

Blockly.Python['common_music_major_chord_extended'] = function(block) {
  var dropdown_chord = block.getFieldValue('chord');
  var value_major_third = Blockly.Python.valueToCode(block, 'major_third', Blockly.Python.ORDER_ATOMIC);
  var value_perfect_fifth = Blockly.Python.valueToCode(block, 'perfect_fifth', Blockly.Python.ORDER_ATOMIC);
  var value_major_seventh = Blockly.Python.valueToCode(block, 'major_seventh', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_music_minor_chord_extended
  *
  */

Blockly.Python['common_music_minor_chord_extended'] = function(block) {
  var dropdown_chord = block.getFieldValue('chord');
  var value_major_third = Blockly.Python.valueToCode(block, 'major_third', Blockly.Python.ORDER_ATOMIC);
  var value_perfect_fifth = Blockly.Python.valueToCode(block, 'perfect_fifth', Blockly.Python.ORDER_ATOMIC);
  var value_major_seventh = Blockly.Python.valueToCode(block, 'major_seventh', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_music_minor_major_seventh_chords_extended
  *
  */

Blockly.Python['common_music_minor_major_seventh_chords_extended'] = function(block) {
  var dropdown_chord = block.getFieldValue('chord');
  var value_major_third = Blockly.Python.valueToCode(block, 'major_third', Blockly.Python.ORDER_ATOMIC);
  var value_perfect_fifth = Blockly.Python.valueToCode(block, 'perfect_fifth', Blockly.Python.ORDER_ATOMIC);
  var value_major_seventh = Blockly.Python.valueToCode(block, 'major_seventh', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_music_minor_minor_seventh_chords_extended
  *
  */

Blockly.Python['common_music_minor_minor_seventh_chords_extended'] = function(block) {
  var dropdown_chord = block.getFieldValue('chord');
  var value_major_third = Blockly.Python.valueToCode(block, 'major_third', Blockly.Python.ORDER_ATOMIC);
  var value_perfect_fifth = Blockly.Python.valueToCode(block, 'perfect_fifth', Blockly.Python.ORDER_ATOMIC);
  var value_major_seventh = Blockly.Python.valueToCode(block, 'major_seventh', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};