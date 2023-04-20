﻿NDSummary.OnToolTipsLoaded("File:Plugins/MoonSharp/Interpreter/Interop/CustomConvertersCollection.cs",{3151:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3151\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;Interop.</span>&#8203;CustomConvertersCollection</div></div></div><div class=\"TTSummary\">A collection of custom converters between MoonSharp types and CLR types.&nbsp; If a converter function is not specified or returns null, the standard conversion path applies.</div></div>",3153:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3153\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private</span> Dictionary&lt;Type, Func&lt;DynValue, <span class=\"SHKeyword\">object</span>&gt;&gt;[] m_Script2Clr</div></div></div>",3154:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3154\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private</span> Dictionary&lt;Type, Func&lt;Script, <span class=\"SHKeyword\">object</span>, DynValue&gt;&gt; m_Clr2Script</div></div></div>",3156:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3156\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">internal</span> CustomConvertersCollection()</div></div></div>",3157:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3157\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> SetScriptToClrCustomConversion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataType&nbsp;</td><td class=\"PName\">scriptDataType,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName\">clrDataType,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Func&lt;DynValue, <span class=\"SHKeyword\">object</span>&gt;&nbsp;</td><td class=\"PName\">converter</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets a custom converter from a script data type to a CLR data type. Set null to remove a previous custom converter.</div></div>",3158:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3158\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> Func&lt;DynValue, <span class=\"SHKeyword\">object</span>&gt; GetScriptToClrCustomConversion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataType&nbsp;</td><td class=\"PName last\">scriptDataType,</td></tr><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">clrDataType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets a custom converter from a script data type to a CLR data type, or null</div></div>",3159:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3159\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> SetClrToScriptCustomConversion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName\">clrDataType,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Func&lt;Script, <span class=\"SHKeyword\">object</span>, DynValue&gt;&nbsp;</td><td class=\"PName\">converter</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets a custom converter from a CLR data type. Set null to remove a previous custom converter.</div></div>",3160:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3160\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> SetClrToScriptCustomConversion&lt;T&gt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Func&lt;Script, T, DynValue&gt;&nbsp;</td><td class=\"PName\">converter</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets a custom converter from a CLR data type. Set null to remove a previous custom converter.</div></div>",3161:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3161\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> Func&lt;Script, <span class=\"SHKeyword\">object</span>, DynValue&gt; GetClrToScriptCustomConversion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">clrDataType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets a custom converter from a CLR data type, or null</div></div>",3162:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3162\" class=\"NDPrototype WideForm\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[Obsolete(&quot;This method is deprecated. Use the overloads accepting functions with a Script argument.&quot;)]</span></div><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> SetClrToScriptCustomConversion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName\">clrDataType,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Func&lt;<span class=\"SHKeyword\">object</span>, DynValue&gt;&nbsp;</td><td class=\"PName\">converter</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets a custom converter from a CLR data type. Set null to remove a previous custom converter.&nbsp; &lt;/summary&gt; &lt;param name=&quot;clrDataType&quot;&gt;The CLR data type.&lt;/param&gt; &lt;param name=&quot;converter&quot;&gt;The converter, or null.&lt;/param&gt;</div></div>",3163:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3163\" class=\"NDPrototype WideForm\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[Obsolete(&quot;This method is deprecated. Use the overloads accepting functions with a Script argument.&quot;)]</span></div><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> SetClrToScriptCustomConversion&lt;T&gt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Func&lt;T, DynValue&gt;&nbsp;</td><td class=\"PName\">converter</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets a custom converter from a CLR data type. Set null to remove a previous custom converter.</div></div>",3164:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3164\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> Clear()</div></div><div class=\"TTSummary\">Removes all converters.</div></div>"});