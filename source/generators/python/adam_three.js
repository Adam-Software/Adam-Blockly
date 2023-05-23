/**
 * Python code for Adam v.3.0 blocks
 * Blocks are located here BlocklySource\source\blocks\adam_three.js
 */

'use strict';

Blockly.Python.addReservedWords('');

Blockly.Python['controller_motor_command'] = function(block) {
  var value_servo_constant = Blockly.Python.valueToCode(block, 'servo_constant', Blockly.Python.ORDER_ATOMIC);
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var code = 'MotorCommand(' + "'" + value_servo_constant + "', " + value_angle + ', ' + value_speed + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['controller_const_head'] = function(block) {
  var code = 'head';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_neck'] = function(block) {
  var code = 'neck';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_right_hand'] = function(block) {
  var code = 'right_hand';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_left_hand'] = function(block) {
  var code = 'left_hand';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_right_lower_arm_up'] = function(block) {
  var code = 'right_lower_arm_up';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_left_lower_arm_up'] = function(block) {
  var code = 'left_lower_arm_up';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_right_upper_arm'] = function(block) {
  var code = 'right_upper_arm';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_left_upper_arm'] = function(block) {
  var code = 'left_upper_arm';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_right_shoulder'] = function(block) {
  var code = 'right_shoulder';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_left_shoulder'] = function(block) {
  var code = 'left_shoulder';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_chest'] = function(block) {
  var code = 'chest';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_const_press'] = function(block) {
  var code = 'press';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
 * servo_speed_variable
 *
 */
Blockly.Python['controller_speed_variable'] = function(block) {
  var number_speed = block.getFieldValue('speed');
  var code = number_speed;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
 * servo_angle_variable
 *
 */
Blockly.Python['controller_angle_variable'] = function(block) {
  var number_angle = block.getFieldValue('angle');
  var code = number_angle;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};