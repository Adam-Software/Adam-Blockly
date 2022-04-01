/**
 * Blocks for Adam v.3.0
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
]);