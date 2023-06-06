/**
 * Python code for Adam v.3.0 blocks
 * Blocks are located here BlocklySource\source\blocks\adam_three.js
 */

'use strict';

Blockly.Python.addReservedWords('AdamManager', 'SerializableCommands', 'MotorCommand');

Blockly.Python['controller_motor_command'] = function(block) {
  Blockly.Python.definitions_['from_adam_sdk_import_MotorCommand'] = 'from adam_sdk import MotorCommand';
  var value_servo_constant = Blockly.Python.valueToCode(block, 'servo_constant', Blockly.Python.ORDER_ATOMIC);
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var code = 'MotorCommand(' + value_servo_constant + ", " + value_angle + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_new_instance_class'] = function(block) {
  Blockly.Python.definitions_['from_adam_sdk_import_AdamManager'] = 'from adam_sdk import AdamManager';
  var code = 'AdamManager()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['controller_handle_command'] = function(block) {
  Blockly.Python.definitions_['from_adam_sdk_import_SerializableCommands'] = 'from adam_sdk import SerializableCommands';
  var value_instance_class_variable = Blockly.Python.valueToCode(block, 'instance_class_variable', Blockly.Python.ORDER_ATOMIC);
  var value_command_array = Blockly.Python.valueToCode(block, 'command_array', Blockly.Python.ORDER_ATOMIC);
  var code = value_instance_class_variable +'.handle_command(commands=SerializableCommands(' + value_command_array +'))';
  return code;
};

Blockly.Python['controller_speed_variable'] = function(block) {
  var number_speed = block.getFieldValue('speed');
  var code = number_speed;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_angle_variable'] = function(block) {
  var number_angle = block.getFieldValue('angle');
  var code = number_angle;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Python['controller_const_head'] = function(block) {
  var code = "'head'";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_neck'] = function(block) {
  var code = "'neck'";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_right_hand'] = function(block) {
  var code = "'right_hand'";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_left_hand'] = function(block) {
  var code = "'left_hand'";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_right_lower_arm_up'] = function(block) {
  var code = "'right_lower_arm_up'";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_left_lower_arm_up'] = function(block) {
  var code = "'left_lower_arm_up'";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_right_upper_arm'] = function(block) {
  var code = "'right_upper_arm'";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_left_upper_arm'] = function(block) {
  var code = "'left_upper_arm'";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_right_shoulder'] = function(block) {
  var code = "'right_shoulder'";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_left_shoulder'] = function(block) {
  var code = "'left_shoulder'";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_chest'] = function(block) {
  var code = "'chest'";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_press'] = function(block) {
  var code = "'press'";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_left_upper_leg'] = function(block) {
  var code = "'left_upper_leg'";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_right_upper_leg'] = function(block) {
  var code = "'right_upper_leg'";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_left_lower_leg'] = function(block) {
  var code = "'left_lower_leg'";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_right_lower_leg'] = function(block) {
  var code = "'right_lower_leg'";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_left_foot'] = function(block) {
  var code = "'left_foot'";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_right_foot'] = function(block) {
  var code = "'right_foot'";
  return [code, Blockly.Python.ORDER_ATOMIC];
};