﻿NDSummary.OnToolTipsLoaded("CSharpClass:MoonSharp.Interpreter.Interop.IUserDataType",{3031:"<div class=\"NDToolTip TInterface LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3031\"><div class=\"CPEntry TInterface Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">interface</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;Interop.</span>&#8203;IUserDataType</div></div></div><div class=\"TTSummary\">As a convenience, every type deriving from IUserDataType is &quot;self-described&quot;. That is, no descriptor is needed/generated and the object itself is used to describe the type for interop. See also UserData, IUserDataDescriptor and StandardUserDataDescriptor .</div></div>",3033:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3033\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">DynValue Index(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">index,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isDirectIndexing</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Performs an &quot;index&quot; &quot;get&quot; operation.</div></div>",3034:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3034\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> SetIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">index,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">value,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isDirectIndexing</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Performs an &quot;index&quot; &quot;set&quot; operation.</div></div>",3035:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3035\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">DynValue MetaIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">metaname</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets a &quot;meta&quot; operation on this userdata. If a descriptor does not support this functionality, it should return &quot;null&quot; (not a nil).&nbsp; These standard metamethods can be supported (the return value should be a function accepting the classic parameters of the corresponding metamethod): __add, __sub, __mul, __div, __div, __pow, __unm, __eq, __lt, __le, __lt, __len, __concat, __pairs, __ipairs, __iterator, __call&nbsp; These standard metamethods are supported through other calls for efficiency: __index, __newindex, __tostring</div></div>"});