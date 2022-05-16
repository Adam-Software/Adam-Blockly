/**
 * Common blocks for robot Adam 
 * Code generated file you can find in BlocklySource\source\generators.
 * File name with code generator has the same name with this file
 */

Blockly.defineBlocksWithJsonArray([

/**
  * common_eye_pack
  *
  */
  
{
  "type": "common_eye_pack",
  "message0": "пакет данных %1 адрес %2 константа регистра %3 цвет %4 от диода %5 до диода %6 с шагом %7 время %8",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "addr"
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
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_eye_pack_simple
  *
  */

{
  "type": "common_eye_pack_simple",
  "message0": "простой пакет данных  %1 константа регистра %2 цвет %3 от диода %4 до диода %5 с шагом %6 время %7",
  "args0": [
    {
      "type": "input_dummy"
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
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_import_smbus
  *
  */
  
{
  "type": "common_import_smbus",
  "message0": "инициализировать SMBus  %1 открыть шину I2C %2",
  "args0": [
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_value",
      "name": "bus_number",
      "check": "Number"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "Импортирует библиотеку SMBus и открывает шину I2C",
  "helpUrl": ""
},

/**
  * common_write_i2c_block_data
  *
  */
  
{
  "type": "common_write_i2c_block_data",
  "message0": "запись массива данных %1 переменная I2C шины %2 %3  I2C адрес устройства %4 адрес регистра %5 пакет данных %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "bus",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "addr",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "cmd",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "packet",
      "check": "Array"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Запись массива данных",
  "helpUrl": ""
},

/**
  * common_simple_write_i2c_block_data
  *
  */

{
  "type": "common_simple_write_i2c_block_data",
  "message0": "простая запись массива данных %1 переменная I2C шины %2 %3  I2C адрес устройства %4 пакет данных %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "bus",
      "variable": "item"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "addr",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "packet",
      "check": "Array"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Запись массива данных без возможности указать регистр",
  "helpUrl": ""
},

/**
  * common_eye_color
  *
  */
  
{
  "type": "common_eye_color",
  "message0": "цвет диода %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "color",
      "options": [
        [
          "красный",
          "2"
        ],
        [
          "зеленый",
          "3"
        ],
        [
          "голубой",
          "4"
        ],
        [
          "выключить",
          "0"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_eye_diode_number
  *
  */

{
  "type": "common_eye_diode_number",
  "message0": "Номер диода %1",
  "args0": [
    {
      "type": "field_number",
      "name": "diode_number",
      "value": 1,
      "min": 1,
      "max": 80,
      "precision": 1
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "Номер диода. От 1 до 80.",
  "helpUrl": ""
},

/**
  * common_reg_constant
  *
  */

{
  "type": "common_reg_constant",
  "message0": "константы регистра %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "const",
      "options": [
        [
          "CLR_SCR_COMMAND",
          "255"
        ],
        [
          "OFF_LED_CLOCKWISE",
          "254"
        ],
        [
          "OFF_LED_ANTICLOCKWISE",
          "253"
        ],
        [
          "ON_LED_CLOCKWISE",
          "252"
        ],
        [
          "ON_LED_ANTICLOCKWISE",
          "251"
        ],
        [
          "PLAY_ANIMATION",
          "250"
        ],
        [
          "SET_ADDRESS",
          "10"
        ],
        [
          "ON_LED_NOW",
          "249"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "Предопределенные значения для констант регистра",
  "helpUrl": ""
},

/**
  * common_i2c_device_address
  *
  */

{
  "type": "common_i2c_device_address",
  "message0": "переменные I2C устройств %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "device_addr",
      "options": [
        [
          "0x5E",
          "94"
        ],
        [
          "0x5F",
          "95"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * "common_i2c_sensor_device"
  *
  */

{
  "type": "common_i2c_sensor_device",
  "message0": "инициализация шины I2C",
  "output": null,
  "colour": 230,
  "tooltip": "Create library object using our Extended Bus I2C port",
  "helpUrl": ""
},

/**
  * "common_i2c_sensor_device_extended"
  *
  */

{
  "type": "common_i2c_sensor_device_extended",
  "message0": "инициализация шины I2C %1 I2C порт %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "i2c_bus",
      "check": "Number"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "Create library object using our Extended Bus I2C port. ",
  "helpUrl": ""
},

/**
  * common_sensor_declaration
  *
  */

{
  "type": "common_sensor_declaration",
  "message0": "инициализация датчиков %1 переменная шины i2c %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "i2c_variable",
      "variable": "item"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_sensor_declaration_extended
  *
  */

{
  "type": "common_sensor_declaration_extended",
  "message0": "инициализация датчиков %1 переменная шины i2c %2 %3 адрес устройства i2c %4",
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_sensor_temperature
  *
  */

{
  "type": "common_sensor_temperature",
  "message0": "датчик температуры %1 переменная датчика %2",
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_sensor_acceleration
  *
  */

{
  "type": "common_sensor_acceleration",
  "message0": "датчик ускорения %1 переменная датчика %2",
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_sensor_magnetometer
  *
  */

{
  "type": "common_sensor_magnetometer",
  "message0": "магнитометр %1 переменная датчика %2",
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_sensor_gyro
  *
  */

{
  "type": "common_sensor_gyro",
  "message0": "гироскоп %1 переменная датчика %2",
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_sensor_euler
  *
  */

{
  "type": "common_sensor_euler",
  "message0": "датчик угла Эйлера %1 переменная датчика %2",
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_sensor_quaternion
  *
  */

{
  "type": "common_sensor_quaternion",
  "message0": "кватернион %1 переменная датчика %2",
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_sensor_linear_acceleration
  *
  */

{
  "type": "common_sensor_linear_acceleration",
  "message0": "линейное ускорение %1 переменная датчика %2",
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_sensor_euler
  *
  */

{

  "type": "common_sensor_euler",
  "message0": "датчик угла Эйлера %1 переменная датчика %2",
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_sensor_quaternion
  *
  */

{
  "type": "common_sensor_quaternion",
  "message0": "кватернион %1 переменная датчика %2",
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_sensor_linear_acceleration
  *
  */

{
  "type": "common_sensor_linear_acceleration",
  "message0": "линейное ускорение %1 переменная датчика %2",
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},


/**
  * common_sensor_gravity
  *
  */

{
  "type": "common_sensor_gravity",
  "message0": "гравитация %1 переменная датчика %2",
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]);