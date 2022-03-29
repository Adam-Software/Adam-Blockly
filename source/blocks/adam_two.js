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
  "message0": "import api %1 numCam %2 flagConf %3",
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
  "tooltip": "",
  "helpUrl": ""
},
/**
  * servo_head
  *
  */
{
  "type": "servo_head",
  "message0": "servo_init_variable %1 param 1 %2 param 2 %3 param 3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "servo_api_variable"
    },
    {
      "type": "input_value",
      "name": "one"
    },
    {
      "type": "input_value",
      "name": "two"
    },
    {
      "type": "input_value",
      "name": "three"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}  
]);