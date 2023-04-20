﻿NDSummary.OnToolTipsLoaded("File:Plugins/MoonSharp/Interpreter/Interop/BasicDescriptors/IMemberDescriptor.cs",{2241:"<div class=\"NDToolTip TInterface LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2241\"><div class=\"CPEntry TInterface Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">interface</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;Interop.&#8203;BasicDescriptors.</span>&#8203;IMemberDescriptor</div></div></div><div class=\"TTSummary\">Base interface to describe access to members of a given type.&nbsp; While it\'s not infrastructural to implement custom type descriptors, it\'s needed for classes extending DispatchingUserDataDescriptor.</div></div>",2243:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2243\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> IsStatic { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets a value indicating whether the described member is static.</div></div>",2244:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2244\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">string</span> Name { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the name of the member</div></div>",2245:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2245\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">MemberDescriptorAccess MemberAccess { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the types of access supported by this member</div></div>",2247:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2247\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">DynValue GetValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the value of this member as a DynValue to be exposed to scripts.&nbsp; Implementors should raise exceptions if the value cannot be read or if access to an instance member through a static userdata is attempted.</div></div>",2248:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2248\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the value of this member from a DynValue.&nbsp; Implementors should raise exceptions if the value cannot be read or if access to an instance member through a static userdata is attempted.</div></div>",2249:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2249\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public static</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;Interop.&#8203;BasicDescriptors.</span>&#8203;MemberDescriptor</div></div></div><div class=\"TTSummary\">Extension methods for IMemberDescriptor and MemberDescriptorAccess .</div></div>",2251:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2251\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool</span> HasAllFlags(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">this</span>&nbsp;</td><td class=\"PType\">MemberDescriptorAccess&nbsp;</td><td class=\"PName last\">access,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">MemberDescriptorAccess&nbsp;</td><td class=\"PName last\">flag</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determines whether the specified MemberDescriptorAccess has ALL the specified flags.</div></div>",2252:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2252\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool</span> CanRead(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">this</span>&nbsp;</td><td class=\"PType\">IMemberDescriptor&nbsp;</td><td class=\"PName last\">desc</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determines whether this instance can be read</div></div>",2253:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2253\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool</span> CanWrite(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">this</span>&nbsp;</td><td class=\"PType\">IMemberDescriptor&nbsp;</td><td class=\"PName last\">desc</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determines whether this instance can be written to</div></div>",2254:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2254\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool</span> CanExecute(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">this</span>&nbsp;</td><td class=\"PType\">IMemberDescriptor&nbsp;</td><td class=\"PName last\">desc</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determines whether this instance can be executed (called as a function)</div></div>",2255:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2255\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> DynValue GetGetterCallbackAsDynValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">this</span>&nbsp;</td><td class=\"PType\">IMemberDescriptor&nbsp;</td><td class=\"PName last\">desc,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the getter of the member as a DynValue containing a callback</div></div>",2256:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2256\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> IMemberDescriptor WithAccessOrNull(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">this</span>&nbsp;</td><td class=\"PType\">IMemberDescriptor&nbsp;</td><td class=\"PName last\">desc,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">MemberDescriptorAccess&nbsp;</td><td class=\"PName last\">access</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns the specified descriptor if it supports all the specified access modes, otherwise returns null.</div></div>",2257:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2257\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static void</span> CheckAccess(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">this</span>&nbsp;</td><td class=\"PType\">IMemberDescriptor&nbsp;</td><td class=\"PName last\">desc,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">MemberDescriptorAccess&nbsp;</td><td class=\"PName last\">access,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Raises an appropriate ScriptRuntimeException if the specified access is not supported.&nbsp; Checks are made for the MemberDescriptorAccess permissions AND for the access of instance members through static userdatas.</div></div>"});