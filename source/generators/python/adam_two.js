/**
 * Python code for Adam v.2.0 blocks
 * Blocks are located here BlocklySource\source\blocks\adam_two.js
 */

'use strict';
// If any new block imports any library, add that library name here.
//Blockly.Python.addReservedWords('math,random,Number,smbus');

/**
 * import_adam_servo_api_with_param
 *
 */
Blockly.Python['import_adam_servo_api_with_param'] = function(block) {
  Blockly.Python.definitions_['from_adamApi_import_AdamIMU'] = 'from adamApi import AdamIMU';
  var value_numcam = Blockly.Python.valueToCode(block, 'numCam', Blockly.Python.ORDER_ATOMIC);
  var value_flagconf = Blockly.Python.valueToCode(block, 'flagConf', Blockly.Python.ORDER_ATOMIC);
  
  var code = 'AdamIMU(numCam=' + value_numcam + ', flag_conf=' + value_flagconf  +')';
  
  return [code, Blockly.Python.ORDER_NONE];
};

/**
 * import_adam_servo_api
 *
 */
Blockly.Python['import_adam_servo_api'] = function(block) {
  Blockly.Python.definitions_['from_adamApi_import_AdamIMU'] = 'from adamApi import AdamIMU';
  
  var code = 'AdamIMU()';
  
  return [code, Blockly.Python.ORDER_NONE];
};

/**
 * servo_speed_variable
 *
 */
Blockly.Python['servo_speed_variable'] = function(block) {
  var number_speed = block.getFieldValue('speed');
  
  var code = number_speed;
  
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
 * servo_angle_variable
 *
 */
Blockly.Python['servo_angle_variable'] = function(block) {
  var number_angle = block.getFieldValue('angle');
  
  var code = number_angle;
  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * servo_head
 *
 */
Blockly.Python['servo_head'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_head_angle = Blockly.Python.valueToCode(block, 'head_angle', Blockly.Python.ORDER_ATOMIC);
  var value_neck_angle = Blockly.Python.valueToCode(block, 'neck_angle', Blockly.Python.ORDER_ATOMIC);

  var code = variable_imu + '.nodeServoWrite("Head", ' + value_speed + ', ' + value_head_angle + ', ' + value_neck_angle + ')\n';
  
  return code;
};

/**
 * servo_right_hand
 *
 */
Blockly.Python['servo_right_hand'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_shoulder_angle = Blockly.Python.valueToCode(block, 'shoulder_angle', Blockly.Python.ORDER_ATOMIC);
  var value_forearm_angle = Blockly.Python.valueToCode(block, 'forearm_angle', Blockly.Python.ORDER_ATOMIC);
  var value_upper_elbow_angle = Blockly.Python.valueToCode(block, 'upper_elbow_angle', Blockly.Python.ORDER_ATOMIC);
  var value_lower_elbow_angle = Blockly.Python.valueToCode(block, 'lower_elbow_angle', Blockly.Python.ORDER_ATOMIC);
  
  var code = variable_imu + '.nodeServoWrite("ArmR", ' + value_speed + ', ' + value_shoulder_angle + ', ' + value_forearm_angle + ', ' + value_upper_elbow_angle + ', ' + value_lower_elbow_angle + ')\n';
  
  return code;
};

/**
 * servo_left_hand
 *
 */
Blockly.Python['servo_left_hand'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_shoulder_angle = Blockly.Python.valueToCode(block, 'shoulder_angle', Blockly.Python.ORDER_ATOMIC);
  var value_forearm_angle = Blockly.Python.valueToCode(block, 'forearm_angle', Blockly.Python.ORDER_ATOMIC);
  var value_upper_elbow_angle = Blockly.Python.valueToCode(block, 'upper_elbow_angle', Blockly.Python.ORDER_ATOMIC);
  var value_lower_elbow_angle = Blockly.Python.valueToCode(block, 'lower_elbow_angle', Blockly.Python.ORDER_ATOMIC);
  
  var code = variable_imu + '.nodeServoWrite("ArmL", ' + value_speed + ', ' + value_shoulder_angle + ', ' + value_forearm_angle + ', ' + value_upper_elbow_angle + ', ' + value_lower_elbow_angle + ')\n';
  
  return code;
};

/**
 * servo_torso
 *
 */
Blockly.Python['servo_torso'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_torso_angle = Blockly.Python.valueToCode(block, 'torso_angle', Blockly.Python.ORDER_ATOMIC);
  
  var code = variable_imu + '.nodeServoWrite("Chest", ' + value_speed + ', ' + value_torso_angle + ')\n';
  
  return code;
};

/**
 * servo_press
 *
 */
Blockly.Python['servo_press'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_tilt_upper_press = Blockly.Python.valueToCode(block, 'tilt_upper_press', Blockly.Python.ORDER_ATOMIC);
  var value_tilt_lower_press = Blockly.Python.valueToCode(block, 'tilt_lower_press', Blockly.Python.ORDER_ATOMIC);
  
   var code = variable_imu + '.nodeServoWrite("Loin", ' + value_speed + ', ' + value_tilt_upper_press + ', ' + value_tilt_lower_press + ')\n';
  
  return code;
};

/**
 * servo_legs
 *
 */
Blockly.Python['servo_legs'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_leg_lift_angle = Blockly.Python.valueToCode(block, 'leg lift angle', Blockly.Python.ORDER_ATOMIC);
  
  var code = variable_imu + '.nodeServoWrite("Pivas", ' + value_speed + ', ' + value_leg_lift_angle + ')\n';
  
  return code;
};

/**
 * servo_fingers
 *
 */
Blockly.Python['servo_fingers'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_angle_left_fingers = Blockly.Python.valueToCode(block, 'angle_left_fingers', Blockly.Python.ORDER_ATOMIC);
  var value_angle_right_fingers = Blockly.Python.valueToCode(block, 'angle_right_fingers', Blockly.Python.ORDER_ATOMIC);
  
  var code = variable_imu + '.nodeServoWrite("Hands", ' + value_speed + ', ' + value_angle_left_fingers + ', ' + value_angle_right_fingers + ')\n';
  
  return code;
};

/**
 * servo_squeeze_fingers 
 *
 */
Blockly.Python['servo_squeeze_fingers'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);

  var code = variable_imu + '.nodeServoWrite("Hands", ' + value_speed + ', 0, 0)\n';
  
  return code;
};

/**
 * servo_unclench_fingers 
 *
 */
Blockly.Python['servo_unclench_fingers'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  
  var code = variable_imu + '.nodeServoWrite("Hands", ' + value_speed + ', 100, 100)\n';
  
  return code;
};