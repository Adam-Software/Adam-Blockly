/**
 * Blocks for Adam v.3.0
 * Code generated file you can find in BlocklySource\source\generators.
 * File name with code generator has the same name with this file
 */

Blockly.defineBlocksWithJsonArray([

/**
  * controller_motor_command
  *
  */
{
  "type": "controller_motor_command",
  "message0": "команда %1 константа сервопривода %2 угол поворота %3 скорость %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "servo_constant"
    },
    {
      "type": "input_value",
      "name": "angle"
    },
    {
      "type": "input_value",
      "name": "speed"
    }
  ],
  "output": null,
  "colour": 180,
  "tooltip": "Блок управление сервоприводами робота",
  "helpUrl": ""
},

/**
  * servo_speed_variable
  *
  */
{
  "type": "controller_speed_variable",
  "message0": "скорость %1",
  "args0": [
    {
      "type": "field_number",
      "name": "speed",
      "value": 0,
      "min": 0,
      "max": 2000,
      "precision": 1
    }
  ],
  "inputsInline": false,
  "output": "Number",
  "colour": 180,
  "tooltip": "Переменная скорости. Может иметь значение от 0 до 2000",
  "helpUrl": ""
},

/**
  * servo_angle_variable
  *
  */
{
  "type": "controller_angle_variable",
  "message0": "угол %1 %%",
  "args0": [
    {
      "type": "field_number",
      "name": "angle",
      "value": 0,
      "min": 0,
      "max": 100,
      "precision": 1
    }
  ],
  "inputsInline": false,
  "output": "Number",
  "colour": 180,
  "tooltip": "Переменная угла в процентах. Может иметь значение от 0 до 100",
  "helpUrl": ""
},

/**
  * controller_const_head
  *
  */
{
  "type": "controller_const_head",
  "message0": "голова",
  "output": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * controller_const_neck
  *
  */
{
  "type": "controller_const_neck",
  "message0": "шея",
  "output": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * controller_const_right_hand
  *
  */
{
  "type": "controller_const_right_hand",
  "message0": "правая рука",
  "output": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * controller_const_left_hand
  *
  */
{
  "type": "controller_const_left_hand",
  "message0": "левая рука",
  "output": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * controller_const_right_lower_arm_up
  *
  */
{
  "type": "controller_const_right_lower_arm_up",
  "message0": "правый локоть",
  "output": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * controller_const_left_lower_arm_up
  *
  */
{
  "type": "controller_const_left_lower_arm_up",
  "message0": "левый локоть",
  "output": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * controller_const_right_upper_arm
  *
  */
{
  "type": "controller_const_right_upper_arm",
  "message0": "правое предплечье",
  "output": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * controller_const_left_upper_arm
  *
  */
{
  "type": "controller_const_left_upper_arm",
  "message0": "левое предплечье",
  "output": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * controller_const_right_shoulder
  *
  */
{
  "type": "controller_const_right_shoulder",
  "message0": "правое плечо",
  "output": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * controller_const_left_shoulder
  *
  */
{
  "type": "controller_const_left_shoulder",
  "message0": "левое плечо",
  "output": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * controller_const_chest
  *
  */
{
  "type": "controller_const_chest",
  "message0": "грудь",
  "output": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * controller_const_press
  *
  */
{
  "type": "controller_const_press",
  "message0": "пресс",
  "output": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
}






]);