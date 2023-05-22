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

Blockly.Python['controler_const_head'] = function(block) {
  var code = 'Head';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controler_const_neck'] = function(block) {
  var code = 'Neck';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controler_const_right_hand'] = function(block) {
  var code = 'Right_Hand';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controler_const_left_hand'] = function(block) {
  var code = 'Left_Hand';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_right_lower_arm_up'] = function(block) {
  var code = 'Right_LowerArm_Up';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_left_lower_arm_up'] = function(block) {
  var code = 'Left_LowerArm_Up';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_right_upper_arm'] = function(block) {
  var code = 'Right_UpperArm';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_left_upper_arm'] = function(block) {
  var code = 'Left_UpperArm';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_right_shoulder'] = function(block) {
  var code = 'Right_Shoulder';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_left_shoulder'] = function(block) {
  var code = 'Left_Shoulder';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_chest'] = function(block) {
  var code = 'Chest';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_lover_chest'] = function(block) {
  var code = 'LoverChest';
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