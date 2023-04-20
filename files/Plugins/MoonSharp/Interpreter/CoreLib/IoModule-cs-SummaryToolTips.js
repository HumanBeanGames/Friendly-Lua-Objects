﻿NDSummary.OnToolTipsLoaded("File:Plugins/MoonSharp/Interpreter/CoreLib/IoModule.cs",{976:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype976\"><div class=\"CPEntry TClass Current\"><div class=\"CPPrePrototypeLine\"><span class=\"SHMetadata\">[MoonSharpModule(Namespace = &quot;io&quot;)]</span></div><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;CoreLib.</span>&#8203;IoModule</div></div></div><div class=\"TTSummary\">Class implementing io Lua functions. Proper support requires a compatible IPlatformAccessor</div></div>",978:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype978\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static void</span> MoonSharpInit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Table&nbsp;</td><td class=\"PName last\">globalTable,</td></tr><tr><td class=\"PType first\">Table&nbsp;</td><td class=\"PName last\">ioTable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",979:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype979\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static</span> DynValue __index_callback(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">executionContext,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",980:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype980\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static</span> DynValue GetStandardFile(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">S,</td></tr><tr><td class=\"PType first\">StandardFileType&nbsp;</td><td class=\"PName last\">file</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",981:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype981\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static void</span> SetStandardFile(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">S,</td></tr><tr><td class=\"PType first\">StandardFileType&nbsp;</td><td class=\"PName last\">file,</td></tr><tr><td class=\"PType first\">Stream&nbsp;</td><td class=\"PName last\">optionsStream</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",982:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype982\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> FileUserDataBase GetDefaultFile(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">executionContext,</td></tr><tr><td class=\"PType first\">StandardFileType&nbsp;</td><td class=\"PName last\">file</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",983:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype983\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> SetDefaultFile(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">executionContext,</td></tr><tr><td class=\"PType first\">StandardFileType&nbsp;</td><td class=\"PName last\">file,</td></tr><tr><td class=\"PType first\">FileUserDataBase&nbsp;</td><td class=\"PName last\">fileHandle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",984:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype984\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal static void</span> SetDefaultFile(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\">StandardFileType&nbsp;</td><td class=\"PName last\">file,</td></tr><tr><td class=\"PType first\">FileUserDataBase&nbsp;</td><td class=\"PName last\">fileHandle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",985:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype985\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static void</span> SetDefaultFile(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\">StandardFileType&nbsp;</td><td class=\"PName last\">file,</td></tr><tr><td class=\"PType first\">Stream&nbsp;</td><td class=\"PName last\">stream</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",986:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype986\" class=\"NDPrototype WideForm\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[MoonSharpModuleMethod]</span></div><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue close(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">executionContext,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",987:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype987\" class=\"NDPrototype WideForm\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[MoonSharpModuleMethod]</span></div><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue flush(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">executionContext,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",988:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype988\" class=\"NDPrototype WideForm\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[MoonSharpModuleMethod]</span></div><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue input(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">executionContext,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",989:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype989\" class=\"NDPrototype WideForm\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[MoonSharpModuleMethod]</span></div><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue output(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">executionContext,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",990:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype990\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static</span> DynValue HandleDefaultStreamSetter(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">executionContext,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args,</td></tr><tr><td class=\"PType first\">StandardFileType&nbsp;</td><td class=\"PName last\">defaultFiles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",991:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype991\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private static</span> Encoding GetUTF8Encoding()</div></div></div>",992:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype992\" class=\"NDPrototype WideForm\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[MoonSharpModuleMethod]</span></div><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue lines(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">executionContext,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",993:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype993\" class=\"NDPrototype WideForm\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[MoonSharpModuleMethod]</span></div><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue open(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">executionContext,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",994:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype994\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static string</span> IoExceptionToLuaMessage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Exception&nbsp;</td><td class=\"PName last\">ex,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">filename</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",995:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype995\" class=\"NDPrototype WideForm\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[MoonSharpModuleMethod]</span></div><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue type(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">executionContext,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",996:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype996\" class=\"NDPrototype WideForm\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[MoonSharpModuleMethod]</span></div><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue read(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">executionContext,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",997:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype997\" class=\"NDPrototype WideForm\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[MoonSharpModuleMethod]</span></div><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue write(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">executionContext,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",998:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype998\" class=\"NDPrototype WideForm\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[MoonSharpModuleMethod]</span></div><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue tmpfile(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">executionContext,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",999:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype999\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static</span> FileUserDataBase Open(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">executionContext,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">filename,</td></tr><tr><td class=\"PType first\">Encoding&nbsp;</td><td class=\"PName last\">encoding,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">mode</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>"});