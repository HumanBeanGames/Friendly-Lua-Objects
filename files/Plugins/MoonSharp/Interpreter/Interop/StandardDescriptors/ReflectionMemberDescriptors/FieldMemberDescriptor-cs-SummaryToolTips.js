﻿NDSummary.OnToolTipsLoaded("File:Plugins/MoonSharp/Interpreter/Interop/StandardDescriptors/ReflectionMemberDescriptors/FieldMemberDescriptor.cs",{2786:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2786\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;Interop.</span>&#8203;FieldMemberDescriptor</div></div></div><div class=\"TTSummary\">Class providing easier marshalling of CLR fields</div></div>",2788:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2788\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> FieldInfo FieldInfo { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets the FieldInfo got by reflection</div></div>",2789:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2789\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> InteropAccessMode AccessMode { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets the InteropAccessMode</div></div>",2790:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2790\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> IsStatic { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets a value indicating whether the described property is static.</div></div>",2791:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2791\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public string</span> Name { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets the name of the property</div></div>",2792:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2792\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> IsConst { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets a value indicating whether this instance is a constant</div></div>",2793:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2793\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> IsReadonly { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets a value indicating whether this instance is readonly</div></div>",2795:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2795\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">object</span> m_ConstValue</div></div></div>",2796:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2796\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Func&lt;<span class=\"SHKeyword\">object</span>, <span class=\"SHKeyword\">object</span>&gt; m_OptimizedGetter</div></div></div>",2798:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2798\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> FieldMemberDescriptor TryCreateIfVisible(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">FieldInfo&nbsp;</td><td class=\"PName last\">fi,</td></tr><tr><td class=\"PType first\">InteropAccessMode&nbsp;</td><td class=\"PName last\">accessMode</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Tries to create a new StandardUserDataFieldDescriptor, returning null in case the field is not visible to script code.</div></div>",2799:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2799\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> FieldMemberDescriptor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">FieldInfo&nbsp;</td><td class=\"PName last\">fi,</td></tr><tr><td class=\"PType first\">InteropAccessMode&nbsp;</td><td class=\"PName last\">accessMode</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Initializes a new instance of the PropertyMemberDescriptor class.</div></div>",2800:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2800\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> DynValue GetValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the value of the property</div></div>",2801:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2801\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">internal void</span> OptimizeGetter()</div></div></div>",2802:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2802\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> SetValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">v</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the value of the property</div></div>",2804:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2804\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> MemberDescriptorAccess MemberAccess { <span class=\"SHKeyword\">get</span> }</div></div><div class=\"TTSummary\">Gets the types of access supported by this member</div></div>",2806:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2806\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> IOptimizableDescriptor.Optimize()</div></div></div>",2807:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2807\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> PrepareForWiring(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Table&nbsp;</td><td class=\"PName last\">t</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Prepares the descriptor for hard-wiring.&nbsp; The descriptor fills the passed table with all the needed data for hardwire generators to generate the appropriate code.</div></div>"});