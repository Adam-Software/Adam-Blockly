/**
 * Python code for python system calls
 * Blocks are located here BlocklySource\source\blocks\python_system_calls.js
 */

'use strict';
// If any new block imports any library, add that library name here.
Blockly.Python.addReservedWords('os, subprocess, sh, ls, app, bno055_webgl.server');

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
  * common_app_rhvoice
  *
  */
Blockly.Python['common_app_rhvoice'] = function(block) {
  var checkbox_voice_profile_ch = block.getFieldValue('voice_profile_ch') == 'TRUE';
  var value_voice_profile = Blockly.Python.valueToCode(block, 'voice_profile', Blockly.Python.ORDER_ATOMIC);
  
  var checkbox_rate_ch = block.getFieldValue('rate_ch') == 'TRUE';
  var value_rate = Blockly.Python.valueToCode(block, 'rate', Blockly.Python.ORDER_ATOMIC);
  
  var checkbox_pitch_ch = block.getFieldValue('pitch_ch') == 'TRUE';
  var value_pitch = Blockly.Python.valueToCode(block, 'pitch', Blockly.Python.ORDER_ATOMIC);
  
  var checkbox_volume_ch = block.getFieldValue('volume_ch') == 'TRUE';
  var value_volume = Blockly.Python.valueToCode(block, 'volume', Blockly.Python.ORDER_ATOMIC);
  
  var checkbox_quality_ch = block.getFieldValue('quality_ch') == 'TRUE';
  var value_quality = Blockly.Python.valueToCode(block, 'quality', Blockly.Python.ORDER_ATOMIC);
  
  var checkbox_input_file_ch = block.getFieldValue('input_file_ch') == 'TRUE';
  var value_input_file_name = Blockly.Python.valueToCode(block, 'input_file_name', Blockly.Python.ORDER_NONE);
  
  var checkbox_to_file_ch = block.getFieldValue('to_file_ch') == 'TRUE';
  var value_to_file_name = Blockly.Python.valueToCode(block, 'to_file_name', Blockly.Python.ORDER_NONE);
  
  var checkbox_is_ssml = block.getFieldValue('is_ssml') == 'TRUE';
  
  var code0 = String.format('RHVoice-test')
  var code1 = String.format(' --profile {0}', value_voice_profile)
  var code2 = String.format(' --rate {0}',  value_rate);
  var code3 = String.format(' --pitch {0}', value_pitch);
  var code4 = String.format(' --volume {0}', value_volume);
  var code5 = String.format(' --quality {0}', value_quality);
  var code6 = String.format(' --input {0}', value_input_file_name);
  var code7 = String.format(' --output {0}', value_to_file_name);
  var code8 = String.format(' --ssml', value_quality);
  
  var code = code0;
  
  if(checkbox_voice_profile_ch)
	  code = code + code1;
  
  if(checkbox_rate_ch)
	  code = code + code2;
  
  if(checkbox_pitch_ch)
	  code = code + code3
  
  if(checkbox_volume_ch)
	  code = code + code4
  
  if(checkbox_quality_ch)
	  code = code + code5
  
  if(checkbox_input_file_ch)
	  code = code + code6
  
  if(checkbox_to_file_ch)
	  code = code + code7
  
  if(checkbox_is_ssml)
	  code = code + code8
  
  return [code, Blockly.Python.ORDER_NONE];
};


/**
  * common_system_pipeline
  *
  */
Blockly.Python['common_system_pipeline'] = function(block) {
  var value_second_value = Blockly.Python.valueToCode(block, 'second_value', Blockly.Python.ORDER_NONE);
  var code = '|' + value_second_value;
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_system_example_flack_app
  * Example for BNO055 
  *
  */
Blockly.Python['common_system_example_flack_app'] = function(block) {
  Blockly.Python.definitions_['from_bno055_webgl.server_import_app'] = 'from bno055_webgl.server import app';
  var value_host = Blockly.Python.valueToCode(block, 'host', Blockly.Python.ORDER_NONE);
  var code = 'app.run(host=' + value_host + ', threaded=True)';
  return code;
};

/**
  * common_system_resources_music
  *
  */
Blockly.Python['common_system_resources_music'] = function(block) {
  var value_path = Blockly.Python.valueToCode(block, 'path', Blockly.Python.ORDER_NONE);
  var code = "";
  
  if(value_path == '')
	  code = "'/home/pi/Music'"
  else
	  code =  String.format("'/home/pi/Music/{0}'",  value_path.replaceAll("'", ""))
  
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_app_ls_dir
  *
  */
Blockly.Python['common_app_ls_dir'] = function(block) {
  Blockly.Python.definitions_['from_sh_import_ls'] = 'from sh import ls';
  var value_path = Blockly.Python.valueToCode(block, 'path', Blockly.Python.ORDER_NONE);
  var checkbox_long_format = block.getFieldValue('long_format') == 'TRUE';
  var checkbox_not_ignore_dot = block.getFieldValue('not_ignore_dot') == 'TRUE';
  
  var code0 = 'ls('
  var code1 = String.format('{0})', value_path)
  
  var code5 = String.format("'-l' ,");
  var code6 = String.format("'-a' ,");
  
  var code = code0;
  
  if(checkbox_long_format)
	  code = code + code5;
  
  if(checkbox_not_ignore_dot)
	  code = code + code6;
  
  code = code + code1;
  
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_system_literal
  *
  */
Blockly.Python['common_system_literal'] = function(block) {
  var value_second_value = Blockly.Python.valueToCode(block, 'second_value', Blockly.Python.ORDER_NONE);
  var code = 'f' + value_second_value;
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_system_left_curly_brace
  *
  */
Blockly.Python['common_system_left_curly_brace'] = function(block) {
  var value_second_value = Blockly.Python.valueToCode(block, 'second_value', Blockly.Python.ORDER_NONE);
  var code = '{' + value_second_value;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * common_system_right_curly_brace
  *
  */
Blockly.Python['common_system_right_curly_brace'] = function(block) {
  var value_second_value = Blockly.Python.valueToCode(block, 'second_value', Blockly.Python.ORDER_NONE);
  var code = '}' + value_second_value;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * common_system_redirect_input
  *
  */
Blockly.Python['common_system_redirect_input'] = function(block) {
  var value_second_value = Blockly.Python.valueToCode(block, 'second_value', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = '<' + value_second_value;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * common_system_redirect_output
  *
  */
Blockly.Python['common_system_redirect_output'] = function(block) {
  var value_second_value = Blockly.Python.valueToCode(block, 'second_value', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
   var code = '>' + value_second_value;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * common_system_whitespace
  *
  */
Blockly.Python['common_system_whitespace'] = function(block) {
  var value_second_value = Blockly.Python.valueToCode(block, 'second_value', Blockly.Python.ORDER_NONE);
  var code = ' ' + value_second_value;
  return [code, Blockly.Python.ORDER_ATOMIC];
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

/**
  * common_system_single_quotation
  *
  */
Blockly.Python['common_system_single_quotation'] = function(block) {
  var value_input_string = Blockly.Python.valueToCode(block, 'input_string', Blockly.Python.ORDER_NONE);
  var code = "'" + value_input_string + "'";
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_system_double_quotation
  *
  */
Blockly.Python['common_system_double_quotation'] = function(block) {
  var value_input_string = Blockly.Python.valueToCode(block, 'input_string', Blockly.Python.ORDER_NONE);
  var code = '"' + value_input_string + '"';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_system_left_single_quotation
  *
  */
Blockly.Python['common_system_one_single_quotation'] = function(block) {
  var value_input_string = Blockly.Python.valueToCode(block, 'input_string', Blockly.Python.ORDER_NONE);
  var code = "'" + value_input_string;
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
