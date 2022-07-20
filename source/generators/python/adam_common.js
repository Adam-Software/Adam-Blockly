/**
 * Python code for common adam blocks
 * Blocks are located here BlocklySource\source\blocks\adam_common.js
 */

'use strict';
// If any new block imports any library, add that library name here.
Blockly.Python.addReservedWords('smbus, board, adafruit_extended_bus, ExtendedI2C, musicpy, os, sh, RHVoice, pygame');

/**
  * common_eye_pack
  *
  */  
Blockly.Python['common_eye_pack'] = function (block) {
    var value_addr = Blockly.Python.valueToCode(block, 'addr', Blockly.Python.ORDER_ATOMIC);
    var value_reg = Blockly.Python.valueToCode(block, 'reg', Blockly.Python.ORDER_ATOMIC);
    var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
    var value_start_led = Blockly.Python.valueToCode(block, 'start_led', Blockly.Python.ORDER_ATOMIC);
    var value_stop_led = Blockly.Python.valueToCode(block, 'stop_led', Blockly.Python.ORDER_ATOMIC);
    var value_step = Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_ATOMIC);
    var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
    
	var code = '[' + value_addr + ', ' + value_reg + ', ' + value_color + ', ' + value_start_led + ', ' + value_stop_led + ', ' + value_step + ', ' + value_time + ', 0' + ']';
    
	return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_eye_pack_simple
  *
  */
Blockly.Python['common_eye_pack_simple'] = function(block) {
  var value_reg = Blockly.Python.valueToCode(block, 'reg', Blockly.Python.ORDER_ATOMIC);
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var value_start_led = Blockly.Python.valueToCode(block, 'start_led', Blockly.Python.ORDER_ATOMIC);
  var value_stop_led = Blockly.Python.valueToCode(block, 'stop_led', Blockly.Python.ORDER_ATOMIC);
  var value_step = Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_ATOMIC);
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  
  var code = '[170, ' + value_reg + ', ' + value_color + ', ' + value_start_led + ', ' + value_stop_led + ', ' + value_step + ', ' + value_time + ', 0' + ']';
  
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_import_smbus
  *
  */
Blockly.Python['common_import_smbus'] = function(block) {
  Blockly.Python.definitions_['import_smbus'] = 'import smbus';
  var value_bus_number = Blockly.Python.valueToCode(block, 'bus_number', Blockly.Python.ORDER_ATOMIC)

  var code = 'smbus.SMBus(' + value_bus_number + ')\n';

  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_write_i2c_block_data
  *
  */
Blockly.Python['common_write_i2c_block_data'] = function(block) {
  var variable_bus = Blockly.Python.nameDB_.getName(block.getFieldValue('bus'), Blockly.Variables.NAME_TYPE);
  var value_addr = Blockly.Python.valueToCode(block, 'addr', Blockly.Python.ORDER_ATOMIC);
  var value_cmd = Blockly.Python.valueToCode(block, 'cmd', Blockly.Python.ORDER_ATOMIC);
  var value_packet = Blockly.Python.valueToCode(block, 'packet', Blockly.Python.ORDER_ATOMIC);
  
  var code = variable_bus + '.write_i2c_block_data(' + value_addr + ', ' + value_cmd + ', ' + value_packet +')\n'
  
  return code;
};

/**
  * common_simple_write_i2c_block_data
  *
  */
Blockly.Python['common_simple_write_i2c_block_data'] = function(block) {
  var variable_bus = Blockly.Python.nameDB_.getName(block.getFieldValue('bus'), Blockly.Variables.NAME_TYPE);
  var value_addr = Blockly.Python.valueToCode(block, 'addr', Blockly.Python.ORDER_ATOMIC);
  var value_packet = Blockly.Python.valueToCode(block, 'packet', Blockly.Python.ORDER_ATOMIC);
  
  var code = variable_bus + '.write_i2c_block_data(' + value_addr + ', 0, ' + value_packet +')\n'
  
  return code;
};

/**
  * common_eye_color
  *
  */
Blockly.Python['common_eye_color'] = function(block) {
  var dropdown_color = block.getFieldValue('color');
  
  var code = dropdown_color;
  
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * common_eye_diode_number
  *
  */
Blockly.Python['common_eye_diode_number'] = function(block) {
  var number_diode_number = block.getFieldValue('diode_number');
  
  var code = number_diode_number;
  
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * common_reg_constant
  *
  */
Blockly.Python['common_reg_constant'] = function(block) {
  var dropdown_const = block.getFieldValue('const');
  
  var code = dropdown_const;
  
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * common_i2c_device_address
  *
  */
Blockly.Python['common_i2c_device_address'] = function(block) {
  var dropdown_device_addr = block.getFieldValue('device_addr');
  
  var code = dropdown_device_addr;
  
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * common_i2c_sensor_device
  *
  */
Blockly.Python['common_i2c_sensor_device'] = function(block) {
  Blockly.Python.definitions_['import_board'] = 'import board';
  var code = 'board.I2C()';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_i2c_sensor_device_extended
  *
  */
Blockly.Python['common_i2c_sensor_device_extended'] = function(block) {
  Blockly.Python.definitions_['from_adafruit_extended_bus_import_ExtendedI2C_as_I2C'] = 'from adafruit_extended_bus import ExtendedI2C as I2C';
  var value_i2c_bus = Blockly.Python.valueToCode(block, 'i2c_bus', Blockly.Python.ORDER_ATOMIC);
  var code = 'I2C(' + value_i2c_bus +')';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_sensor_declaration
  *
  */
Blockly.Python['common_sensor_declaration'] = function(block) {
  Blockly.Python.definitions_['import_adafruit_bno055'] = 'import adafruit_bno055';
  var variable_i2c_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('i2c_variable'), Blockly.Variables.NAME_TYPE);
  var code = 'adafruit_bno055.BNO055_I2C(' + variable_i2c_variable +' ,0x29)';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_sensor_declaration_extended
  *
  */
Blockly.Python['common_sensor_declaration_extended'] = function(block) {
  Blockly.Python.definitions_['import_adafruit_bno055'] = 'import adafruit_bno055';
  var variable_i2c_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('i2c_variable'), Blockly.Variables.NAME_TYPE);
  var value_sensor_address = Blockly.Python.valueToCode(block, 'sensor_address', Blockly.Python.ORDER_ATOMIC);
  var code = 'adafruit_bno055.BNO055_I2C(' + variable_i2c_variable + ' ,' + value_sensor_address + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_sensor_temperature
  *
  */
Blockly.Python['common_sensor_temperature'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.temperature';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_sensor_acceleration
  *
  */
Blockly.Python['common_sensor_acceleration'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.acceleration';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_sensor_magnetometer
  *
  */
Blockly.Python['common_sensor_magnetometer'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.magnetic';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_sensor_gyro
  *
  */
Blockly.Python['common_sensor_gyro'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.gyro';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_sensor_euler
  *
  */
Blockly.Python['common_sensor_euler'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.euler';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_sensor_quaternion
  *
  */
Blockly.Python['common_sensor_quaternion'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.quaternion';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_sensor_linear_acceleration
  *
  */
Blockly.Python['common_sensor_linear_acceleration'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.linear_acceleration';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_sensor_linear_gravity
  *
  */
Blockly.Python['common_sensor_gravity'] = function(block) {
  var variable_sensor_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('sensor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_sensor_variable + '.gravity';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_music_major_chord
  *
  */
Blockly.Python['common_music_major_chord'] = function(block) {
  var dropdown_chord = block.getFieldValue('chord');
  var code = '\'' + dropdown_chord + '\'';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * common_music_minor_chord
  *
  */
Blockly.Python['common_music_minor_chord'] = function(block) {
  var dropdown_chord = block.getFieldValue('chord');
  var code = '\'' + dropdown_chord + '\'';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * common_music_minor_major_seventh_chords
  *
  */
Blockly.Python['common_music_minor_major_seventh_chords'] = function(block) {
  var dropdown_chord = block.getFieldValue('chord');
  var code = '\'' + dropdown_chord + '\'';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * common_music_minor_minor_seventh_chords
  *
  */
Blockly.Python['common_music_minor_minor_seventh_chords'] = function(block) {
  var dropdown_chord = block.getFieldValue('chord');
  var code = '\'' + dropdown_chord + '\'';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * common_music_major_chord_extended
  *
  */
Blockly.Python['common_music_major_chord_extended'] = function(block) {
  var dropdown_chord = block.getFieldValue('chord');
  var value_major_third = Blockly.Python.valueToCode(block, 'major_third', Blockly.Python.ORDER_ATOMIC);
  var value_perfect_fifth = Blockly.Python.valueToCode(block, 'perfect_fifth', Blockly.Python.ORDER_ATOMIC);
  var value_major_seventh = Blockly.Python.valueToCode(block, 'major_seventh', Blockly.Python.ORDER_ATOMIC);
  var code = '\'' + dropdown_chord + '\'' + ', ' + value_major_third + ', ' + value_perfect_fifth + ', ' + value_major_seventh; 
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * common_music_minor_chord_extended
  *
  */
Blockly.Python['common_music_minor_chord_extended'] = function(block) {
  var dropdown_chord = block.getFieldValue('chord');
  var value_major_third = Blockly.Python.valueToCode(block, 'major_third', Blockly.Python.ORDER_ATOMIC);
  var value_perfect_fifth = Blockly.Python.valueToCode(block, 'perfect_fifth', Blockly.Python.ORDER_ATOMIC);
  var value_major_seventh = Blockly.Python.valueToCode(block, 'major_seventh', Blockly.Python.ORDER_ATOMIC);

  var code = '\'' + dropdown_chord + '\'' + ', ' + value_major_third + ', ' + value_perfect_fifth + ', ' + value_major_seventh;

  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * common_music_minor_major_seventh_chords_extended
  *
  */
Blockly.Python['common_music_minor_major_seventh_chords_extended'] = function(block) {
  var dropdown_chord = block.getFieldValue('chord');
  var value_major_third = Blockly.Python.valueToCode(block, 'major_third', Blockly.Python.ORDER_ATOMIC);
  var value_perfect_fifth = Blockly.Python.valueToCode(block, 'perfect_fifth', Blockly.Python.ORDER_ATOMIC);
  var value_major_seventh = Blockly.Python.valueToCode(block, 'major_seventh', Blockly.Python.ORDER_ATOMIC);
  var code = '\'' + dropdown_chord + '\'' + ', ' + value_major_third + ', ' + value_perfect_fifth + ', ' + value_major_seventh;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * common_music_minor_minor_seventh_chords_extended
  *
  */
Blockly.Python['common_music_minor_minor_seventh_chords_extended'] = function(block) {
  var dropdown_chord = block.getFieldValue('chord');
  var value_major_third = Blockly.Python.valueToCode(block, 'major_third', Blockly.Python.ORDER_ATOMIC);
  var value_perfect_fifth = Blockly.Python.valueToCode(block, 'perfect_fifth', Blockly.Python.ORDER_ATOMIC);
  var value_major_seventh = Blockly.Python.valueToCode(block, 'major_seventh', Blockly.Python.ORDER_ATOMIC);
  var code = '\'' + dropdown_chord + '\'' + ', ' + value_major_third + ', ' + value_perfect_fifth + ', ' + value_major_seventh;
  return [code, Blockly.Python.ORDER_ATOMIC];
};


/**
  * common_music_note
  *
  */
Blockly.Python['common_music_note'] = function(block) {
  var dropdown_note = block.getFieldValue('note');
  var number_octave = block.getFieldValue('octave');
  var code = '...';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_music_note_extended
  *
  */
Blockly.Python['common_music_note_extended'] = function(block) {
  var dropdown_note = block.getFieldValue('note');
  var number_octave = block.getFieldValue('octave');
  var number_duration = block.getFieldValue('duration');
  var number__strength_ = block.getFieldValue(' strength ');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_music_classic_note
  *
  */

Blockly.Python['common_music_classic_note'] = function(block) {
  var dropdown_note = block.getFieldValue('note');
  var number_octave = block.getFieldValue('octave');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_music_classic_note_extended
  *
  */

Blockly.Python['common_music_classic_note_extended'] = function(block) {
  var dropdown_note = block.getFieldValue('note');
  var number_octave = block.getFieldValue('octave');
  var number_duration = block.getFieldValue('duration');
  var number__strength_ = block.getFieldValue(' strength ');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_music_mixer_init
  *
  */
Blockly.Python['common_music_mixer_init'] = function(block) {
  Blockly.Python.definitions_['import_pygame'] = 'import pygame';
  var code = 'pygame.mixer.init()\n';
  return code;
};

/**
  * common_music_mixer_load
  *
  */
Blockly.Python['common_music_mixer_load'] = function(block) {
  var value_path = Blockly.Python.valueToCode(block, 'path', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = 'pygame.mixer.music.load(' + value_path + ')\n';
  return code;
}; 

/**
  * common_music_mixer_play
  *
  */
Blockly.Python['common_music_mixer_play'] = function(block) {
  Blockly.Python.definitions_['import_pygame'] = 'import pygame';
  var code = 'pygame.mixer.music.play()\n';
  return code;
};

/**
  * common_music_mixer_get_bussy
  *
  */
Blockly.Python['common_music_mixer_get_bussy'] = function(block) {
  Blockly.Python.definitions_['import_pygame'] = 'import pygame';
  var code = 'pygame.mixer.music.get_busy()';
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_music_function_create_chord
  *
  */
Blockly.Python['common_music_function_create_chord'] = function(block) {
  var value_chord = Blockly.Python.valueToCode(block, 'chord', Blockly.Python.ORDER_ATOMIC);
  var code = 'C(' + value_chord + ')';
  return code;
};

/**
  * common_music_function_create_instrument
  *
  */
Blockly.Python['common_music_function_create_instrument'] = function(block) {
  Blockly.Python.definitions_['from_musicpy_import_*'] = 'from musicpy import *';
  var statements_instrument = Blockly.Python.statementToCode(block, 'instrument');
  var code = '(' + statements_instrument.trimStart().trimEnd() + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};


/**
  * common_music_function_play
  *
  */
Blockly.Python['common_music_function_play'] = function(block) {
  var value_music_variable = Blockly.Python.valueToCode(block, 'music_variable', Blockly.Python.ORDER_ATOMIC);
  var value_bmp = Blockly.Python.valueToCode(block, 'bmp', Blockly.Python.ORDER_ATOMIC);
  var value_instrument_name = Blockly.Python.valueToCode(block, 'instrument_name', Blockly.Python.ORDER_ATOMIC);
  var code = 'play(' + value_music_variable + ', bpm=' + value_bmp  + ', instrument=' + value_instrument_name + ')\n';
  return code;
};

/**
  * common_music_spes_symbols_with_numeric
  *
  */
Blockly.Python['common_music_spes_symbols_with_numeric'] = function(block) {
  var dropdown_symbols = block.getFieldValue('symbols');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  
  var code = dropdown_symbols + value_name;
  
  return code;
};

/**
  * common_music_spes_symbols
  *
  */
Blockly.Python['common_music_spes_symbols'] = function(block) {
  var dropdown_symbols = block.getFieldValue('symbols');
  var code = dropdown_symbols;
  return code;
};

/**
  * common_music_fraction
  *
  */
Blockly.Python['common_music_fraction'] = function(block) {
  var number_numerator = block.getFieldValue('numerator');
  var number_denominator = block.getFieldValue('denominator');
  var code = number_numerator + '/' + number_denominator;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/**
  * common_say_native
  *
  */  
Blockly.Python['common_say_native'] = function(block) {
  Blockly.Python.definitions_['import_subprocess'] = 'import subprocess';
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'subprocess.call("echo ' + value_text + ' | RHVoice-test --profile \'aleksandr-hq\'  2>/dev/null", shell=True)';
  return code;
};

/**
  * common_say_native_with_voice_param
  *
  */
Blockly.Python['common_say_native_with_voice_param'] = function(block) {
  Blockly.Python.definitions_['import_subprocess'] = 'import subprocess';
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_voice = Blockly.Python.valueToCode(block, 'voice', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'subprocess.call("echo ' + value_text + ' | RHVoice-test --profile ' + value_voice + '  2>/dev/null", shell=True)';
  return code;
};

/**
  * common_say_sh
  *
  */
Blockly.Python['common_say_sh'] = function(block) {
  Blockly.Python.definitions_['from_sh_import_RHVoice'] = 'from sh import RHVoice';
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var code = 'RHVoice(p=\'Aleksandr-hq\', _in='+ value_text + ')';
  return code;
};

/**
  * common_say_sh_with_voice_param
  *
  */
Blockly.Python['common_say_sh_with_voice_param'] = function(block) {
  Blockly.Python.definitions_['from_sh_import_RHVoice'] = 'from sh import RHVoice';
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_voice = Blockly.Python.valueToCode(block, 'voice', Blockly.Python.ORDER_ATOMIC);
  var code = 'RHVoice(p=' + value_voice + ', _in='+ value_text + ')';
  return code;
};

/**
  * common_say_voices_list
  *
  */
Blockly.Python['common_say_voices_list'] = function(block) {
  var dropdown_voice_profile = block.getFieldValue('voice_profile');
  var code = String.format("'{0}'", dropdown_voice_profile);
  return [code, Blockly.Python.ORDER_ATOMIC];;
};

/**
  * common_comment
  *
  */
Blockly.Python['common_comment'] = function(block) {
  var text_comment_value = block.getFieldValue('first_text_value');
  var code = '# ' + text_comment_value + '\n';
  return code;
};

/**
  * text_with_continuation
  *
  */
Blockly.Python['text_with_continuation'] = function(block) {
  var text_value = block.getFieldValue('first_text_value');
  var value_second_value = Blockly.Python.valueToCode(block, 'second_value', Blockly.Python.ORDER_NONE);
  var code = "'" + text_value + "'" + value_second_value;
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * variable_with_continuation
  *
  */
Blockly.Python['variable_with_continuation'] = function(block) {
  var variable_second_variable = Blockly.Python.nameDB_.getName(block.getFieldValue('second_variable'), Blockly.Variables.NAME_TYPE);
  var continuation = Blockly.Python.valueToCode(block, 'second_variable_value', Blockly.Python.ORDER_ATOMIC);
  var code = variable_second_variable + continuation;
  return [code, Blockly.Python.ORDER_NONE];
};

/**
  * common_say_save_file_dp
  *
  */
Blockly.Python['common_say_save_file_dp'] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_NONE);
  var dropdown_extension = block.getFieldValue('extension');
  var cleanText = value_text.replaceAll("'", "")
  var code = String.format("'{0}{1}'", cleanText, dropdown_extension);
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

