/**
 * Python code for python system calls
 * Blocks are located here BlocklySource\source\blocks\python_system_calls.js
 */

'use strict';
// If any new block imports any library, add that library name here.
Blockly.Python.addReservedWords('os, subprocess');

/**
  * systems_os_system
  *
  */
Blockly.Python['systems_os_system'] = function(block) {
  Blockly.Python.definitions_['import_os'] = 'import os';
  var value_param = Blockly.Python.valueToCode(block, 'param', Blockly.Python.ORDER_NONE);
  var code = 'os.system(' + value_param + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * systems_os_system
  *
  */
Blockly.Python['systems_subprocess_call'] = function(block) {
  Blockly.Python.definitions_['import_subprocess'] = 'import subprocess';
  var value_param = Blockly.Python.valueToCode(block, 'param', Blockly.Python.ORDER_NONE);
  var checkbox_shell = (block.getFieldValue('shell') == 'TRUE') ? 'True' : 'False';
  var code = 'subprocess.call(' + value_param + ', ' + 'shell=' + checkbox_shell +')';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_app_echo
  *
  */
Blockly.Python['common_app_echo'] = function(block) {
  var value_input_string = Blockly.Python.valueToCode(block, 'input_string', Blockly.Python.ORDER_NONE);
  var code = '"echo ' + value_input_string + '"';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_app_echo_with_text_param
  *
  */
Blockly.Python['common_app_echo_with_text_param'] = function(block) {
  var text_input_text = block.getFieldValue('input_text');
  var value_input_string = Blockly.Python.valueToCode(block, 'input_string', Blockly.Python.ORDER_NONE);
  var code = String.format('"echo ' + "'{0}'" + "{1}" + '"', text_input_text, value_input_string);
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_app_rhvoice
  *
  */
Blockly.Python['common_app_rhvoice'] = function(block) {
  var value_voice_profile = Blockly.Python.valueToCode(block, 'voice profile', Blockly.Python.ORDER_ATOMIC);
  var value_rate = Blockly.Python.valueToCode(block, 'rate', Blockly.Python.ORDER_ATOMIC);
  var value_pitch = Blockly.Python.valueToCode(block, 'pitch', Blockly.Python.ORDER_ATOMIC);
  var value_volume = Blockly.Python.valueToCode(block, 'volume', Blockly.Python.ORDER_ATOMIC);
  var value_quality = Blockly.Python.valueToCode(block, 'quality', Blockly.Python.ORDER_ATOMIC);
  var code = 'RHVoice-test --profile ' + value_voice_profile + ' --rate ' + value_rate + ' --pitch ' + value_pitch + ' --volume ' + value_volume + ' --quality ' + value_quality;
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_system_pipeline
  *
  */
Blockly.Python['common_system_pipeline'] = function(block) {
  var value_second_value = Blockly.Python.valueToCode(block, 'second_value', Blockly.Python.ORDER_NONE);
  var code = ' | ' + value_second_value;
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_system_i2cdetect
  *
  */
Blockly.Python['common_system_i2cdetect'] = function(block) {
  var dropdown_option = block.getFieldValue('option');
  var code = String.format("'i2cdetect {0}'", dropdown_option);
  return [code, Blockly.Python.ORDER_NONE];
};

if (!String.format) {
  String.format = function(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number] 
        : match
      ;
    });
  };
}
