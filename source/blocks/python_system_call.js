/**
 * Common blocks for python system calls
 * Code generated file you can find in BlocklySource\source\generators.
 * File name with code generator has the same name with this file
 */
'use strict';

Blockly.defineBlocksWithJsonArray([

/**
  * systems_os_system
  *
  */
{
  "type": "systems_os_system",
  "message0": "os.systems() %1",
  "args0": [
    {
      "type": "input_value",
      "name": "param",
      "check": "String"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "Модуль подпроцесса позволяет создавать новые процессы, подключаться к их каналам ввода/вывода/ошибок и получать их коды возврата.",
  "helpUrl": "https://docs.python.org/3/library/os.html#os.system"
},

/**
  * systems_subprocess_call
  *
  */  
{
  "type": "systems_subprocess_call",
  "lastDummyAlign0": "RIGHT",
  "message0": "subprocess.call() %1 shell %2",
  "args0": [
    {
      "type": "input_value",
      "name": "param",
      "check": "String"
    },
    {
      "type": "field_checkbox",
      "name": "shell",
      "checked": true
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "Модуль подпроцесса позволяет создавать новые процессы, подключаться к их каналам ввода/вывода/ошибок и получать их коды возврата.",
  "helpUrl": "https://docs.python.org/3/library/subprocess.html"
},

/**
  * common_app_echo
  *
  */
{
  "type": "common_app_echo",
  "message0": "echo %1",
  "args0": [
    {
      "type": "input_value",
      "name": "input_string",
      "check": "String"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "echo sh",
  "helpUrl": ""
},

/**
  * common_app_echo_ext
  *
  */
{
  "type": "common_app_echo_ext",
  "message0": "echo %1 %2 2> /dev/null",
  "args0": [
    {
      "type": "input_value",
      "name": "input_string",
      "check": "String"
    },
    {
      "type": "field_checkbox",
      "name": "to_null_output",
      "checked": true
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "echo sh",
  "helpUrl": ""
},

/**
  * common_app_echo_with_text_param
  *
  */
{
  "type": "common_app_echo_ext",
  "message0": "echo %1 %2 2> /dev/null",
  "args0": [
    {
      "type": "input_value",
      "name": "input_string",
      "check": "String"
    },
    {
      "type": "field_checkbox",
      "name": "to_null_output",
      "checked": true
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "echo sh",
  "helpUrl": ""
},

/**
  * common_app_echo_with_text_param
  *
  */
{
  "type": "common_app_echo_with_text_param",
  "message0": "echo %1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "input_text",
      "text": "text"
    },
    {
      "type": "input_value",
      "name": "input_string",
      "check": "String"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "echo sh",
  "helpUrl": ""
},

/**
  * common_app_rhvoice
  *
  */
{
  "type": "common_app_rhvoice",
  "message0": "RHVoice  %1 %2 voice profile %3 %4 rate %5 %6 pitch %7 %8 volume %9 %10 quality %11 %12 input file %13 %14 to file name %15 %16 ssml enable",
  "args0": [
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "field_checkbox",
      "name": "voice_profile_ch",
      "checked": true
    },
    {
      "type": "input_value",
      "name": "voice_profile"
    },
    {
      "type": "field_checkbox",
      "name": "rate_ch",
      "checked": false
    },
    {
      "type": "input_value",
      "name": "rate"
    },
    {
      "type": "field_checkbox",
      "name": "pitch_ch",
      "checked": false
    },
    {
      "type": "input_value",
      "name": "pitch"
    },
    {
      "type": "field_checkbox",
      "name": "volume_ch",
      "checked": false
    },
    {
      "type": "input_value",
      "name": "volume"
    },
    {
      "type": "field_checkbox",
      "name": "quality_ch",
      "checked": false
    },
    {
      "type": "input_value",
      "name": "quality"
    },
    {
      "type": "field_checkbox",
      "name": "input_file_ch",
      "checked": false
    },
    {
      "type": "input_value",
      "name": "input_file_name"
    },
    {
      "type": "field_checkbox",
      "name": "to_file_ch",
      "checked": false
    },
    {
      "type": "input_value",
      "name": "to_file_name"
    },
    {
      "type": "field_checkbox",
      "name": "is_ssml",
      "checked": false
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "RHVoice бесплатный синтезатор речи с открытым исходным кодом.",
  "helpUrl": "https://github.com/RHVoice/RHVoice"
},


/**
  * common_system_example_flack_app
  *
  */
//{
//  "type": "common_system_example_flack_app",
//  "message0": "flack app %1 host ip %2",
//  "args0": [
//    {
//      "type": "input_dummy"
//    },
//    {
//      "type": "input_value",
//      "name": "host"
//    }
//  ],
//  "previousStatement": null,
//  "nextStatement": null,
//  "colour": 230,
//  "tooltip": "Запуск сервера демонстрации возможностей работы с датчиком BNO055",
//  "helpUrl": "https://learn.adafruit.com/bno055-absolute-orientation-sensor-with-raspberry-pi-and-beaglebone-black/webgl-example"
//},

/**
  * common_system_resources_music
  *
  */
{
  "type": "common_system_resources_music",
  "message0": "путь до библиотеки музыки %1",
  "args0": [
    {
      "type": "input_value",
      "name": "path"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_app_ls_dir
  *
  */
{
  "type": "common_app_ls_dir",
  "lastDummyAlign0": "RIGHT",
  "message0": "lists dirrectrory path %1 long format %2 %3  not ignore . %4",
  "args0": [
    {
      "type": "input_value",
      "name": "path",
      "check": "String"
    },
    {
      "type": "field_checkbox",
      "name": "long_format",
      "checked": true
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_checkbox",
      "name": "not_ignore_dot",
      "checked": true
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "In computing, ls is a command to list computer files in Unix and Unix-like operating systems",
  "helpUrl": "https://en.wikipedia.org/wiki/Ls"
},

/**
  * common_system_pipeline
  *
  */
{
  "type": "common_system_pipeline",
  "message0": " |  %1",
  "args0": [
    {
      "type": "input_value",
      "name": "second_value"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_system_literal
  *
  */
{
  "type": "common_system_literal",
  "message0": "f %1",
  "args0": [
    {
      "type": "input_value",
      "name": "second_value"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "formatted string",
  "helpUrl": "https://shultais.education/blog/python-f-strings"
},

/**
  * common_system_left_curly_brace
  *
  */
{
  "type": "common_system_left_curly_brace",
  "message0": "{ %1",
  "args0": [
    {
      "type": "input_value",
      "name": "second_value"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_system_redirect_input
  *
  */
{
  "type": "common_system_redirect_input",
  "message0": "< %1",
  "args0": [
    {
      "type": "input_value",
      "name": "second_value"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_system_redirect_output
  *
  */
{
  "type": "common_system_redirect_output",
  "message0": "> %1",
  "args0": [
    {
      "type": "input_value",
      "name": "second_value"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_system_right_curly_brace
  *
  */
{
  "type": "common_system_right_curly_brace",
  "message0": "} %1",
  "args0": [
    {
      "type": "input_value",
      "name": "second_value"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_system_i2cdetect
  *
  */
{
  "type": "common_system_i2cdetect",
  "message0": "i2cdetect %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "option",
      "options": [
        [
          "-y 1",
          "-y 1"
        ],
        [
          "-y 0",
          "-y 0"
        ],
        [
          "list",
          "-l"
        ],
        [
          "-F 1",
          "-F 1"
        ],
        [
          "-F 0",
          "-F 0"
        ]
      ]
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "i2cdetect is a userspace program to scan an I2C bus for devices",
  "helpUrl": ""
},

/**
  * common_system_whitespace
  *
  */
{
  "type": "common_system_whitespace",
  "message0": "пробел %1",
  "args0": [
    {
      "type": "input_value",
      "name": "second_value"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_system_single_quotation
  *
  */
{
  "type": "common_system_single_quotation",
  "message0": "to string with single quote %1",
  "args0": [
    {
      "type": "input_value",
      "name": "input_string"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_system_double_quotation
  *
  */
{
  "type": "common_system_double_quotation",
  "message0": "to string with double quote %1",
  "args0": [
    {
      "type": "input_value",
      "name": "input_string"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_system_one_single_quotation
  *
  */
{
  "type": "common_system_one_single_quotation",
  "message0": "quote %1",
  "args0": [
    {
      "type": "input_value",
      "name": "input_string"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

/**
  * common_say_save_file_dp
  *
  */
{
  "type": "common_say_save_file_dp",
  "message0": "file name %1 with_extension %2",
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    },
    {
      "type": "field_dropdown",
      "name": "extension",
      "options": [
        [
          ".mp3",
          ".mp3"
        ],
        [
          ".wav",
          ".wav"
        ],
        [
          ".ssml",
          ".ssml"
        ]
      ]
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

])

