/**
 * Python code for Adam v.3.0 blocks
 * Blocks are located here BlocklySource\source\blocks\adam_three.js
 */

'use strict';
// If any new block imports any library, add that library name here.
Blockly.Python.addReservedWords('math,random,Number,smbus');

Blockly.Python['select_baudrate'] = function (block) {
    var dropdown_select_baudrate = block.getFieldValue('select_baudrate');
    var code = Number(dropdown_select_baudrate);
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['baudrate_variable'] = function (block) {
    var code = Number(block.getFieldValue('BAUDRATE'));
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['adam_import_ping_variable'] = function (block) {
    var value_scs_id = Blockly.Python.valueToCode(block, 'SCS_ID', Blockly.Python.ORDER_ATOMIC);
    var value_baudrate = Blockly.Python.valueToCode(block, 'baudrate', Blockly.Python.ORDER_ATOMIC);
    var codeOne = 'SCS_ID                  = ' + value_scs_id + '\n';
    var codeTwo = 'BAUDRATE                = ' + value_baudrate + '\n';
    var codeThree = 'DEVICENAME              = ' + '/dev/ttyUSB0\n';
    var codeFour = 'protocol_end            = 0\n';
    return codeOne + codeTwo + codeThree + codeFour;
};

Blockly.Python['adam_import_servo_lib'] = function (block) {
    var codeOne = 'import sys, tty, termios\nfd = sys.stdin.fileno()\nold_settings = termios.tcgetattr(fd)\ndef getch():\n    try:\n        tty.setraw(sys.stdin.fileno())\n        ch = sys.stdin.read(1)\n    finally:\n';
    var codeTwo = '       termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)\n    return ch\n';
    var codeThree = 'from scservo_sdk import *    # Uses SCServo SDK library\n';
    return codeOne + codeTwo + '\n' + codeThree + '\n';
};

Blockly.Python['eye_pack'] = function (block) {
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

Blockly.Python['write_i2c_block_data'] = function(block) {
  var value_smbus_addr = Blockly.Python.valueToCode(block, 'smbus_addr', Blockly.Python.ORDER_ATOMIC);
  var value_cmd = Blockly.Python.valueToCode(block, 'cmd', Blockly.Python.ORDER_ATOMIC);
  var value_packet = Blockly.Python.valueToCode(block, 'packet', Blockly.Python.ORDER_ATOMIC);
  var code = 'b.write_i2c_block_data(' + value_smbus_addr + ',' + value_cmd + ',' + value_packet +')\n'
  return code;
};


Blockly.Python['import_smbus'] = function(block) {
  Blockly.Python.definitions_['import_smbus'] = 'import smbus';
  var code = 'b = smbus.SMBus(1)\n';
  return code;
};
Blockly.Python['time_sleep'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  var value_sleep = Blockly.Python.valueToCode(block, 'sleep', Blockly.Python.ORDER_ATOMIC);
  var code = 'time.sleep(' + value_sleep + ')\n';
  return code;
};
