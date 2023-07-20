/**
 * Blocks for Adam v.3.0
 * Code generated file you can find in BlocklySource\source\generators.
 * File name with code generator has the same name with this file
 */

Blockly.defineBlocksWithJsonArray([

/**
  * move_free_vector_variable
  *
  */
{
  "type": "move_free_vector_variable",
  "lastDummyAlign0": "CENTRE",
  "message0": "вектор движения X: %1 Y: %2 Z: %3",
  "args0": [
    {
      "type": "field_number",
      "name": "x",
      "value": 0,
      "min": -1,
      "max": 1,
      "precision": 0.1
    },
    {
      "type": "field_number",
      "name": "y",
      "value": 0,
      "min": -1,
      "max": 1,
      "precision": 0.1
    },
    {
      "type": "field_number",
      "name": "z",
      "value": 0,
      "min": -1,
      "max": 1,
      "precision": 0.1
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * move_free_vector
  *
  */
{
  "type": "move_free_vector",
  "message0": "переменная класса AdamManager() %1 задать вектор движения %2",
  "args0": [
    {
      "type": "input_value",
      "name": "instance_variable"
    },
    {
      "type": "input_value",
      "name": "vector_variable",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * speed_clear_register
  *
  */
{
  "type": "speed_clear_register",
  "message0": "очистить значения регистра",
  "inputsInline": false,
  "output": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * speed_get_register
  *
  */

{
  "type": "move_get_register",
  "lastDummyAlign0": "RIGHT",
  "message0": "переменная класса AdamManager() %1 получить регистр колеса %2",
  "args0": [
    {
      "type": "input_value",
      "name": "instance_class_variable",
      "align": "RIGHT"
    },
    {
      "type": "field_dropdown",
      "name": "wheel_position",
      "options": [
        [
          "переднее правое",
          "front_right"
        ],
        [
          "переднее левое",
          "front_left"
        ],
        [
          "заднее правое",
          "rear_right"
        ],
        [
          "заднее левое",
          "rear_left"
        ]
      ]
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * move_vector_stop
  *
  */
{
  "type": "move_vector_stop",
  "message0": "направление стоп",
  "inputsInline": false,
  "output": null,
  "colour": 10,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * move_vector_turn_left
  *
  */
{
  "type": "move_vector_turn_left",
  "message0": "направление разворот налево %1 со скоростью %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed_variable",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 10,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * move_vector_turn_right
  *
  */
{
  "type": "move_vector_turn_right",
  "message0": "направление разворот направо %1 со скоростью %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed_variable",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 10,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * move_vector_right_and_back
  *
  */
{
  "type": "move_vector_right_and_back",
  "message0": "направление вправо и назад %1 со скоростью %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed_variable",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 10,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * move_vector_left_and_back
  *
  */
{
  "type": "move_vector_left_and_back",
  "message0": "направление влево и назад %1 со скоростью %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed_variable",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 10,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * move_vector_left_and_forward
  *
  */
{
  "type": "move_vector_left_and_forward",
  "message0": "направление влево и вперед %1 со скоростью %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed_variable",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 10,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * move_vector_right_and_forward
  *
  */
{
  "type": "move_vector_right_and_forward",
  "message0": "направление вправо и вперед %1 со скоростью %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed_variable",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 10,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * move_vector_left
  *
  */
{
  "type": "move_vector_left",
  "message0": "направление влево %1 со скоростью %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed_variable",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 10,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * move_vector_right
  *
  */
{
  "type": "move_vector_right",
  "message0": "направление вправо %1 со скоростью %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed_variable",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 10,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * move_vector_back
  *
  */
{
  "type": "move_vector_back",
  "message0": "направление назад %1 со скоростью %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed_variable",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 10,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * speed_vector_value
  *
  */
{
  "type": "speed_vector_value",
  "message0": "значение скорости %1",
  "args0": [
    {
      "type": "field_number",
      "name": "speed_vector_value",
      "value": 1,
      "min": 0,
      "max": 1,
      "precision": 0.1
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 10,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * move_vector_forward
  *
  */
{
  "type": "move_vector_forward",
  "message0": "направление вперед %1 со скоростью %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "speed_variable",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 10,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * move_controller_vector
  *
  */
{
  "type": "move_controller_vector",
  "message0": "переменная класса AdamManager() %1 задать направление движения %2",
  "args0": [
    {
      "type": "input_value",
      "name": "instance_variable"
    },
    {
      "type": "input_value",
      "name": "vector_variable",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * speed_stop
  *
  */
{
  "type": "speed_stop",
  "message0": "стоп",
  "inputsInline": false,
  "output": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * move_command_set_speed
  *
  */
{
  "type": "speed_value",
  "message0": "значение скорости %1",
  "args0": [
    {
      "type": "field_number",
      "name": "speed_value",
      "value": 1,
      "min": -1,
      "max": 1,
      "precision": 0.1
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * move_command_set_speed
  *
  */
{
  "type": "move_command_set_speed",
  "message0": "задать скорость %1",
  "args0": [
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},
/**
  * move_controller
  *
  */
{
  "type": "move_controller",
  "message0": "переменная класса AdamManager() %1 управление колесом %2 %3 команда %4",
  "args0": [
    {
      "type": "input_value",
      "name": "instance_class_variable",
      "align": "RIGHT"
    },
    {
      "type": "field_dropdown",
      "name": "wheel_position",
      "options": [
        [
          "переднее правое",
          "front_right"
        ],
        [
          "переднее левое",
          "front_left"
        ],
        [
          "заднее правое",
          "rear_right"
        ],
        [
          "заднее левое",
          "rear_left"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "command",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},

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
  * controller_return_to_start_position_command
  *
  */
{
  "type": "controller_return_to_start_position_command",
  "message0": "команда возврата в нулевую позицию %1 переменная класса AdamManager() %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "instance_class_variable"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
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
  "message0": "новый экземпляр класса AdamManager()",
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
  "message0": "переменная класса AdamManager() %1 список команд %2",
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
},

/**
  * adam_two_seven_sensor_temperature
  *
  */
{
  "type": "adam_two_seven_sensor_temperature",
  "message0": "датчик температуры %1 переменная класса датчика %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "sensor_variable",
      "variable": "item"
    }
  ],
  "output": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * adam_two_seven_sensor_acceleration
  *
  */
{
  "type": "adam_two_seven_sensor_acceleration",
  "message0": "датчик ускорения %1 переменная класса датчика %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "sensor_variable",
      "variable": "item"
    }
  ],
  "output": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * adam_two_seven_sensor_gyro
  *
  */
{
  "type": "adam_two_seven_sensor_gyro",
  "message0": "гироскоп %1 переменная класса датчика %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "sensor_variable",
      "variable": "item"
    }
  ],
  "output": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * adam_two_seven_sensor_magnetometer
  *
  */
{
  "type": "adam_two_seven_sensor_magnetometer",
  "message0": "магнитометр %1 переменная класса датчика %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "sensor_variable",
      "variable": "item"
    }
  ],
  "output": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * adam_two_seven_sensor_pressure
  *
  */
{
  "type": "adam_two_seven_sensor_pressure",
  "message0": "давление %1 переменная класса датчика %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "sensor_variable",
      "variable": "item"
    }
  ],
  "output": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * adam_two_seven_sensor_altitude
  *
  */
{
  "type": "adam_two_seven_sensor_altitude",
  "message0": "высота над уровнем моря %1 переменная класса датчика %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "sensor_variable",
      "variable": "item"
    }
  ],
  "output": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * adam_two_seven_sensor_declaration_extended
  *
  */
{
  "type": "adam_two_seven_sensor_declaration_extended",
  "message0": "инициализация датчика bmp280 %1 переменная шины i2c %2 %3 адрес устройства i2c %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "i2c_variable",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "sensor_address"
    }
  ],
  "output": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "adam_two_seven_bmp280_addr_const",
  "message0": "адрес датчика bmp280  %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "addr_variable",
      "options": [
        [
          "0x76",
          "0x76"
        ],
        [
          "0x77",
          "0x77"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "adam_two_seven_sensor_set_pressure",
  "message0": "поправка для атмосферного давления  %1 переменная класса датчика %2 %3 текущее атмосферное давление %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "sensor_variable",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "current_atmospheric_pressure_variable",
      "value": 1000
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "adam_two_seven_sensor_mpu_9250_declaration",
  "message0": "инициализация датчика mpu9250",
  "output": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
}
]);