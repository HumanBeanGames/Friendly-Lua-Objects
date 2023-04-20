﻿NDSummary.OnToolTipsLoaded("File:Plugins/MoonSharp/Interpreter/Execution/VM/Processor/Processor.cs",{1908:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1908\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">sealed</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;Execution.&#8203;VM.</span>&#8203;Processor</div></div></div></div>",1910:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1910\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">ByteCode m_RootChunk</div></div></div>",1911:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1911\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">FastStack&lt;DynValue&gt; m_ValueStack</div></div></div>",1912:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1912\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">FastStack&lt;CallStackItem&gt; m_ExecutionStack</div></div></div>",1913:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1913\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">List&lt;Processor&gt; m_CoroutinesStack</div></div></div>",1914:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1914\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Table m_GlobalTable</div></div></div>",1915:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1915\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Script m_Script</div></div></div>",1916:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1916\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Processor m_Parent</div></div></div>",1917:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1917\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">CoroutineState m_State</div></div></div>",1918:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1918\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> m_CanYield</div></div></div>",1919:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1919\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> m_SavedInstructionPtr</div></div></div>",1920:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1920\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">DebugContext m_Debug</div></div></div>",1922:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1922\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> Processor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\">Table&nbsp;</td><td class=\"PName last\">globalContext,</td></tr><tr><td class=\"PType first\">ByteCode&nbsp;</td><td class=\"PName last\">byteCode</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1923:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1923\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> Processor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Processor&nbsp;</td><td class=\"PName last\">parentProcessor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1924:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1924\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue Call(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">function,</td></tr><tr><td class=\"PType first\">DynValue[]&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1925:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1925\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private int</span> PushClrToScriptStackFrame(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">CallStackItemFlags&nbsp;</td><td class=\"PName last\">flags,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">function,</td></tr><tr><td class=\"PType first\">DynValue[]&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1927:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1927\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> m_OwningThreadID</div></div></div>",1928:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1928\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> m_ExecutionNesting</div></div></div>",1930:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1930\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private void</span> LeaveProcessor()</div></div></div>",1931:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1931\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> GetThreadId()</div></div></div>",1932:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1932\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private void</span> EnterProcessor()</div></div></div>",1933:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1933\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">internal</span> SourceRef GetCoroutineSuspendedLocation()</div></div></div>"});