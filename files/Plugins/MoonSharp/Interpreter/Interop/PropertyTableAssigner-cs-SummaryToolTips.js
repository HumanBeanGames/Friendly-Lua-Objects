﻿NDSummary.OnToolTipsLoaded("File:Plugins/MoonSharp/Interpreter/Interop/PropertyTableAssigner.cs",{3049:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3049\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;Interop.</span>&#8203;PropertyTableAssigner&#8203;<span class=\"TemplateSignature\">&lt;T&gt;</span></div></div></div><div class=\"TTSummary\">Utility class which may be used to set properties on an object of type T, from values contained in a Lua table.&nbsp; Properties must be decorated with the MoonSharpPropertyAttribute.&nbsp; This is a generic version of PropertyTableAssigner.</div></div>",3051:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3051\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">PropertyTableAssigner m_InternalAssigner</div></div></div>",3053:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3053\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> PropertyTableAssigner(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">params</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>[]&nbsp;</td><td class=\"PName last\">expectedMissingProperties</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Initializes a new instance of the PropertyTableAssigner{T} class.</div></div>",3054:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3054\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> AddExpectedMissingProperty(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">name</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adds an expected missing property, that is an expected field in the table with no corresponding property in the object.</div></div>",3055:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3055\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> AssignObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">T&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\">Table&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Assigns properties from tables to an object.</div></div>",3056:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3056\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> PropertyTableAssigner GetTypeUnsafeAssigner()</div></div><div class=\"TTSummary\">Gets the type-unsafe assigner corresponding to this object.</div></div>",3057:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3057\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> SetSubassignerForType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">propertyType,</td></tr><tr><td class=\"PType first\">IPropertyTableAssigner&nbsp;</td><td class=\"PName last\">assigner</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the subassigner for the given type. Pass null to remove usage of subassigner for the given type.</div></div>",3058:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3058\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> SetSubassigner&lt;SubassignerType&gt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">PropertyTableAssigner&lt;SubassignerType&gt;&nbsp;</td><td class=\"PName last\">assigner</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the subassigner for the given type</div></div>",3059:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3059\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> IPropertyTableAssigner.AssignObjectUnchecked(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">o,</td></tr><tr><td class=\"PType first\">Table&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Assigns the properties of the specified object without checking the type.</div></div>",3060:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3060\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;Interop.</span>&#8203;PropertyTableAssigner</div></div></div><div class=\"TTSummary\">Utility class which may be used to set properties on an object from values contained in a Lua table.&nbsp; Properties must be decorated with the MoonSharpPropertyAttribute.&nbsp; See PropertyTableAssigner{T} for a generic compile time type-safe version.</div></div>",3062:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3062\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Type m_Type</div></div></div>",3063:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3063\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Dictionary&lt;<span class=\"SHKeyword\">string</span>, PropertyInfo&gt; m_PropertyMap</div></div></div>",3064:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3064\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Dictionary&lt;Type, IPropertyTableAssigner&gt; m_SubAssigners</div></div></div>",3066:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3066\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> PropertyTableAssigner(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">Type&nbsp;</td><td class=\"PName last\">type,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">params</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>[]&nbsp;</td><td class=\"PName last\">expectedMissingProperties</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Initializes a new instance of the PropertyTableAssigner class.</div></div>",3067:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3067\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> AddExpectedMissingProperty(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">name</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adds an expected missing property, that is an expected field in the table with no corresponding property in the object.</div></div>",3068:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3068\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private bool</span> TryAssignProperty(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">name,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",3069:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3069\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> AssignProperty(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">name,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",3070:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3070\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> AssignObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\">Table&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Assigns properties from tables to an object.</div></div>",3071:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3071\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> SetSubassignerForType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">propertyType,</td></tr><tr><td class=\"PType first\">IPropertyTableAssigner&nbsp;</td><td class=\"PName last\">assigner</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the subassigner for the given type. Pass null to remove usage of subassigner for the given type.</div></div>",3072:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3072\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> IPropertyTableAssigner.AssignObjectUnchecked(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\">Table&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Assigns the properties of the specified object without checking the type.</div></div>",3073:"<div class=\"NDToolTip TInterface LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3073\"><div class=\"CPEntry TInterface Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">interface</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;Interop.</span>&#8203;IPropertyTableAssigner</div></div></div><div class=\"TTSummary\">Common interface for property assigners - basically used for sub-assigners</div></div>",3075:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3075\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> AssignObjectUnchecked(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">o,</td></tr><tr><td class=\"PType first\">Table&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Assigns the properties of the specified object without checking the type.</div></div>"});