Blockly.defineBlocksWithJsonArray([
  {
  // Adam eye_pack
  "type": "eye_pack",
  "message0": "addr %1 reg %2 color %3 start_led %4 stop_led %5 step %6 time %7",
  "args0": [
    {
      "type": "input_value",
      "name": "addr",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "reg",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "color",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "start_led",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "stop_led",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "step",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "time",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
  },
  // Adam servo import dll
  {
  "type": "adam_import_servo_lib",
  "message0": "import servo library",
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
  },
  // Adam ping servo variable
  {
  "type": "adam_import_ping_variable",
  "message0": "import ping variable %1 SCS_ID %2 BAUDRATE %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "SCS_ID",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "baudrate",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
  },
  //baudrate variable
  {
  "type": "baudrate_variable",
  "message0": "BAUDRATE VALUE %1",
  "args0": [
    {
      "type": "field_number",
      "name": "BAUDRATE",
      "value": 1000000,
      "min": 1000000,
      "max": 1000000
    }
  ],
  "output": "Number",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
  }
]);

/**
 * Python
 */
// If any new block imports any library, add that library name here.
Blockly.Python.addReservedWords('math,random,Number');

Blockly.Python['baudrate_variable'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code =  Number(block.getFieldValue('BAUDRATE'));

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['adam_import_ping_variable'] = function(block) {
  var value_scs_id = Blockly.Python.valueToCode(block, 'SCS_ID', Blockly.Python.ORDER_ATOMIC);
  var value_baudrate = Blockly.Python.valueToCode(block, 'baudrate', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var codeOne = 'SCS_ID                  = ' + value_scs_id + '\n';
  var codeTwo = 'BAUDRATE                = ' + value_baudrate + '\n';
  var codeThree = 'DEVICENAME              = ' + '/dev/ttyUSB0\n'
  var codeFour =  'protocol_end            = 0\n' 
  return codeOne + codeTwo + codeThree + codeFour;
};

Blockly.Python['adam_import_servo_lib'] = function(block) {
  // TODO: Assemble Python into code variable.
  var codeOne = 'import sys, tty, termios\nfd = sys.stdin.fileno()\nold_settings = termios.tcgetattr(fd)\ndef getch():\n    try:\n        tty.setraw(sys.stdin.fileno())\n        ch = sys.stdin.read(1)\n    finally:\n';
  var codeTwo = '       termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)\n    return ch\n'
  var codeThree = 'from scservo_sdk import *    # Uses SCServo SDK library\n'
  return codeOne + codeTwo + '\n' + codeThree + '\n';
};

Blockly.Python['eye_pack'] = function(block) {
  var value_addr = Blockly.Python.valueToCode(block, 'addr', Blockly.Python.ORDER_ATOMIC);
  var value_reg = Blockly.Python.valueToCode(block, 'reg', Blockly.Python.ORDER_ATOMIC);
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var value_start_led = Blockly.Python.valueToCode(block, 'start_led', Blockly.Python.ORDER_ATOMIC);
  var value_stop_led = Blockly.Python.valueToCode(block, 'stop_led', Blockly.Python.ORDER_ATOMIC);
  var value_step = Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_ATOMIC);
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '[' + value_addr + ', ' + value_reg + ', ' + value_color + ', ' + value_start_led + ', ' + value_stop_led + ', ' + value_step + ', ' + value_time + ', 0' + ']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
