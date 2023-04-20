﻿NDSummary.OnToolTipsLoaded("CSharpClass:MoonSharp.Interpreter.Platforms.PlatformAccessorBase",{3312:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3312\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public abstract</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;Platforms.</span>&#8203;PlatformAccessorBase</div></div></div><div class=\"TTSummary\">An abstract class which offers basic services on top of IPlatformAccessor to provide easier implementation of platforms.</div></div>",3314:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3314\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public abstract string</span> GetPlatformNamePrefix()</div></div><div class=\"TTSummary\">Gets the platform name prefix</div></div>",3315:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3315\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public string</span> GetPlatformName()</div></div><div class=\"TTSummary\">Gets the name of the platform (used for debug purposes).</div></div>",3316:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3316\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private string</span> GetUnityRuntimeName()</div></div></div>",3317:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3317\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private string</span> GetUnityPlatformName()</div></div></div>",3318:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3318\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public abstract void</span> DefaultPrint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">content</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Default handler for \'print\' calls. Can be customized in ScriptOptions</div></div>",3319:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3319\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[Obsolete(&quot;Replace with DefaultInput(string)&quot;)]</span></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public virtual string</span> DefaultInput()</div></div><div class=\"TTSummary\">DEPRECATED.&nbsp; This is kept for backward compatibility, see the overload taking a prompt as an input parameter.&nbsp; Default handler for interactive line input calls. Can be customized in ScriptOptions.&nbsp; If an inheriting class whants to give a meaningful implementation, this method MUST be overridden.</div></div>",3320:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3320\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public virtual string</span> DefaultInput(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">prompt</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Default handler for interactive line input calls. Can be customized in ScriptOptions.&nbsp; If an inheriting class whants to give a meaningful implementation, this method MUST be overridden.</div></div>",3321:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3321\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public abstract</span> Stream IO_OpenFile(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">filename,</td></tr><tr><td class=\"PType first\">Encoding&nbsp;</td><td class=\"PName last\">encoding,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">mode</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">A function used to open files in the \'io\' module.&nbsp; Can have an invalid implementation if \'io\' module is filtered out.&nbsp; It should return a correctly initialized Stream for the given file and access</div></div>",3322:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3322\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public abstract</span> Stream IO_GetStandardStream(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">StandardFileType&nbsp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets a standard stream (stdin, stdout, stderr).</div></div>",3323:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3323\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public abstract string</span> IO_OS_GetTempFilename()</div></div><div class=\"TTSummary\">Gets a temporary filename. Used in \'io\' and \'os\' modules.&nbsp; Can have an invalid implementation if \'io\' and \'os\' modules are filtered out.</div></div>",3324:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3324\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public abstract void</span> OS_ExitFast(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">exitCode</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Exits the process, returning the specified exit code.&nbsp; Can have an invalid implementation if the \'os\' module is filtered out.</div></div>",3325:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3325\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public abstract bool</span> OS_FileExists(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">file</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Checks if a file exists. Used by the \'os\' module.&nbsp; Can have an invalid implementation if the \'os\' module is filtered out.</div></div>",3326:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3326\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public abstract void</span> OS_FileDelete(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">file</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Deletes the specified file. Used by the \'os\' module.&nbsp; Can have an invalid implementation if the \'os\' module is filtered out.</div></div>",3327:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3327\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public abstract void</span> OS_FileMove(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">src,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">dst</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Moves the specified file. Used by the \'os\' module.&nbsp; Can have an invalid implementation if the \'os\' module is filtered out.</div></div>",3328:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3328\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public abstract int</span> OS_Execute(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cmdline</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Executes the specified command line, returning the child process exit code and blocking in the meantime.&nbsp; Can have an invalid implementation if the \'os\' module is filtered out.</div></div>",3329:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3329\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public abstract</span> CoreModules FilterSupportedCoreModules(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">CoreModules&nbsp;</td><td class=\"PName last\">module</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Filters the CoreModules enumeration to exclude non-supported operations</div></div>",3330:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3330\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public abstract string</span> GetEnvironmentVariable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">envvarname</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets an environment variable. Must be implemented, but an implementation is allowed to always return null if a more meaningful implementation cannot be achieved or is not desired.</div></div>",3331:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3331\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public virtual bool</span> IsRunningOnAOT()</div></div><div class=\"TTSummary\">Determines whether the application is running in AOT (ahead-of-time) mode</div></div>"});