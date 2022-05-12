/**
 * Blocks for Adam v.2.0
 * Code generated file you can find in BlocklySource\source\generators.
 * File name with code generator has the same name with this file
 */

Blockly.defineBlocksWithJsonArray([

/**
  * import_adam_servo_api
  *
  */
{
  "type": "import_adam_servo_api",
  "message0": "инициализация API",
  "output": null,
  "colour": 230,
  "tooltip": "Инициализация экземпляра класса для работы с API",
  "helpUrl": ""
},

/**
  * import_adam_servo_api_with_param
  *
  */
{
  "type": "import_adam_servo_api_with_param",
  "message0": "инициализация API %1 номер камеры %2 инициализация для програмирования %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "numCam",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "flagConf",
      "check": "Boolean"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "Инициализаци¤ экземпл¤ра класса дл¤ работы с API с указанием необязательных параметров",
  "helpUrl": ""
},

/**
  * servo_speed_variable
  *
  */
{
  "type": "servo_speed_variable",
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
  "colour": 230,
  "tooltip": "Переменная скорости. Может иметь значение от 0 до 2000",
  "helpUrl": ""
},

/**
  * servo_angle_variable
  *
  */
{
  "type": "servo_angle_variable",
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
  "colour": 230,
  "tooltip": "Переменная угла в процентах. Может иметь значение от 0 до 100",
  "helpUrl": ""
},

/**
  * servo_head
  *
  */
{
  "type": "servo_head",
  "message0": "голова  %1 переменная  AdamIMU %2 %3 скорость %4 угол поворота головы %5 угол подъема головы %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "imu",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "head_angle",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "neck_angle",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Параметры: скорость, угол сервы шеи (лево-право), угол сервы головы (верх-низ)",
  "helpUrl": ""
},

/**
  * servo_right_hand
  *
  */
{
  "type": "servo_right_hand",
  "message0": "правая рука %1 переменная AdamIMU %2 %3 скорость %4 угол плеча %5 угол предплечья %6 угол верхнего локтя %7 угол нижнего локтя %8",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "imu",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "shoulder_angle",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "forearm_angle",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "upper_elbow_angle",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "lower_elbow_angle",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "Управление правой рукой",
  "helpUrl": ""
},

/**
  * servo_right_hand_short
  *
  */
{
  "type": "servo_right_hand_short",
  "message0": "правая рука %1 переменная AdamIMU %2 %3 скорость %4 угол плеча %5 угол предплечья %6 угол локтя %7",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "imu",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "shoulder_angle",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "forearm_angle",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "elbow_angle",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "Управление правой рукой",
  "helpUrl": ""
},

/**
  * servo_left_hand
  *
  */
{
  "type": "servo_left_hand",
  "message0": "левая рука %1 переменная AdamIMU %2 %3 скорость %4 угол плеча %5 угол предплечья %6 угол верхнего локтя %7 угол нижнего локтя %8",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "imu",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "shoulder_angle",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "forearm_angle",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "upper_elbow_angle",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "lower_elbow_angle",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "Управление левой рукой",
  "helpUrl": ""
},

/**
  * servo_left_hand_short
  *
  */
{
  "type": "servo_left_hand_short",
  "message0": "левая рука %1 переменная AdamIMU %2 %3 скорость %4 угол плеча %5 угол предплечья %6 угол локтя %7",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "imu",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "shoulder_angle",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "forearm_angle",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "elbow_angle",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "Управление левой рукой",
  "helpUrl": ""
},
 
/**
  * servo_torso
  *
  */
  
{
  "type": "servo_torso",
  "message0": "туловище %1 переменная AdamIMU %2 %3 скорость %4 угол наклона %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "imu",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "torso_angle",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 140,
  "tooltip": "Параметры: скорость, поворот (лево-право) туловища",
  "helpUrl": ""
},

/**
  * servo_press
  *
  */  
{
  "type": "servo_press",
  "message0": "пресс %1 переменная AdamIMU %2 %3 скорость %4 угол наклона верхнего пресса %5 угол наклона нижнего пресса %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "imu",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "tilt_upper_press",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "tilt_lower_press",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 100,
  "tooltip": "Управление прессом",
  "helpUrl": ""
},

/**
  * servo_press_short
  *
  */  
{
  "type": "servo_press_short",
  "message0": "пресс %1 переменная AdamIMU %2 %3 скорость %4 угол наклона пресса %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "imu",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "tilt_press",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 100,
  "tooltip": "Управление прессом",
  "helpUrl": ""
},

/**
  * servo_legs
  *
  */ 
{
  "type": "servo_legs",
  "message0": "ноги %1 переменная AdamIMU %2 %3 скорость %4 высота подъема %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "imu",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "leg lift angle",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Управление ногами",
  "helpUrl": ""
},

/**
  * servo_fingers
  *
  */  
{
  "type": "servo_fingers",
  "message0": "пальцы рук %1 переменная AdamIMU %2 %3 скорость %4 угол пальцев левой руки %5 угол пальцев правой руки %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "imu",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "angle_left_fingers",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "angle_right_fingers",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 50,
  "tooltip": "Управления пальцами рук",
  "helpUrl": ""
},

/**
  * servo_squeeze_fingers
  *
  */ 
{
  "type": "servo_squeeze_fingers",
  "message0": "сжать пальцы рук %1 переменная AdamIMU %2 %3 скорость %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "imu",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 50,
  "tooltip": "Сжать пальцы рук",
  "helpUrl": ""
},

/**
  * servo_left_squeeze_fingers
  *
  */ 
{
  "type": "servo_left_squeeze_fingers",
  "message0": "сжать пальцы левой руки %1 переменная AdamIMU %2 %3 скорость %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "imu",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 50,
  "tooltip": "Сжать пальцы левой руки",
  "helpUrl": ""
},

/**
  * servo_right_squeeze_fingers
  *
  */ 
{
  "type": "servo_right_squeeze_fingers",
  "message0": "сжать пальцы правой руки %1 переменная AdamIMU %2 %3 скорость %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "imu",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 50,
  "tooltip": "Сжать пальцы правой руки",
  "helpUrl": ""
},

/**
  * servo_unclench_fingers
  *
  */ 
{
  "type": "servo_unclench_fingers",
  "message0": "разжать пальцы рук %1 переменная AdamIMU %2 %3 скорость %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "imu",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 50,
  "tooltip": "Разжать пальцы рук",
  "helpUrl": ""
},

/**
  * servo_left_unclench_fingers
  *
  */ 
{
  "type": "servo_left_unclench_fingers",
  "message0": "разжать пальцы левой руки %1 переменная AdamIMU %2 %3 скорость %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "imu",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 50,
  "tooltip": "Разжать пальцы левой руки",
  "helpUrl": ""
},

/**
  * servo_right_unclench_fingers
  *
  */ 
{
  "type": "servo_right_unclench_fingers",
  "message0": "разжать пальцы правой руки %1 переменная AdamIMU %2 %3 скорость %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "imu",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 50,
  "tooltip": "Разжать пальцы правой руки",
  "helpUrl": ""
},

/**
  * wheels_left_leg
  *
  */ 
{
  "type": "wheels_left_leg",
  "message0": "колеса на левой ноге %1 переменная AdamIMU %2 %3 первый мотор %4 второй мотор %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "imu",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "first_motor",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "second_motor",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "Управление колесами на левой ноге",
  "helpUrl": ""
},

/**
  * wheels_right_leg
  *
  */ 
{
  "type": "wheels_right_leg",
  "message0": "колеса на правой ноге %1 переменная AdamIMU %2 %3 первый мотор %4 второй мотор %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "imu",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "first_motor",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "second_motor",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "Управление колесами на правой ноге",
  "helpUrl": ""
}
]);