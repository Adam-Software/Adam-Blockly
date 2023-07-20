/**
 * Python code for Adam v.3.0 blocks
 * Blocks are located here BlocklySource\source\blocks\adam_three.js
 */

'use strict';

Blockly.Python.addReservedWords('AdamManager', 'SerializableCommands', 'MotorCommand');

Blockly.Python['move_free_vector_variable'] = function(block) {
  var number_x = block.getFieldValue('x');
  var number_y = block.getFieldValue('y');
  var number_z = block.getFieldValue('z');
  var code = '(' + number_x +', '+ number_y +'), ' + number_z;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['move_free_vector'] = function(block) {
  var value_instance_variable = Blockly.Python.valueToCode(block, 'instance_variable', Blockly.Python.ORDER_ATOMIC);
  var value_vector_variable = Blockly.Python.valueToCode(block, 'vector_variable', Blockly.Python.ORDER_NONE);
  var code = value_instance_variable + '.move(' + value_vector_variable + ')\n';
  return code;
};

Blockly.Python['speed_clear_register'] = function(block) {
  var code = '.clear_registers()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['move_get_register'] = function(block) {
  var value_instance_class_variable = Blockly.Python.valueToCode(block, 'instance_class_variable', Blockly.Python.ORDER_NONE);
  var dropdown_wheel_position = block.getFieldValue('wheel_position');
  var code =  value_instance_class_variable + '.move_controller.' + dropdown_wheel_position + '.get_registers()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['move_vector_stop'] = function(block) {
  var code = '(0, 0), 0';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['move_vector_turn_left'] = function(block) {
  var value_speed_variable = Blockly.Python.valueToCode(block, 'speed_variable', Blockly.Python.ORDER_NONE);
  var code = '(0, 0), -' + value_speed_variable;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['move_vector_turn_right'] = function(block) {
  var value_speed_variable = Blockly.Python.valueToCode(block, 'speed_variable', Blockly.Python.ORDER_NONE);
  var code = '(0, 0), ' + value_speed_variable;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['move_vector_right_and_back'] = function(block) {
  var value_speed_variable = Blockly.Python.valueToCode(block, 'speed_variable', Blockly.Python.ORDER_NONE);
  var code = '('+ value_speed_variable + ', -' + value_speed_variable + '), 0';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['move_vector_left_and_back'] = function(block) {
  var value_speed_variable = Blockly.Python.valueToCode(block, 'speed_variable', Blockly.Python.ORDER_NONE);
  var code = '(-'+ value_speed_variable + ', -' + value_speed_variable + '), 0';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['move_vector_left_and_forward'] = function(block) {
  var value_speed_variable = Blockly.Python.valueToCode(block, 'speed_variable', Blockly.Python.ORDER_NONE);
  var code = '(-'+ value_speed_variable + ', ' + value_speed_variable + '), 0';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['move_vector_right_and_forward'] = function(block) {
  var value_speed_variable = Blockly.Python.valueToCode(block, 'speed_variable', Blockly.Python.ORDER_NONE);
  var code = '('+ value_speed_variable + ', ' + value_speed_variable + '), 0';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['move_vector_left'] = function(block) {
  var value_speed_variable = Blockly.Python.valueToCode(block, 'speed_variable', Blockly.Python.ORDER_NONE);
  var code = '(-'+ value_speed_variable + ', 0), 0';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['move_vector_right'] = function(block) {
  var value_speed_variable = Blockly.Python.valueToCode(block, 'speed_variable', Blockly.Python.ORDER_NONE);
  var code = '('+ value_speed_variable + ', 0), 0';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['move_vector_back'] = function(block) {
  var value_speed_variable = Blockly.Python.valueToCode(block, 'speed_variable', Blockly.Python.ORDER_NONE);
  var code = '(0, -' + value_speed_variable +'), 0';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['speed_vector_value'] = function(block) {
  var number_speed_vector_value = block.getFieldValue('speed_vector_value');
  var code = number_speed_vector_value;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['move_vector_forward'] = function(block) {
  var value_speed_variable = Blockly.Python.valueToCode(block, 'speed_variable', Blockly.Python.ORDER_NONE);
  var code = '(0, ' + value_speed_variable +'), 0';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['move_controller_vector'] = function(block) {
  var value_instance_variable = Blockly.Python.valueToCode(block, 'instance_variable', Blockly.Python.ORDER_ATOMIC);
  var value_vector_variable = Blockly.Python.valueToCode(block, 'vector_variable', Blockly.Python.ORDER_NONE);
  var code = value_instance_variable + '.move(' + value_vector_variable + ')\n';
  return code;
};

Blockly.Python['speed_stop'] = function(block) {
  var code = '.set_speed(0)';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['speed_value'] = function(block) {
  var number_speed_value = block.getFieldValue('speed_value');
  var code = number_speed_value;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['move_command_set_speed'] = function(block) {
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_NONE)
  var code = '.set_speed(' + value_speed + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['move_controller'] = function(block) {
  var value_instance_class_variable = Blockly.Python.valueToCode(block, 'instance_class_variable', Blockly.Python.ORDER_ATOMIC);
  var dropdown_wheel_position = block.getFieldValue('wheel_position');
  var value_command = Blockly.Python.valueToCode(block, 'command', Blockly.Python.ORDER_NONE);
  var code = value_instance_class_variable + '.move_controller.' +  dropdown_wheel_position  + value_command + '\n';
  return code;
};

Blockly.Python['controller_motor_command'] = function(block) {
  Blockly.Python.definitions_['from_adam_sdk_import_MotorCommand'] = 'from adam_sdk import MotorCommand';
  var value_servo_constant = Blockly.Python.valueToCode(block, 'servo_constant', Blockly.Python.ORDER_ATOMIC);
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var code = 'MotorCommand(' + value_servo_constant + ", " + value_angle + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controller_return_to_start_position_command'] = function(block) {
  var value_instance_class_variable = Blockly.Python.valueToCode(block, 'instance_class_variable', Blockly.Python.ORDER_ATOMIC);
  var code = value_instance_class_variable +'.return_to_start_position()\n';
  return code;
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
  var code = value_instance_class_variable +'.handle_command(commands=SerializableCommands(' + value_command_array +'))\n';
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

Blockly.Python['adam_two_seven_sensor_temperature'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.temperature';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['adam_two_seven_sensor_pressure'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.pressure';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['adam_two_seven_sensor_altitude'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.altitude';
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['adam_two_seven_sensor_acceleration'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.readAccel()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['adam_two_seven_sensor_gyro'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.readGyro()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['adam_two_seven_sensor_magnetometer'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.readMagnet()';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['adam_two_seven_sensor_declaration_extended'] = function(block) {
  Blockly.Python.definitions_['import_adafruit_bmp280'] = 'import adafruit_bmp280';
  var variable_i2c_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('i2c_variable'), Blockly.Variables.NAME_TYPE);
  var value_sensor_address = Blockly.Python.valueToCode(block, 'sensor_address', Blockly.Python.ORDER_NONE);
  var code = 'adafruit_bmp280.Adafruit_BMP280_I2C(' + variable_i2c_variable + ', ' + value_sensor_address +  ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['adam_two_seven_bmp280_addr_const'] = function(block) {
  var dropdown_addr_variable = block.getFieldValue('addr_variable');
  var code = dropdown_addr_variable;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['adam_two_seven_sensor_set_pressure'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var number_current_atmospheric_pressure_variable = block.getFieldValue('current_atmospheric_pressure_variable');
  var code = variable_sensor_variable + '.sea_level_pressure = ' + number_current_atmospheric_pressure_variable + '\n';
  return code;
};

Blockly.Python['adam_two_seven_sensor_mpu_9250_declaration'] = function(block) {
  Blockly.Python.definitions_['import_FaBo9Axis_MPU9250'] = 'import FaBo9Axis_MPU9250';
  var code = 'FaBo9Axis_MPU9250.MPU9250()';
  return [code, Blockly.Python.ORDER_NONE];
};


