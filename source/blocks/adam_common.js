/**
 * Common blocks for robot Adam 
 * Code generated file you can find in BlocklySource\source\generators.
 * File name with code generator has the same name with this file
 */
 
'use strict';

Blockly.defineBlocksWithJsonArray([

/**
  * common_eye_pack
  *
  */{
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
},

/**
  * common_music_major_chord
  *
  */
{
  "type": "common_music_major_chord",
  "message0": "Мажорный аккорд %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "chord",
      "options": [
        [
          "C",
          "C"
        ],
        [
          "C#",
          "C#"
        ],
        [
          "D",
          "D"
        ],
        [
          "D#",
          "D#"
        ],
        [
          "E",
          "E"
        ],
        [
          "F",
          "F"
        ],
        [
          "F#",
          "F#"
        ],
        [
          "G",
          "G"
        ],
        [
          "G#",
          "G#"
        ],
        [
          "A",
          "A"
        ],
        [
          "A#",
          "A#"
        ],
        [
          "B",
          "B"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_music_minor_chord
  *
  */
{
  "type": "common_music_minor_chord",
  "message0": "Минорный аккорд %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "chord",
      "options": [
        [
          "Cm",
          "Cm"
        ],
        [
          "C#m",
          "C#m"
        ],
        [
          "Dm",
          "Dm"
        ],
        [
          "D#m",
          "D#m"
        ],
        [
          "Em",
          "Em"
        ],
        [
          "Fm",
          "Fm"
        ],
        [
          "F#m",
          "F#m"
        ],
        [
          "Gm",
          "Gm"
        ],
        [
          "G#m",
          "G#m"
        ],
        [
          "Am",
          "Am"
        ],
        [
          "A#m",
          "A#m"
        ],
        [
          "Bm",
          "Bm"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_music_minor_major_seventh_chord
  *
  */
{
  "type": "common_music_minor_major_seventh_chords",
  "message0": "Малый мажорный септаккорд %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "chord",
      "options": [
        [
          "C7",
          "C7"
        ],
        [
          "C#7\t",
          "C#7\t"
        ],
        [
          "D7",
          "D7"
        ],
        [
          "D#7",
          "D#7"
        ],
        [
          "E7",
          "E7"
        ],
        [
          "F7",
          "F7"
        ],
        [
          "F#7\t",
          "F#7\t"
        ],
        [
          "G7",
          "G7"
        ],
        [
          "G#7",
          "G#7"
        ],
        [
          "A7",
          "A7"
        ],
        [
          "A#7",
          "A#7"
        ],
        [
          "B7",
          "B7"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_music_minor_minor_seventh_chords
  *
  */
{
  "type": "common_music_minor_minor_seventh_chords",
  "message0": "Малый минорный септаккорд %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "chord",
      "options": [
        [
          "Cm7",
          "Cm7"
        ],
        [
          "C#m7",
          "C#m7"
        ],
        [
          "Dm7",
          "Dm7"
        ],
        [
          "D#m7",
          "D#m7"
        ],
        [
          "Em7",
          "Em7"
        ],
        [
          "Fm7",
          "Fm7"
        ],
        [
          "F#m7",
          "F#m7"
        ],
        [
          "Gm7",
          "Gm7"
        ],
        [
          "G#m7",
          "G#m7"
        ],
        [
          "Am7",
          "Am7"
        ],
        [
          "A#m7",
          "A#m7"
        ],
        [
          "Bm7",
          "Bm7"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_music_major_chord_extended
  *
  */
{
  "type": "common_music_major_chord_extended",
  "message0": "Мажорный аккорд %1 %2 major_third %3 perfect_fifth %4 major_seventh %5",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "chord",
      "options": [
        [
          "C",
          "C"
        ],
        [
          "C#",
          "C#"
        ],
        [
          "D",
          "D"
        ],
        [
          "D#",
          "D#"
        ],
        [
          "E",
          "E"
        ],
        [
          "F",
          "F"
        ],
        [
          "F#",
          "F#"
        ],
        [
          "G",
          "G"
        ],
        [
          "G#",
          "G#"
        ],
        [
          "A",
          "A"
        ],
        [
          "A#",
          "A#"
        ],
        [
          "B",
          "B"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "major_third"
    },
    {
      "type": "input_value",
      "name": "perfect_fifth"
    },
    {
      "type": "input_value",
      "name": "major_seventh"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_music_minor_chord_extended
  *
  */
{
  "type": "common_music_minor_chord_extended",
  "message0": "Минорный аккорд %1 %2 major_third %3 perfect_fifth %4 major_seventh %5",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "chord",
      "options": [
        [
          "Cm",
          "Cm"
        ],
        [
          "C#m",
          "C#m"
        ],
        [
          "Dm",
          "Dm"
        ],
        [
          "D#m",
          "D#m"
        ],
        [
          "Em",
          "Em"
        ],
        [
          "Fm",
          "Fm"
        ],
        [
          "F#m",
          "F#m"
        ],
        [
          "Gm",
          "Gm"
        ],
        [
          "G#m",
          "G#m"
        ],
        [
          "Am",
          "Am"
        ],
        [
          "A#m",
          "A#m"
        ],
        [
          "Bm",
          "Bm"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "major_third"
    },
    {
      "type": "input_value",
      "name": "perfect_fifth"
    },
    {
      "type": "input_value",
      "name": "major_seventh"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_music_minor_major_seventh_chords_extended
  *
  */
{
  "type": "common_music_minor_major_seventh_chords_extended",
  "message0": "Малый мажорный септаккорд %1 %2 major_third %3 perfect_fifth %4 major_seventh %5",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "chord",
      "options": [
        [
          "C7",
          "C7"
        ],
        [
          "C#7\t",
          "C#7\t"
        ],
        [
          "D7",
          "D7"
        ],
        [
          "D#7",
          "D#7"
        ],
        [
          "E7",
          "E7"
        ],
        [
          "F7",
          "F7"
        ],
        [
          "F#7\t",
          "F#7\t"
        ],
        [
          "G7",
          "G7"
        ],
        [
          "G#7",
          "G#7"
        ],
        [
          "A7",
          "A7"
        ],
        [
          "A#7",
          "A#7"
        ],
        [
          "B7",
          "B7"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "major_third"
    },
    {
      "type": "input_value",
      "name": "perfect_fifth"
    },
    {
      "type": "input_value",
      "name": "major_seventh"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_music_minor_minor_seventh_chords_extended
  *
  */
{
  "type": "common_music_minor_minor_seventh_chords_extended",
  "message0": "Малый минорный септаккорд %1 %2 major_third %3 perfect_fifth %4 major_seventh %5",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "chord",
      "options": [
        [
          "Cm7",
          "Cm7"
        ],
        [
          "C#m7",
          "C#m7"
        ],
        [
          "Dm7",
          "Dm7"
        ],
        [
          "D#m7",
          "D#m7"
        ],
        [
          "Em7",
          "Em7"
        ],
        [
          "Fm7",
          "Fm7"
        ],
        [
          "F#m7",
          "F#m7"
        ],
        [
          "Gm7",
          "Gm7"
        ],
        [
          "G#m7",
          "G#m7"
        ],
        [
          "Am7",
          "Am7"
        ],
        [
          "A#m7",
          "A#m7"
        ],
        [
          "Bm7",
          "Bm7"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "major_third"
    },
    {
      "type": "input_value",
      "name": "perfect_fifth"
    },
    {
      "type": "input_value",
      "name": "major_seventh"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_music_note
  *
  */
{
  "type": "common_music_note",
  "lastDummyAlign0": "RIGHT",
  "message0": "нота %1 %2 oктава %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "note",
      "options": [
        [
          "C",
          "C"
        ],
        [
          "C#",
          "C#"
        ],
        [
          "D",
          "D"
        ],
        [
          "D#",
          "D#"
        ],
        [
          "E",
          "E"
        ],
        [
          "F",
          "F"
        ],
        [
          "F#",
          "F#"
        ],
        [
          "G",
          "G"
        ],
        [
          "G#",
          "G#"
        ],
        [
          "A",
          "A"
        ],
        [
          "A#",
          "A#"
        ],
        [
          "B",
          "B"
        ],
        [
          "Bb",
          "Bb"
        ],
        [
          "Eb",
          "Eb"
        ],
        [
          "Ab",
          "Ab"
        ],
        [
          "Db",
          "Db"
        ],
        [
          "Gb",
          "Gb"
        ],
        [
          "c",
          "c"
        ],
        [
          "c#",
          "c#"
        ],
        [
          "d",
          "d"
        ],
        [
          "d#",
          "d#"
        ],
        [
          "e",
          "e"
        ],
        [
          "f",
          "f"
        ],
        [
          "f#",
          "f#"
        ],
        [
          "g",
          "g"
        ],
        [
          "g#",
          "g#"
        ],
        [
          "a",
          "a"
        ],
        [
          "a#",
          "a#"
        ],
        [
          "b",
          "b"
        ],
        [
          "bb",
          "bb"
        ],
        [
          "eb",
          "eb"
        ],
        [
          "ab",
          "ab"
        ],
        [
          "db",
          "db"
        ],
        [
          "gb",
          "gb"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "octave",
      "value": 0,
      "min": 0,
      "max": 9
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "Обозначение нот на основе списка из библиотеки musicpy. Часть значений может быть некорректным.",
  "helpUrl": ""
},

/**
  * common_music_note_extended
  *
  */
{
  "type": "common_music_note_extended",
  "lastDummyAlign0": "RIGHT",
  "message0": "нота %1 %2 октава %3 %4 длина %5 %6 громкость %7",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "note",
      "options": [
        [
          "C",
          "C"
        ],
        [
          "C#",
          "C#"
        ],
        [
          "D",
          "D"
        ],
        [
          "D#",
          "D#"
        ],
        [
          "E",
          "E"
        ],
        [
          "F",
          "F"
        ],
        [
          "F#",
          "F#"
        ],
        [
          "G",
          "G"
        ],
        [
          "G#",
          "G#"
        ],
        [
          "A",
          "A"
        ],
        [
          "A#",
          "A#"
        ],
        [
          "B",
          "B"
        ],
        [
          "Bb",
          "Bb"
        ],
        [
          "Eb",
          "Eb"
        ],
        [
          "Ab",
          "Ab"
        ],
        [
          "Db",
          "Db"
        ],
        [
          "Gb",
          "Gb"
        ],
        [
          "c",
          "c"
        ],
        [
          "c#",
          "c#"
        ],
        [
          "d",
          "d"
        ],
        [
          "d#",
          "d#"
        ],
        [
          "e",
          "e"
        ],
        [
          "f",
          "f"
        ],
        [
          "f#",
          "f#"
        ],
        [
          "g",
          "g"
        ],
        [
          "g#",
          "g#"
        ],
        [
          "a",
          "a"
        ],
        [
          "a#",
          "a#"
        ],
        [
          "b",
          "b"
        ],
        [
          "bb",
          "bb"
        ],
        [
          "eb",
          "eb"
        ],
        [
          "ab",
          "ab"
        ],
        [
          "db",
          "db"
        ],
        [
          "gb",
          "gb"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "octave",
      "value": 0,
      "min": 0,
      "max": 9
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "duration",
      "value": 1,
      "min": 0,
      "max": 127,
      "precision": 0.1
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": " strength ",
      "value": 50,
      "min": 0,
      "max": 127,
      "precision": 0.1
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "Обозначение нот на основе списка из библиотеки musicpy. Часть значений может быть некорректным. Длина измеряется в тактах.",
  "helpUrl": ""
},

/**
  * common_music_classic_note
  *
  */
{
  "type": "common_music_classic_note",
  "lastDummyAlign0": "RIGHT",
  "message0": "нота %1 %2 oктава %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "note",
      "options": [
        [
          "C",
          "C"
        ],
        [
          "D",
          "D"
        ],
        [
          "E",
          "E"
        ],
        [
          "F",
          "F"
        ],
        [
          "G",
          "G"
        ],
        [
          "A",
          "A"
        ],
        [
          "B",
          "B"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "octave",
      "value": 0,
      "min": 0,
      "max": 9
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "Обозначение нот на основе учебника. Длина измеряется в тактах.",
  "helpUrl": ""
},

/**
  * common_music_classic_note_extended
  *
  */
{
  "type": "common_music_classic_note_extended",
  "lastDummyAlign0": "RIGHT",
  "message0": "нота %1 %2 октава %3 %4 длина %5 %6 громкость %7",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "note",
      "options": [
        [
          "C",
          "C"
        ],
        [
          "D",
          "D"
        ],
        [
          "E",
          "E"
        ],
        [
          "F",
          "F"
        ],
        [
          "G",
          "G"
        ],
        [
          "A",
          "A"
        ],
        [
          "B",
          "B"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "octave",
      "value": 0,
      "min": 0,
      "max": 9
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "duration",
      "value": 1,
      "min": 0,
      "max": 127,
      "precision": 0.1
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": " strength ",
      "value": 50,
      "min": 0,
      "max": 127,
      "precision": 0.1
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "Обозначение нот на основе учебника. Длина измеряется в тактах.",
  "helpUrl": ""
},

/**
  * common_music_mixer_get_bussy
  *
  */
{
  "type": "common_music_mixer_get_bussy",
  "message0": "получить состояние микшера",
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_music_function_create_chord
  *
  */
{
  "type": "common_music_function_create_chord",
  "message0": "создать аккорд %1",
  "args0": [
    {
      "type": "input_value",
      "name": "chord"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_music_function_create_instrument
  *
  */
{
  "type": "common_music_function_create_instrument",
  "message0": "создать инструмент %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "instrument"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_music_function_play
  *
  */
{
  "type": "common_music_function_play",
  "message0": "проиграть %1 мелодия %2 удары в минуту %3 инструмент %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "music_variable"
    },
    {
      "type": "input_value",
      "name": "bmp"
    },
    {
      "type": "input_value",
      "name": "instrument_name"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_music_spes_symbols_with_numeric
  *
  */
{
  "type": "common_music_spes_symbols_with_numeric",
  "message0": "спецсимвол %1 %2 значение %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "symbols",
      "options": [
        [
          "^",
          "^"
        ],
        [
          "@",
          "@"
        ],
        [
          "*",
          "*"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}, 

/**
  * common_music_spes_symbols
  *
  */
{
  "type": "common_music_spes_symbols",
  "lastDummyAlign0": "CENTRE",
  "message0": "спецсимвол %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "symbols",
      "options": [
        [
          "|",
          " | "
        ],
	[
          "| + перенос строки",
          " |\n"
        ]
      ]
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_music_fraction
  *
  */
{
  "type": "common_music_fraction",
  "message0": "%1 / %2",
  "args0": [
    {
      "type": "field_number",
      "name": "numerator",
      "value": 1,
      "min": 1,
      "max": 9,
      "precision": 1
    },
    {
      "type": "field_number",
      "name": "denominator",
      "value": 2,
      "min": 1,
      "max": 9,
      "precision": 1
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_say_native
  *
  */
{
  "type": "common_say_native",
  "message0": "сказать текст %1",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Вызов процедуры говорящей голосом по умолчанию",
  "helpUrl": ""
},

/**
  * common_say_native_with_voice_param
  *
  */
{
  "type": "common_say_native_with_voice_param",
  "message0": "сказать текст %1 голос %2",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "voice",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Вызов процедуры говорящей голосом указанным в параметрах",
  "helpUrl": ""
},

/**
  * common_say_sh
  *
  */
{
  "type": "common_say_sh",
  "message0": "сказать %1 %2",
  "args0": [
    {
      "type": "field_label_serializable",
      "name": "text",
      "text": "текст"
    },
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Вызов процедуры говорящей голосом по умолчанию",
  "helpUrl": ""
},

/**
  * common_say_sh_with_voice_param
  *
  */
{
  "type": "common_say_sh_with_voice_param",
  "message0": "сказать текст %1 голос %2",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "voice",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Вызов процедуры говорящей голосом указанным в параметрах",
  "helpUrl": ""
},

/**
  * common_say_voices_list
  *
  */
{
  "type": "common_say_voices_list",
  "message0": "голосовой профиль %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "voice_profile",
      "options": [
        [
          "alan",
          "alan"
        ],
        [
          "aleksandr",
          "aleksandr"
        ],
        [
          "aleksandr-hq",
          "aleksandr-hq"
        ],
        [
          "anatol",
          "anatol"
        ],
        [
          "anna",
          "anna"
        ],
        [
          "arina",
          "arina"
        ],
        [
          "artemiy",
          "artemiy"
        ],
        [
          "azamat",
          "azamat"
        ],
        [
          "bdl",
          "bdl"
        ],
        [
          "clb",
          "clb"
        ],
        [
          "elena",
          "elena"
        ],
        [
          "evgeniy-rus",
          "evgeniy-rus"
        ],
        [
          "hana",
          "hana"
        ],
        [
          "irina",
          "irina"
        ],
        [
          "kiko",
          "kiko"
        ],
        [
          "Leticia-F123",
          "Leticia-F123"
        ],
        [
          "lubov",
          "lubov"
        ],
        [
          "marianna",
          "marianna"
        ],
        [
          "mikhail",
          "mikhail"
        ],
        [
          "natalia",
          "natalia"
        ],
        [
          "natan",
          "natan"
        ],
        [
          "nazgul",
          "nazgul"
        ],
        [
          "pavel",
          "pavel"
        ],
        [
          "slt",
          "slt"
        ],
        [
          "spomenka",
          "spomenka"
        ],
        [
          "suze",
          "suze"
        ],
        [
          "talgat",
          "talgat"
        ],
        [
          "tatiana",
          "tatiana"
        ],
        [
          "victoria",
          "victoria"
        ],
        [
          "vitaliy",
          "vitaliy"
        ],
        [
          "volodymyr",
          "volodymyr"
        ],
        [
          "yuriy",
          "yuriy"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "Список голосов установленных в системе. Путь /usr/local/share/RHVoice",
  "helpUrl": ""
},

/**
  * common_comment
  *
  */
{
  "type": "common_comment",
  "message0": "коментарий %1",
  "args0": [
	{
	  "type": "field_input",
	  "name": "first_text_value",
	  "text": ""
	}
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "style": "text_blocks",
  "tooltip": "",
  "helpUrl": "",
    "extensions": [
    "text_quotes2"
  ]
},

/**
  * text_with_continuation
  *
  */
{
  "type": "text_with_continuation",
  "message0": "%1 %2",
  "args0": [
	{
	  "type": "field_input",
	  "name": "first_text_value",
	  "text": ""
	},
	{
	  "type": "input_value",
	  "name": "second_value"
	}
  ],
  "inputsInline": false,
  "output": "String",
  "style": "text_blocks",
  "tooltip": "",
  "helpUrl": "",
  "extensions": [
    "text_quotes2"
  ]
},
{
  "type": "variable_with_continuation",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "second_variable",
      "variable": "item"
    },
    {
      "type": "input_value",
      "name": "second_variable_value"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
} 
]);

/**
 *
 * @mixin
 * @package
 * @readonly
 */
Blockly.Constants.Text.QUOTE_IMAGE_MIXIN = {
  /**
   * Image data URI of an LTR opening double quote (same as RTL closing double quote).
   * @readonly
   */
  QUOTE_IMAGE_LEFT_DATAURI:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAA' +
    'n0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY' +
    '1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1' +
    'HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMf' +
    'z9AylsaRRgGzvZAAAAAElFTkSuQmCC',
  /**
   * Image data URI of an LTR closing double quote (same as RTL opening double quote).
   * @readonly
   */
  QUOTE_IMAGE_RIGHT_DATAURI:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAA' +
    'qUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhg' +
    'gONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvB' +
    'O3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5Aos' +
    'lLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==',
  /**
   * Pixel width of QUOTE_IMAGE_LEFT_DATAURI and QUOTE_IMAGE_RIGHT_DATAURI.
   * @readonly
   */
  QUOTE_IMAGE_WIDTH: 12,
  /**
   * Pixel height of QUOTE_IMAGE_LEFT_DATAURI and QUOTE_IMAGE_RIGHT_DATAURI.
   * @readonly
   */
  QUOTE_IMAGE_HEIGHT: 12,

  /**
   * Inserts appropriate quote images before and after the named field.
   * @param {string} fieldName The name of the field to wrap with quotes.
   * @this {Blockly.Block}
   */
  quoteField_: function(fieldName) {
    for (var i = 0, input; (input = this.inputList[i]); i++) {
      for (var j = 0, field; (field = input.fieldRow[j]); j++) {
        if (fieldName == field.name) {
          input.insertFieldAt(j, this.newQuote_(true));
          input.insertFieldAt(j + 2, this.newQuote_(false));
          return;
        }
      }
    }
    console.warn('field named "' + fieldName + '" not found in ' + this.toDevString());
  },

  /**
   * A helper function that generates a FieldImage of an opening or
   * closing double quote. The selected quote will be adapted for RTL blocks.
   * @param {boolean} open If the image should be open quote (“ in LTR).
   *                       Otherwise, a closing quote is used (” in LTR).
   * @return {!Blockly.FieldImage} The new field.
   * @this {Blockly.Block}
   */
  newQuote_: function(open) {
    var isLeft = this.RTL ? !open : open;
    var dataUri = isLeft ?
      this.QUOTE_IMAGE_LEFT_DATAURI :
      this.QUOTE_IMAGE_RIGHT_DATAURI;
    return new Blockly.FieldImage(
        dataUri,
        this.QUOTE_IMAGE_WIDTH,
        this.QUOTE_IMAGE_HEIGHT,
        isLeft ? '\u201C' : '\u201D');
  }
};

/**
 * Wraps TEXT field with images of double quote characters.
 * @this {Blockly.Block}
 */
Blockly.Constants.Text.TEXT_QUOTES_EXTENSION = function() {
  this.mixin(Blockly.Constants.Text.QUOTE_IMAGE_MIXIN);
  this.quoteField_('first_text_value');
};

Blockly.Extensions.register('text_quotes2',
    Blockly.Constants.Text.TEXT_QUOTES_EXTENSION);