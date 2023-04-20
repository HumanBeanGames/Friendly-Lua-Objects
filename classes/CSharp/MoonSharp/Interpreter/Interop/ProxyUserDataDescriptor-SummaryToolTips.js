﻿NDSummary.OnToolTipsLoaded("CSharpClass:MoonSharp.Interpreter.Interop.ProxyUserDataDescriptor",{2924:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2924\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public sealed</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;Interop.</span>&#8203;ProxyUserDataDescriptor</div></div></div><div class=\"TTSummary\">Data descriptor used for proxy objects</div></div>",2926:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2926\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">IUserDataDescriptor m_ProxyDescriptor</div></div></div>",2927:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2927\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">IProxyFactory m_ProxyFactory</div></div></div>",2929:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2929\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal</span> ProxyUserDataDescriptor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IProxyFactory&nbsp;</td><td class=\"PName\">proxyFactory,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">IUserDataDescriptor&nbsp;</td><td class=\"PName\">proxyDescriptor,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">friendlyName</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2931:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2931\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> IUserDataDescriptor InnerDescriptor { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the descriptor which describes the proxy object</div></div>",2932:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2932\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public string</span> Name { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets the name of the descriptor (usually, the name of the type described).</div></div>",2933:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2933\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> Type Type { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the type this descriptor refers to</div></div>",2935:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2935\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private object</span> Proxy(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Proxies the specified object.</div></div>",2936:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2936\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue Index(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">index,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isDirectIndexing</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Performs an &quot;index&quot; &quot;get&quot; operation.</div></div>",2937:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2937\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> SetIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">index,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">value,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isDirectIndexing</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Performs an &quot;index&quot; &quot;set&quot; operation.</div></div>",2938:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2938\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public string</span> AsString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Converts this userdata to string</div></div>",2939:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2939\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue MetaIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">metaname</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets a &quot;meta&quot; operation on this userdata. If a descriptor does not support this functionality, it should return &quot;null&quot; (not a nil).&nbsp; These standard metamethods can be supported (the return value should be a function accepting the classic parameters of the corresponding metamethod): __add, __sub, __mul, __div, __div, __pow, __unm, __eq, __lt, __le, __lt, __len, __concat, __pairs, __ipairs, __iterator, __call These standard metamethods are supported through other calls for efficiency: __index, __newindex, __tostring</div></div>",2940:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2940\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> IsTypeCompatible(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">type,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determines whether the specified object is compatible with the specified type.&nbsp; Unless a very specific behaviour is needed, the correct implementation is a simple &quot; return type.IsInstanceOfType(obj); &quot;</div></div>"});