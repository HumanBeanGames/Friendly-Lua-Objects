﻿NDSummary.OnToolTipsLoaded("CSharpClass:MoonSharp.Interpreter.Interop.ValueTypeDefaultCtorMemberDescriptor",{2673:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2673\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;Interop.</span>&#8203;ValueTypeDefaultCtorMemberDescriptor</div></div></div><div class=\"TTSummary\">Member descriptor for the default constructor of value types.</div></div>",2675:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2675\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> IsStatic { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets a value indicating whether the described method is static.</div></div>",2676:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2676\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public string</span> Name { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets the name of the described method</div></div>",2677:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2677\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> Type ValueTypeDefaultCtor { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">This property is equal to the value type to be constructed.</div></div>",2678:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2678\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> ParameterDescriptor[] Parameters { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets the type of the arguments of the underlying CLR function</div></div>",2679:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2679\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> Type ExtensionMethodType { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the type which this extension method extends, null if this is not an extension method.</div></div>",2680:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2680\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> Type VarArgsArrayType { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets a value indicating the type of the ParamArray parameter of a var-args function. If the function is not var-args, null is returned.</div></div>",2681:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2681\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> Type VarArgsElementType { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets a value indicating the type of the elements of the ParamArray parameter of a var-args function. If the function is not var-args, null is returned.</div></div>",2683:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2683\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> ValueTypeDefaultCtorMemberDescriptor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">valueType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Initializes a new instance of the MethodMemberDescriptor class representing the default empty ctor for a value type.</div></div>",2684:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2684\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue Execute(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">context,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Invokes the member from script.&nbsp; Implementors should raise exceptions if the value cannot be executed or if access to an instance member through a static userdata is attempted.</div></div>",2686:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2686\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public string</span> SortDiscriminant { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets a sort discriminant to give consistent overload resolution matching in case of perfectly equal scores</div></div>",2687:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2687\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> MemberDescriptorAccess MemberAccess { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the types of access supported by this member</div></div>",2689:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2689\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue GetValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the value of this member as a DynValue to be exposed to scripts.&nbsp; Implementors should raise exceptions if the value cannot be read or if access to an instance member through a static userdata is attempted.</div></div>",2690:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2690\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> SetValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the value of this member from a DynValue.&nbsp; Implementors should raise exceptions if the value cannot be read or if access to an instance member through a static userdata is attempted.</div></div>",2691:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2691\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> PrepareForWiring(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Table&nbsp;</td><td class=\"PName last\">t</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Prepares the descriptor for hard-wiring.&nbsp; The descriptor fills the passed table with all the needed data for hardwire generators to generate the appropriate code.</div></div>"});