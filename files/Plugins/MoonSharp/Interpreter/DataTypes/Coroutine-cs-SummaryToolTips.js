﻿NDSummary.OnToolTipsLoaded("File:Plugins/MoonSharp/Interpreter/DataTypes/Coroutine.cs",{1481:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1481\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.</span>&#8203;Coroutine</div></div></div><div class=\"TTSummary\">A class representing a script coroutine</div></div>",1483:"<div class=\"NDToolTip TEnumeration LCSharp\"><div id=\"NDPrototype1483\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public enum</span> CoroutineType</div></div><div class=\"TTSummary\">Possible types of coroutine</div></div>",1485:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1485\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> CoroutineType Type { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets the type of coroutine</div></div>",1487:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1487\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private</span> CallbackFunction m_ClrCallback</div></div></div>",1488:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1488\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private</span> Processor m_Processor</div></div></div>",1490:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1490\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal</span> Coroutine(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">CallbackFunction&nbsp;</td><td class=\"PName last\">function</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1491:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1491\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal</span> Coroutine(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Processor&nbsp;</td><td class=\"PName last\">proc</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1492:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1492\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">internal void</span> MarkClrCallbackAsDead()</div></div></div>",1493:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1493\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> IEnumerable&lt;DynValue&gt; AsTypedEnumerable()</div></div><div class=\"TTSummary\">Gets this coroutine as a typed enumerable which can be looped over for resuming.&nbsp; Returns its result as DynValue(s)</div></div>",1494:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1494\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> IEnumerable&lt;<span class=\"SHKeyword\">object</span>&gt; AsEnumerable()</div></div><div class=\"TTSummary\">Gets this coroutine as a typed enumerable which can be looped over for resuming.&nbsp; Returns its result as System.Object. Only the first element of tuples is returned.&nbsp; Only non-CLR coroutines can be resumed with this method. Use an overload of the Resume method accepting a ScriptExecutionContext instead.</div></div>",1495:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1495\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> IEnumerable&lt;T&gt; AsEnumerable&lt;T&gt;()</div></div><div class=\"TTSummary\">Gets this coroutine as a typed enumerable which can be looped over for resuming.&nbsp; Returns its result as the specified type. Only the first element of tuples is returned.&nbsp; Only non-CLR coroutines can be resumed with this method. Use an overload of the Resume method accepting a ScriptExecutionContext instead.</div></div>",1496:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1496\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> System.Collections.IEnumerator AsUnityCoroutine()</div></div><div class=\"TTSummary\">The purpose of this method is to convert a MoonSharp/Lua coroutine to a Unity3D coroutine.&nbsp; This loops over the coroutine, discarding returned values, and returning null for each invocation.&nbsp; This means however that the coroutine will be invoked each frame.&nbsp; Only non-CLR coroutines can be resumed with this method. Use an overload of the Resume method accepting a ScriptExecutionContext instead.</div></div>",1497:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1497\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue Resume(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">params</span>&nbsp;</td><td class=\"PType\">DynValue[]&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Resumes the coroutine.&nbsp; Only non-CLR coroutines can be resumed with this overload of the Resume method. Use the overload accepting a ScriptExecutionContext instead.</div></div>",1498:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1498\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue Resume(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">context,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">params</span>&nbsp;</td><td class=\"PType\">DynValue[]&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Resumes the coroutine.</div></div>",1499:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1499\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> DynValue Resume()</div></div><div class=\"TTSummary\">Resumes the coroutine.&nbsp; Only non-CLR coroutines can be resumed with this overload of the Resume method. Use the overload accepting a ScriptExecutionContext instead.</div></div>",1500:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1500\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue Resume(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">context</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Resumes the coroutine.</div></div>",1501:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1501\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue Resume(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">params</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">object</span>[]&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Resumes the coroutine.&nbsp; Only non-CLR coroutines can be resumed with this overload of the Resume method. Use the overload accepting a ScriptExecutionContext instead.</div></div>",1502:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1502\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue Resume(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">context,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">params</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">object</span>[]&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Resumes the coroutine</div></div>",1504:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1504\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> CoroutineState State { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the coroutine state.</div></div>",1506:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1506\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> WatchItem[] GetStackTrace(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">skip,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">SourceRef&nbsp;</td><td class=\"PName\">entrySourceRef</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the coroutine stack trace for debug purposes</div></div>",1508:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1508\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> Script OwnerScript { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets the script owning this resource.</div></div>",1509:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1509\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public long</span> AutoYieldCounter { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div></div><div class=\"TTSummary\">Gets or sets the automatic yield counter.</div></div>"});