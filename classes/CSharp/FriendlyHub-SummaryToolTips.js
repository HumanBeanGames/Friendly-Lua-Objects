﻿NDSummary.OnToolTipsLoaded("CSharpClass:FriendlyHub",{71:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype71\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public static</span></div><div class=\"CPName\">FriendlyHub</div></div></div><div class=\"TTSummary\">Manages the creation and storage of LuaScriptable objects from Lua scripts. Allows for loading modded and vanilla data.</div></div>",73:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype73\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static bool</span> Modded</div></div></div>",74:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype74\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private static bool</span> ModdedArg</div></div></div>",76:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype76\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static bool</span> loadModded { <span class=\"SHKeyword\">get</span> }</div></div></div>",77:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype77\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static</span> Dictionary&lt;Type, LuaScriptable[]&gt; MasterObjects</div></div><div class=\"TTSummary\">A dictionary containing all the LuaScriptable objects, keyed by their type.</div></div>",78:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype78\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private static string</span> modsDirectory { <span class=\"SHKeyword\">get</span> }</div></div></div>",80:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype80\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> LuaScriptable NewObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">type,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">name</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new instance of the specified LuaScriptable object with the given name.</div></div>",81:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype81\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> DeepCopy2DArrays(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">LuaScriptable&nbsp;</td><td class=\"PName last\">source,</td></tr><tr><td class=\"PType first\">LuaScriptable&nbsp;</td><td class=\"PName last\">target</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Ensures that 2D arrays are deep copied when copying LuaScriptable objects.</div></div>",82:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype82\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterAssembliesLoaded)]</span></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static void</span> Initialize()</div></div><div class=\"TTSummary\">Initializes the FriendlyHub by registering types and loading external data.</div></div>",83:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype83\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static void</span> LoadExternalData()</div></div><div class=\"TTSummary\">Loads data from external sources, either as modded or vanilla.</div></div>",84:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype84\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private static void</span> LoadAsModded()</div></div><div class=\"TTSummary\">Loads data as modded from the mods directory.</div></div>",85:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype85\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private static void</span> LoadAsVanilla()</div></div><div class=\"TTSummary\">Loads data as vanilla from the resources directory.</div></div>",86:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype86\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static</span> TextAsset[] GetModScripts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">directoryPath,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">dataType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Retrieves mod scripts from the specified directory path and data type.</div></div>",87:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype87\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static</span> TextAsset[] GetVanillaScripts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">directoryPath,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">dataType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Retrieves vanilla scripts from the specified directory path and data type.</div></div>",88:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype88\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static</span> TextAsset[] CombineScripts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">TextAsset[]&nbsp;</td><td class=\"PName last\">modScripts,</td></tr><tr><td class=\"PType first\">TextAsset[]&nbsp;</td><td class=\"PName last\">vanillaScripts</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Combines mod and vanilla scripts into a single array.</div></div>",89:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype89\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static</span> LuaScriptable[] ScriptsToObjects(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">TextAsset[]&nbsp;</td><td class=\"PName last\">combinedScriptsAssets,</td></tr><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">dataType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Converts TextAsset scripts to LuaScriptable objects.</div></div>",90:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype90\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private static void</span> RegisterTypes()</div></div><div class=\"TTSummary\">Registers all types with the LuaRegisterAttribute to the Lua environment.</div></div>"});