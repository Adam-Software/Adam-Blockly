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
  * common_app_echo_with_text_param_variable
  *
  */
Blockly.Python['common_app_echo_with_text_param_variable'] = function(block) {
  var variable_text = Blockly.Python.nameDB_.getName(block.getFieldValue('text'), Blockly.Variables.NAME_TYPE);
  var value_input_string = Blockly.Python.valueToCode(block, 'input_string', Blockly.Python.ORDER_NONE);
  var code = String.format('f"echo ' + "{{0}}" + "{1}" + '"', variable_text, value_input_string);
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
  * common_app_rhvoice_with_variable
  *
  */
Blockly.Python['common_app_rhvoice_with_variable'] = function(block) {
  var variable_voice_profile = Blockly.Python.nameDB_.getName(block.getFieldValue('voice_profile'), Blockly.Variables.NAME_TYPE);
  var variable_rate = Blockly.Python.nameDB_.getName(block.getFieldValue('rate'), Blockly.Variables.NAME_TYPE);
  var variable_pitch = Blockly.Python.nameDB_.getName(block.getFieldValue('pitch'), Blockly.Variables.NAME_TYPE);
  var variable_volume = Blockly.Python.nameDB_.getName(block.getFieldValue('volume'), Blockly.Variables.NAME_TYPE);
  var variable_quality = Blockly.Python.nameDB_.getName(block.getFieldValue('quality'), Blockly.Variables.NAME_TYPE);
  var code = String.format('RHVoice-test --profile {{0}} --rate {{1}} --pitch {{2}} --volume {{3}} --quality {{4}} ', variable_voice_profile, variable_rate, variable_pitch, variable_volume, variable_quality);
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_app_rhvoice_with_variable_and_ch
  *
  */
Blockly.Python['common_app_rhvoice_with_variable_and_ch'] = function(block) {
  var variable_voice_profile = Blockly.Python.nameDB_.getName(block.getFieldValue('voice_profile'), Blockly.Variables.NAME_TYPE);
  
  var variable_rate = Blockly.Python.nameDB_.getName(block.getFieldValue('rate'), Blockly.Variables.NAME_TYPE);
  var checkbox_rate_ch = block.getFieldValue('rate_ch') == 'TRUE';
  
  var variable_pitch = Blockly.Python.nameDB_.getName(block.getFieldValue('pitch'), Blockly.Variables.NAME_TYPE);
  var checkbox_pitch_ch = block.getFieldValue('pitch_ch') == 'TRUE';
  
  var variable_volume = Blockly.Python.nameDB_.getName(block.getFieldValue('volume'), Blockly.Variables.NAME_TYPE);
  var checkbox_volume_ch = block.getFieldValue('volume_ch') == 'TRUE';
  
  var variable_quality = Blockly.Python.nameDB_.getName(block.getFieldValue('quality'), Blockly.Variables.NAME_TYPE);
  var checkbox_quality_ch = block.getFieldValue('quality_ch') == 'TRUE';
  
  var code1 = String.format('RHVoice-test --profile {{0}}', variable_voice_profile)
  var code2 = String.format(' --rate {{0}}',  variable_rate);
  var code3 = String.format(' --pitch {{0}}', variable_pitch);
  var code4 = String.format(' --volume {{0}}', variable_volume);
  var code5 = String.format(' --quality {{0}}', variable_quality);
  
  var code = code1;
  
  if(checkbox_rate_ch)
	  code = code + code2;
  
  if(checkbox_pitch_ch)
	  code = code + code3;
  
  if(checkbox_volume_ch)
	  code = code + code4
  
  if(checkbox_quality_ch)
	  code = code + code5
  
  
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
