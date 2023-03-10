/**
 * Blocks for Adam v.2.0
 * Code generated file you can find in BlocklySource\source\generators.
 * File name with code generator has the same name with this file
 */

Blockly.defineBlocksWithJsonArray([

/**
  * adam_import_servo_lib
  *
  */

{
	"type": "adam_import_servo_lib",
    "message0": "import servo library",
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
},

/**
  * adam_import_ping_variable
  *
  */

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
        }],
	"previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
},

/**
  * select_baudrate
  *
  */
{
	"type": "select_baudrate",
    "lastDummyAlign0": "RIGHT",
    "message0": "Select BAUDRATE %1",
    "args0": [
		{
			"type": "field_dropdown",
            "name": "select_baudrate",
            "options":
			[
				[
					"38400",
                    "38400"
                ],
                [
					"57600",
                    "57600"
                ],
                [
					"76800",
                    "76800"
                ],
				[
					"115200",
                    "115200"
                ],
                [
					"120000",
                    "128000"
				],
                [
					"250000",
                    "250000"
                ],
                [
					"500000",
                    "500000"
                ],
                [
					"1000000",
                    "1000000"
                ]
			]
		}],
	"output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
},

   /**
    * baudrate_variable
	*
    */
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
        }],
    "output": "Number",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
}

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
  "tooltip": "Инициализация экземпляра класса для работы с API с указанием необязательных параметров",
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
  "message0": "пальцы рук %1 переменная AdamIMU %2 %3 скорость %4 угол пальцев правой руки %5 угол пальцев левой руки %6",
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
      "name": "angle_right_fingers",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "angle_left_fingers",
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
},

/**
 * wheels_left_leg_extended
 * 
 */
{
  "type": "wheels_left_leg_extended",
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
  "output": null,
  "colour": 230,
  "tooltip": "Управление колесами",
  "helpUrl": ""
},

/**
 * wheels_right_leg_extended
 * 
 */
{
  "type": "wheels_right_leg_extended",
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
  "output": null,
  "colour": 230,
  "tooltip": "Управление ногами",
  "helpUrl": ""
},

/**
 * servo_common_function
 * 
 */
{
  "type": "servo_common_function",
  "message0": "Общая процедура %1 переменная AdamIMU %2 %3 список параметров %4",
  "args0": [
    {
      "type": "input_dummy",
      "align": "CENTRE"
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
      "name": "params_list",
      "check": "Array"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 50,
  "tooltip": "Процедура позволяющая вызывать несколько сервоприводов одновременно",
  "helpUrl": ""
},

/**
 * servo_fingers_param_func
 * 
 */
{
  "type": "servo_fingers_param_func",
  "message0": "пальцы рук %1 скорость %2 угол пальцев левой руки %3 угол пальцев правой руки %4",
  "args0": [
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
  "output": null,
  "colour": 50,
  "tooltip": "Управления пальцами рук",
  "helpUrl": ""
},

/**
 * servo_head_param_func
 * 
 */
{
  "type": "servo_head_param_func",
  "message0": "голова  %1 скорость %2 угол головы %3 угол шеи %4",
  "args0": [
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
  "output": null,
  "colour": 230,
  "tooltip": "Управление наклоном головы и шеи",
  "helpUrl": ""
},

/**
 * servo_right_hand_short_param_func
 * 
 */
{
  "type": "servo_right_hand_short_param_func",
  "message0": "правая рука %1 скорость %2 угол плеча %3 угол предплечья %4 угол локтя %5",
  "args0": [
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
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 270,
  "tooltip": "Управление правой рукой",
  "helpUrl": ""
},

/**
 * servo_left_hand_short_param_func
 * 
 */
{
  "type": "servo_left_hand_short_param_func",
  "message0": "левая рука %1 скорость %2 угол плеча %3 угол предплечья %4 угол локтя %5",
  "args0": [
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
  "output": null,
  "colour": 270,
  "tooltip": "Управление левой рукой",
  "helpUrl": ""
},

/**
 * servo_torso_param_func
 * 
 */
{
  "type": "servo_torso_param_func",
  "message0": "туловище %1 скорость %2 угол наклона %3",
  "args0": [
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
  "output": null,
  "colour": 140,
  "tooltip": "Управление туловищем",
  "helpUrl": ""
},

/**
 * servo_press_short_param_func
 * 
 */
{
  "type": "servo_press_short_param_func",
  "message0": "пресс %1 скорость %2 угол наклона пресса %3",
  "args0": [
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
  "output": null,
  "colour": 100,
  "tooltip": "Управление прессом",
  "helpUrl": ""
},

/**
 * servo_legs_param_func
 * 
 */
{
  "type": "servo_legs_param_func",
  "message0": "ноги %1 скорость %2 угол наклона %3",
  "args0": [
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
  "output": null,
  "colour": 230,
  "tooltip": "Управление ногами",
  "helpUrl": ""
},

/**
 * rangefinder_left
 * 
 */
{
  "type": "rangefinder_left",
  "message0": "левый дальномер %1 переменная AdamIMU %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "imu",
      "variable": "item"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "Получение данных с дальномера расположенных на левой ноге",
  "helpUrl": ""
},

/**
 * rangefinder_right
 * 
 */
{
  "type": "rangefinder_right",
  "message0": "правый дальномер %1 переменная AdamRangefinders %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "imu",
      "variable": "item"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "Получение данных с дальномера расположенных на правой ноге",
  "helpUrl": ""
},

/**
 * import_adam_rangefinders
 * 
 */
{
  "type": "import_adam_rangefinders",
  "message0": "инициализация дальномеров и колес",
  "output": null,
  "colour": 230,
  "tooltip": "Инициализация экземпляра класса для работы с дальномерами и колесами",
  "helpUrl": ""
},

/**
 * common_import_rangefinders_i2c
 *
 */
{
  "type": "common_import_rangefinders_i2c",
  "lastDummyAlign0": "RIGHT",
  "message0": "инициализировать дальномеры  %1 открыть шину I2C %2 показывать ошибки %3",
  "args0": [
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_value",
      "name": "bus_number",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "field_checkbox",
      "name": "verbose_mode",
      "checked": false
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 315,
  "tooltip": "Инициализирует класс работы с дальномерами и открывает шину I2C",
  "helpUrl": ""
},

/**
 * rangefinder_get_distance_i2c
 *
 */
{
  "type": "rangefinder_get_distance_i2c",
  "message0": "получить расстояние %1 адрес дальномера %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "rangefinder_address"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 315,
  "tooltip": "Получение данных дальномера с указанным адресом ",
  "helpUrl": ""
},

/**
 * rangefinder_i2c_address
 *
 */
{
  "type": "rangefinder_i2c_address",
  "message0": "переменные I2C дальномеров %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "device_addr",
      "options": [
        [
          "0x18",
          "24"
        ],
        [
          "0x19",
          "25"
        ],
        [
          "0x1A",
          "26"
        ],
        [
          "0x1B",
          "27"
        ],
        [
          "0x1C",
          "28"
        ],
        [
          "0x1D",
          "29"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}
]);