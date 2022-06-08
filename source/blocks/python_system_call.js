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
  "message0": "RHVoice  %1 voice profile %2 rate %3 pitch %4 volume %5 quality %6",
  "args0": [
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_value",
      "name": "voice profile"
    },
    {
      "type": "input_value",
      "name": "rate"
    },
    {
      "type": "input_value",
      "name": "pitch"
    },
    {
      "type": "input_value",
      "name": "volume"
    },
    {
      "type": "input_value",
      "name": "quality"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "RHVoice бесплатный синтезатор речи с открытым исходным кодом.",
  "helpUrl": "https://github.com/RHVoice/RHVoice"
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
}
])

