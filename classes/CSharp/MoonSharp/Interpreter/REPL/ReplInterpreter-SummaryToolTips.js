﻿NDSummary.OnToolTipsLoaded("CSharpClass:MoonSharp.Interpreter.REPL.ReplInterpreter",{3382:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3382\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;REPL.</span>&#8203;ReplInterpreter</div></div></div><div class=\"TTSummary\">This class provides a simple REPL intepreter ready to be reused in a simple way.</div></div>",3384:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3384\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Script m_Script</div></div></div>",3385:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3385\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">string</span> m_CurrentCommand</div></div></div>",3387:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3387\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> ReplInterpreter(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Initializes a new instance of the ReplInterpreter class.</div></div>",3389:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3389\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> HandleDynamicExprs { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div></div><div class=\"TTSummary\">Gets or sets a value indicating whether this instances handle inputs starting with a &quot;?&quot; as a dynamic expression to evaluate instead of script code (likely invalid)</div></div>",3390:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3390\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> HandleClassicExprsSyntax { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div></div><div class=\"TTSummary\">Gets or sets a value indicating whether this instances handle inputs starting with a &quot;=&quot; as a non-dynamic expression to evaluate (just like the Lua interpreter does by default).</div></div>",3391:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3391\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public virtual bool</span> HasPendingCommand { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets a value indicating whether this instance has a pending command</div></div>",3392:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3392\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public virtual string</span> CurrentPendingCommand { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the current pending command.</div></div>",3393:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3393\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public virtual string</span> ClassicPrompt { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the classic prompt (&quot;&gt;&quot; or &quot;&gt;&gt;&quot;) given the current state of the interpreter</div></div>",3395:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3395\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public virtual</span> DynValue Evaluate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">input</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Evaluate a REPL command.&nbsp; This method returns the result of the computation, or null if more input is needed for having valid code.&nbsp; In case of errors, exceptions are propagated to the caller.</div></div>"});