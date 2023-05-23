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
  "message0": "команда %1 константа сервопривода %2 угол поворота %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "servo_constant",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "angle",
      "check": "Number"
    }
  ],
  "output": null,
  "colour": 180,
  "tooltip": "Блок управление сервоприводами робота",
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
  * controller_new_instance_class
  *
  */
{
  "type": "controller_new_instance_class",
  "message0": "новый экземпляр класса AdamController()",
  "output": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * controller_handle_command
  *
  */
{
  "type": "controller_handle_command",
  "message0": "переменная класса AdamController() %1 список команд %2",
  "args0": [
    {
      "type": "input_value",
      "name": "instance_class_variable"
    },
    {
      "type": "input_value",
      "name": "command_array",
      "check": "Array"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
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
},

/**
  * controller_const_left_upper_leg
  *
  */
{
  "type": "controller_const_left_upper_leg",
  "message0": "левое бедро",
  "output": null,
  "colour": 220,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * controller_const_right_upper_leg
  *
  */
{
  "type": "controller_const_right_upper_leg",
  "message0": "правое бедро",
  "output": null,
  "colour": 220,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * controller_const_left_lower_leg
  *
  */
{
  "type": "controller_const_left_lower_leg",
  "message0": "левое колено",
  "output": null,
  "colour": 220,
  "tooltip": "",
  "helpUrl": ""
},


/**
  * controller_const_right_upper_leg
  *
  */
{
  "type": "controller_const_right_lower_leg",
  "message0": "правое колено",
  "output": null,
  "colour": 220,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * controller_const_left_foot
  *
  */
{
  "type": "controller_const_left_foot",
  "message0": "левая стопа",
  "output": null,
  "colour": 220,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * controller_const_right_foot
  *
  */
{
  "type": "controller_const_right_foot",
  "message0": "правая стопа",
  "output": null,
  "colour": 220,
  "tooltip": "",
  "helpUrl": ""
}]);