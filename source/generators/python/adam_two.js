/**
 * Python code for Adam v.2.0 blocks
 * Blocks are located here BlocklySource\source\blocks\adam_two.js
 */

'use strict';
// If any new block imports any library, add that library name here.
Blockly.Python.addReservedWords('math, random, Number, smbus, AdamIMU, MotionAndRangefinders, ReadSensor');

/**
  * select_baudrate
  *
  */

Blockly.Python['select_baudrate'] = function (block) {
    var dropdown_select_baudrate = block.getFieldValue('select_baudrate');
    var code = Number(dropdown_select_baudrate);
    return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * baudrate_variable
  *
  */

Blockly.Python['baudrate_variable'] = function (block) {
    var code = Number(block.getFieldValue('BAUDRATE'));
    return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * adam_import_ping_variable
  *
  */

Blockly.Python['adam_import_ping_variable'] = function (block) {
    var value_scs_id = Blockly.Python.valueToCode(block, 'SCS_ID', Blockly.Python.ORDER_ATOMIC);
    var value_baudrate = Blockly.Python.valueToCode(block, 'baudrate', Blockly.Python.ORDER_ATOMIC);
    var codeOne = 'SCS_ID                  = ' + value_scs_id + '\n';
    var codeTwo = 'BAUDRATE                = ' + value_baudrate + '\n';
    var codeThree = 'DEVICENAME              = ' + '/dev/ttyUSB0\n';
    var codeFour = 'protocol_end            = 0\n';
    return codeOne + codeTwo + codeThree + codeFour;
};

/**
  * adam_import_servo_lib
  *
  */

Blockly.Python['adam_import_servo_lib'] = function (block) {
    var codeOne = 'import sys, tty, termios\nfd = sys.stdin.fileno()\nold_settings = termios.tcgetattr(fd)\ndef getch():\n    try:\n        tty.setraw(sys.stdin.fileno())\n        ch = sys.stdin.read(1)\n    finally:\n';
    var codeTwo = '       termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)\n    return ch\n';
    var codeThree = 'from scservo_sdk import *    # Uses SCServo SDK library\n';
    return codeOne + codeTwo + '\n' + codeThree + '\n';
};

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
 * servo_right_hand_short
 *
 */
Blockly.Python['servo_right_hand_short'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_shoulder_angle = Blockly.Python.valueToCode(block, 'shoulder_angle', Blockly.Python.ORDER_ATOMIC);
  var value_forearm_angle = Blockly.Python.valueToCode(block, 'forearm_angle', Blockly.Python.ORDER_ATOMIC);
  var value_elbow_angle = Blockly.Python.valueToCode(block, 'elbow_angle', Blockly.Python.ORDER_ATOMIC);
  
  var code = variable_imu + '.nodeServoWrite("ArmR", ' + value_speed + ', ' + value_shoulder_angle + ', ' + value_forearm_angle + ', ' + value_elbow_angle + ', ' + value_elbow_angle + ')\n';
  
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
 * servo_left_hand_short
 *
 */
Blockly.Python['servo_left_hand_short'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_shoulder_angle = Blockly.Python.valueToCode(block, 'shoulder_angle', Blockly.Python.ORDER_ATOMIC);
  var value_forearm_angle = Blockly.Python.valueToCode(block, 'forearm_angle', Blockly.Python.ORDER_ATOMIC);
  var value_elbow_angle = Blockly.Python.valueToCode(block, 'elbow_angle', Blockly.Python.ORDER_ATOMIC);
  
  var code = variable_imu + '.nodeServoWrite("ArmL", ' + value_speed + ', ' + value_shoulder_angle + ', ' + value_forearm_angle + ', ' + value_elbow_angle + ', ' + value_elbow_angle + ')\n';
   
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
 * servo_press_short
 *
 */
Blockly.Python['servo_press_short'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_tilt_press = Blockly.Python.valueToCode(block, 'tilt_press', Blockly.Python.ORDER_ATOMIC);
  
  var code = variable_imu + '.nodeServoWrite("Loin", ' + value_speed + ', ' + value_tilt_press + ', 0)\n';
  
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
  var value_angle_right_fingers = Blockly.Python.valueToCode(block, 'angle_right_fingers', Blockly.Python.ORDER_ATOMIC);
  var value_angle_left_fingers = Blockly.Python.valueToCode(block, 'angle_left_fingers', Blockly.Python.ORDER_ATOMIC);
  
  var code = variable_imu + '.nodeServoWrite("Hands", ' + value_speed + ', ' + value_angle_right_fingers + ', ' + value_angle_left_fingers + ')\n';
  
  return code;
};

/**
 * servo_squeeze_fingers 
 *
 */
Blockly.Python['servo_squeeze_fingers'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);

  var code = variable_imu + '.nodeServoWrite("Hands", ' + value_speed + ', 100, 100)\n';
  
  return code;
};

/**
 * servo_left_squeeze_fingers 
 *
 */
Blockly.Python['servo_left_squeeze_fingers'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var code = variable_imu + '.nodeServoWrite("Hands", ' + value_speed + ', 100, 0)\n';
  return code;
};

/**
 * servo_right_squeeze_fingers 
 *
 */
Blockly.Python['servo_right_squeeze_fingers'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var code = variable_imu + '.nodeServoWrite("Hands", ' + value_speed + ', 0, 100)\n';
  return code;
};

/**
 * servo_unclench_fingers 
 *
 */
Blockly.Python['servo_unclench_fingers'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var code = variable_imu + '.nodeServoWrite("Hands", ' + value_speed + ', 0, 0)\n';
  return code;
};

/**
 * servo_left_unclench_fingers 
 *
 */
Blockly.Python['servo_left_unclench_fingers'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var code = variable_imu + '.nodeServoWrite("Hands", ' + value_speed + ', 100, 0)\n';
  return code;
};

/**
 * servo_right_unclench_fingers 
 *
 */
Blockly.Python['servo_right_unclench_fingers'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var code = variable_imu + '.nodeServoWrite("Hands", ' + value_speed + ', 0, 100)\n';
  return code;
};

/**
 * wheels_left_leg 
 *
 */
Blockly.Python['wheels_left_leg'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_first_motor = Blockly.Python.valueToCode(block, 'first_motor', Blockly.Python.ORDER_ATOMIC);
  var value_second_motor = Blockly.Python.valueToCode(block, 'second_motor', Blockly.Python.ORDER_ATOMIC);
  var code = variable_imu + '.setMotion(17, ' + value_first_motor + ', ' + value_second_motor + ')\n';
  return code;
};

/**
 * wheels_right_leg 
 *
 */
Blockly.Python['wheels_right_leg'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_first_motor = Blockly.Python.valueToCode(block, 'first_motor', Blockly.Python.ORDER_ATOMIC);
  var value_second_motor = Blockly.Python.valueToCode(block, 'second_motor', Blockly.Python.ORDER_ATOMIC);
  var code = variable_imu + '.setMotion(103, ' + value_first_motor + ', ' + value_second_motor + ')\n';
  return code;
};

/**
 * wheels_left_leg_extended
 *
 */
Blockly.Python['wheels_left_leg_extended'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_first_motor = Blockly.Python.valueToCode(block, 'first_motor', Blockly.Python.ORDER_ATOMIC);
  var value_second_motor = Blockly.Python.valueToCode(block, 'second_motor', Blockly.Python.ORDER_ATOMIC);
  var code = variable_imu + '.setMotion(17, ' + value_first_motor + ', ' + value_second_motor + ', True)';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
 * wheels_right_leg_extended
 *
 */
Blockly.Python['wheels_right_leg_extended'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_first_motor = Blockly.Python.valueToCode(block, 'first_motor', Blockly.Python.ORDER_ATOMIC);
  var value_second_motor = Blockly.Python.valueToCode(block, 'second_motor', Blockly.Python.ORDER_ATOMIC);
  var code = variable_imu + '.setMotion(103, ' + value_first_motor + ', ' + value_second_motor + ', True)';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
 * servo_common_function
 *
 */
Blockly.Python['servo_common_function'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var value_params_list = Blockly.Python.valueToCode(block, 'params_list', Blockly.Python.ORDER_ATOMIC);
  var code = variable_imu + '.nodeMultiServoWrite(' + value_params_list + ')\n';
  return code;
}; 

/**
 * servo_fingers_param_func
 *
 */
Blockly.Python['servo_fingers_param_func'] = function(block) {
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_angle_left_fingers = Blockly.Python.valueToCode(block, 'angle_left_fingers', Blockly.Python.ORDER_ATOMIC);
  var value_angle_right_fingers = Blockly.Python.valueToCode(block, 'angle_right_fingers', Blockly.Python.ORDER_ATOMIC);
  var code = '("Hands", ' + value_speed + ', ' + value_angle_left_fingers + ', ' + value_angle_right_fingers +  ')';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
 * servo_head_param_func
 *
 */
Blockly.Python['servo_head_param_func'] = function(block) {
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_head_angle = Blockly.Python.valueToCode(block, 'head_angle', Blockly.Python.ORDER_ATOMIC);
  var value_neck_angle = Blockly.Python.valueToCode(block, 'neck_angle', Blockly.Python.ORDER_ATOMIC);
  var code = '("Head", ' + value_speed + ', ' + value_head_angle + ', ' + value_neck_angle + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
 * servo_right_hand_short_param_func
 *
 */
Blockly.Python['servo_right_hand_short_param_func'] = function(block) {
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_shoulder_angle = Blockly.Python.valueToCode(block, 'shoulder_angle', Blockly.Python.ORDER_ATOMIC);
  var value_forearm_angle = Blockly.Python.valueToCode(block, 'forearm_angle', Blockly.Python.ORDER_ATOMIC);
  var value_elbow_angle = Blockly.Python.valueToCode(block, 'upper_elbow_angle', Blockly.Python.ORDER_ATOMIC);
  var code = '("ArmR", ' + value_speed + ', ' + value_shoulder_angle + ', ' + value_forearm_angle + ', ' + value_elbow_angle + ', ' + value_elbow_angle + ')';
  return [code, Blockly.Python.ORDER_NONE];
};


/**
 * servo_left_hand_short_param_func
 *
 */
Blockly.Python['servo_left_hand_short_param_func'] = function(block) {
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_shoulder_angle = Blockly.Python.valueToCode(block, 'shoulder_angle', Blockly.Python.ORDER_ATOMIC);
  var value_forearm_angle = Blockly.Python.valueToCode(block, 'forearm_angle', Blockly.Python.ORDER_ATOMIC);
  var value_elbow_angle = Blockly.Python.valueToCode(block, 'elbow_angle', Blockly.Python.ORDER_ATOMIC);
  var code = '("ArmL", ' + value_speed + ', ' + value_shoulder_angle + ', ' + value_forearm_angle + ', ' + value_elbow_angle + ', ' + value_elbow_angle + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
 * servo_torso_param_func
 *
 */
Blockly.Python['servo_torso_param_func'] = function(block) {
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_torso_angle = Blockly.Python.valueToCode(block, 'torso_angle', Blockly.Python.ORDER_ATOMIC);
  var code = '("Chest", ' + value_speed + ', ' + value_torso_angle + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
 * servo_press_short_param_func
 *
 */
Blockly.Python['servo_press_short_param_func'] = function(block) {
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_tilt_press = Blockly.Python.valueToCode(block, 'tilt_press', Blockly.Python.ORDER_ATOMIC);
  var code = '("Loin", ' + value_speed + ', ' + value_tilt_press + ', 0)';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
 * servo_legs_param_func
 *
 */
Blockly.Python['servo_legs_param_func'] = function(block) {
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_leg_lift_angle = Blockly.Python.valueToCode(block, 'leg lift angle', Blockly.Python.ORDER_ATOMIC);
  var code = '("Pivas", ' + value_speed + ', ' + value_leg_lift_angle + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
 * rangefinder_left
 *
 */
Blockly.Python['rangefinder_left'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var code = variable_imu + '.getDistance(17)';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
 * rangefinder_right
 *
 */
Blockly.Python['rangefinder_right'] = function(block) {
  var variable_imu = Blockly.Python.nameDB_.getName(block.getFieldValue('imu'), Blockly.Variables.NAME_TYPE);
  var code = variable_imu + '.getDistance(103)';;
  return [code, Blockly.Python.ORDER_NONE];
};

/**
 * import_adam_rangefinders
 *
 */
Blockly.Python['import_adam_rangefinders'] = function(block) {
  Blockly.Python.definitions_['from_motionAndRangefinders_import_MotionAndRangefinders'] = 'from motionAndRangefinders import MotionAndRangefinders';
  var code = 'MotionAndRangefinders()';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
 * common_import_rangefinders_i2c
 *
 */
Blockly.Python['common_import_rangefinders_i2c'] = function(block) {
  var value_bus_number = Blockly.Python.valueToCode(block, 'bus_number', Blockly.Python.ORDER_ATOMIC);
  var checkbox_verbose_mode = block.getFieldValue('verbose_mode') === 'TRUE';
  var value_bus_number = Blockly.Python.valueToCode(block, 'bus_number', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['from_rangefinders_i2c.ReadSensor_import_ReadSensor'] = 'from rangefinders_i2c.ReadSensor import ReadSensor';

  var code0 = 'ReadSensor('+ value_bus_number +')';
  var code1 = 'ReadSensor('+ value_bus_number +', True)';

  var code = code0

  if(checkbox_verbose_mode)
    code = code1

  return [code, Blockly.Python.ORDER_NONE];
};

/**
 * rangefinder_get_distance_i2c
 *
 */
Blockly.Python['rangefinder_get_distance_i2c'] = function(block) {
  var value_rangefinder_address = Blockly.Python.valueToCode(block, 'rangefinder_address', Blockly.Python.ORDER_ATOMIC);
  var code = '.GetDistance('+ value_rangefinder_address +')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
 * rangefinder_i2c_address
 *
 */
Blockly.Python['rangefinder_i2c_address'] = function(block) {
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

/**
  * common_sensor_declaration_extended
  *
  */
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

