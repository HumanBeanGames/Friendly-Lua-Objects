﻿NDSummary.OnToolTipsLoaded("File:Plugins/MoonSharp/Interpreter/DataTypes/DynValue.cs",{1347:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1347\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public sealed</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.</span>&#8203;DynValue</div></div></div><div class=\"TTSummary\">A class representing a value in a Lua/MoonSharp script.</div></div>",1349:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1349\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static int</span> s_RefIDCounter</div></div></div>",1350:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1350\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private int</span> m_RefID</div></div></div>",1351:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1351\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private int</span> m_HashCode</div></div></div>",1352:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1352\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private bool</span> m_ReadOnly</div></div></div>",1353:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1353\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private double</span> m_Number</div></div></div>",1354:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1354\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private object</span> m_Object</div></div></div>",1355:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1355\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private</span> DataType m_Type</div></div></div>",1357:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1357\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public int</span> ReferenceID { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets a unique reference identifier. This is guaranteed to be unique only for dynvalues created in a single thread as it\'s not thread-safe.</div></div>",1358:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1358\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> DataType Type { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the type of the value.</div></div>",1359:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1359\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> Closure Function { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the function (valid only if the Type is DataType.Function)</div></div>",1360:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1360\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public double</span> Number { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the numeric value (valid only if the Type is DataType.Number)</div></div>",1361:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1361\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> DynValue[] Tuple { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the values in the tuple (valid only if the Type is Tuple).&nbsp; This field is currently also used to hold arguments in values whose Type is DataType.TailCallRequest.</div></div>",1362:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1362\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> Coroutine Coroutine { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the coroutine handle. (valid only if the Type is Thread).</div></div>",1363:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1363\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> Table Table { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the table (valid only if the Type is DataType.Table)</div></div>",1364:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1364\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> Boolean { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the boolean value (valid only if the Type is DataType.Boolean)</div></div>",1365:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1365\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public string</span> String { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the string value (valid only if the Type is DataType.String)</div></div>",1366:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1366\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> CallbackFunction Callback { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the CLR callback (valid only if the Type is DataType.ClrFunction)</div></div>",1367:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1367\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> TailCallData TailCallData { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the tail call data.</div></div>",1368:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1368\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> YieldRequest YieldRequest { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the yield request data.</div></div>",1369:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1369\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> UserData UserData { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the tail call data.</div></div>",1370:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1370\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> ReadOnly { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Returns true if this instance is write protected.</div></div>",1372:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1372\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static</span> DynValue NewNil()</div></div><div class=\"TTSummary\">Creates a new writable value initialized to Nil.</div></div>",1373:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1373\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue NewBoolean(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">v</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new writable value initialized to the specified boolean.</div></div>",1374:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1374\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue NewNumber(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">num</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new writable value initialized to the specified number.</div></div>",1375:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1375\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue NewString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">str</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new writable value initialized to the specified string.</div></div>",1376:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1376\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue NewString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">StringBuilder&nbsp;</td><td class=\"PName last\">sb</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new writable value initialized to the specified StringBuilder.</div></div>",1377:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1377\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue NewString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">format,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">params</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">object</span>[]&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new writable value initialized to the specified string using String.Format like syntax</div></div>",1378:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1378\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue NewCoroutine(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Coroutine&nbsp;</td><td class=\"PName last\">coroutine</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new writable value initialized to the specified coroutine.&nbsp; Internal use only, for external use, see Script.CoroutineCreate</div></div>",1379:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1379\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue NewClosure(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Closure&nbsp;</td><td class=\"PName last\">function</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new writable value initialized to the specified closure (function).</div></div>",1380:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1380\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue NewCallback(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Func&lt;ScriptExecutionContext, CallbackArguments, DynValue&gt;&nbsp;</td><td class=\"PName\">callBack,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">name</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new writable value initialized to the specified CLR callback.</div></div>",1381:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1381\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue NewCallback(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">CallbackFunction&nbsp;</td><td class=\"PName last\">function</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new writable value initialized to the specified CLR callback.&nbsp; See also CallbackFunction.FromDelegate and CallbackFunction.FromMethodInfo factory methods.</div></div>",1382:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1382\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue NewTable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Table&nbsp;</td><td class=\"PName last\">table</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new writable value initialized to the specified table.</div></div>",1383:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1383\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static</span> DynValue NewPrimeTable()</div></div><div class=\"TTSummary\">Creates a new writable value initialized to an empty prime table (a prime table is a table made only of numbers, strings, booleans and other prime tables).</div></div>",1384:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1384\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue NewTable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new writable value initialized to an empty table.</div></div>",1385:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1385\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue NewTable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">params</span>&nbsp;</td><td class=\"PType\">DynValue[]&nbsp;</td><td class=\"PName last\">arrayValues</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new writable value initialized to with array contents.</div></div>",1386:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1386\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue NewTailCallReq(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">DynValue&nbsp;</td><td class=\"PName last\">tailFn,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">params</span>&nbsp;</td><td class=\"PType\">DynValue[]&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new request for a tail call. This is the preferred way to execute Lua/MoonSharp code from a callback, although it\'s not always possible to use it. When a function (callback or script closure) returns a TailCallRequest, the bytecode processor immediately executes the function contained in the request.&nbsp; By executing script in this way, a callback function ensures it\'s not on the stack anymore and thus a number of functionality (state savings, coroutines, etc) keeps working at full power.</div></div>",1387:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1387\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue NewTailCallReq(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">TailCallData&nbsp;</td><td class=\"PName last\">tailCallData</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new request for a tail call. This is the preferred way to execute Lua/MoonSharp code from a callback, although it\'s not always possible to use it. When a function (callback or script closure) returns a TailCallRequest, the bytecode processor immediately executes the function contained in the request.&nbsp; By executing script in this way, a callback function ensures it\'s not on the stack anymore and thus a number of functionality (state savings, coroutines, etc) keeps working at full power.</div></div>",1388:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1388\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue NewYieldReq(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DynValue[]&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new request for a yield of the current coroutine.</div></div>",1389:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1389\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">internal static</span> DynValue NewForcedYieldReq()</div></div><div class=\"TTSummary\">Creates a new request for a yield of the current coroutine.</div></div>",1390:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1390\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue NewTuple(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">params</span>&nbsp;</td><td class=\"PType\">DynValue[]&nbsp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new tuple initialized to the specified values.</div></div>",1391:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1391\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue NewTupleNested(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">params</span>&nbsp;</td><td class=\"PType\">DynValue[]&nbsp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new tuple initialized to the specified values - which can be potentially other tuples</div></div>",1392:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1392\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue NewUserData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UserData&nbsp;</td><td class=\"PName last\">userData</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new userdata value</div></div>",1393:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1393\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> DynValue AsReadOnly()</div></div><div class=\"TTSummary\">Returns this value as readonly - eventually cloning it in the process if it isn\'t readonly to start with.</div></div>",1394:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1394\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> DynValue Clone()</div></div><div class=\"TTSummary\">Clones this instance.</div></div>",1395:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1395\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue Clone(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">readOnly</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Clones this instance, overriding the &quot;readonly&quot; status.</div></div>",1396:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1396\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> DynValue CloneAsWritable()</div></div><div class=\"TTSummary\">Clones this instance, returning a writable copy.</div></div>",1398:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1398\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static</span> DynValue Void { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">A preinitialized, readonly instance, equaling Void</div></div>",1399:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1399\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static</span> DynValue Nil { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">A preinitialized, readonly instance, equaling Nil</div></div>",1400:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1400\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static</span> DynValue True { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">A preinitialized, readonly instance, equaling True</div></div>",1401:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1401\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static</span> DynValue False { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">A preinitialized, readonly instance, equaling False</div></div>",1403:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1403\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static</span> DynValue()</div></div></div>",1404:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1404\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public string</span> ToPrintString()</div></div><div class=\"TTSummary\">Returns a string which is what it\'s expected to be output by the print function applied to this value.</div></div>",1405:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1405\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public string</span> ToDebugPrintString()</div></div><div class=\"TTSummary\">Returns a string which is what it\'s expected to be output by debuggers.</div></div>",1406:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1406\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override string</span> ToString()</div></div><div class=\"TTSummary\">Returns a System.String that represents this instance.</div></div>",1407:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1407\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override int</span> GetHashCode()</div></div><div class=\"TTSummary\">Returns a hash code for this instance.</div></div>",1408:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1408\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public override bool</span> Equals(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determines whether the specified System.Object, is equal to this instance.</div></div>",1409:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1409\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public string</span> CastToString()</div></div><div class=\"TTSummary\">Casts this DynValue to string, using coercion if the type is number.</div></div>",1410:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1410\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public double</span>? CastToNumber()</div></div><div class=\"TTSummary\">Casts this DynValue to a double, using coercion if the type is string.</div></div>",1411:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1411\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> CastToBool()</div></div><div class=\"TTSummary\">Casts this DynValue to a bool</div></div>",1412:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1412\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> IScriptPrivateResource GetAsPrivateResource()</div></div><div class=\"TTSummary\">Returns this DynValue as an instance of IScriptPrivateResource, if possible, null otherwise</div></div>",1413:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1413\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> DynValue ToScalar()</div></div><div class=\"TTSummary\">Converts a tuple to a scalar value. If it\'s already a scalar value, this function returns &quot;this&quot;.</div></div>",1414:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1414\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> Assign(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Performs an assignment, overwriting the value with the specified one.</div></div>",1415:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1415\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> DynValue GetLength()</div></div><div class=\"TTSummary\">Gets the length of a string or table value.</div></div>",1416:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1416\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> IsNil()</div></div><div class=\"TTSummary\">Determines whether this instance is nil or void</div></div>",1417:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1417\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> IsNotNil()</div></div><div class=\"TTSummary\">Determines whether this instance is not nil or void</div></div>",1418:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1418\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> IsVoid()</div></div><div class=\"TTSummary\">Determines whether this instance is void</div></div>",1419:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1419\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> IsNotVoid()</div></div><div class=\"TTSummary\">Determines whether this instance is not void</div></div>",1420:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1420\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> IsNilOrNan()</div></div><div class=\"TTSummary\">Determines whether is nil, void or NaN (and thus unsuitable for using as a table key).</div></div>",1421:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1421\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal void</span> AssignNumber(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">num</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Changes the numeric value of a number DynValue.</div></div>",1422:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1422\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue FromObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a new DynValue from a CLR object</div></div>",1423:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1423\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public object</span> ToObject()</div></div><div class=\"TTSummary\">Converts this MoonSharp DynValue to a CLR object.</div></div>",1424:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1424\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public object</span> ToObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">desiredType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Converts this MoonSharp DynValue to a CLR object of the specified type.</div></div>",1425:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1425\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> T ToObject&lt;T&gt;()</div></div><div class=\"TTSummary\">Converts this MoonSharp DynValue to a CLR object of the specified type.</div></div>",1426:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1426\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public dynamic</span> ToDynamic()</div></div><div class=\"TTSummary\">Converts this MoonSharp DynValue to a CLR object, marked as dynamic</div></div>",1427:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1427\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue CheckType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">funcName,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">DataType&nbsp;</td><td class=\"PName\">desiredType,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">argNum</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHNumber\">-1</span>,</td></tr><tr><td class=\"PType first\">TypeValidationFlags&nbsp;</td><td class=\"PName\">flags</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> TypeValidationFlags.Default</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Checks the type of this value corresponds to the desired type. A propert ScriptRuntimeException is thrown if the value is not of the specified type or - considering the TypeValidationFlags - is not convertible to the specified type.</div></div>",1428:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1428\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> T CheckUserDataType&lt;T&gt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">funcName,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">argNum</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHNumber\">-1</span>,</td></tr><tr><td class=\"PType first\">TypeValidationFlags&nbsp;</td><td class=\"PName\">flags</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> TypeValidationFlags.Default</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Checks if the type is a specific userdata type, and returns it or throws.</div></div>"});