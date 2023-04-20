﻿NDSummary.OnToolTipsLoaded("File:Plugins/MoonSharp/Interpreter/Interop/StandardDescriptors/StandardEnumUserDataDescriptor.cs",{2864:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2864\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;Interop.</span>&#8203;StandardEnumUserDataDescriptor</div></div></div><div class=\"TTSummary\">Standard descriptor for Enum values</div></div>",2866:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2866\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> Type UnderlyingType { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets the underlying type of the enum.</div></div>",2867:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2867\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> IsUnsigned { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets a value indicating whether underlying type of the enum is unsigned.</div></div>",2868:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2868\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> IsFlags { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets a value indicating whether this instance describes a flags enumeration.</div></div>",2870:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2870\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Func&lt;<span class=\"SHKeyword\">object</span>, <span class=\"SHKeyword\">ulong</span>&gt; m_EnumToULong</div></div></div>",2871:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2871\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Func&lt;<span class=\"SHKeyword\">ulong</span>, <span class=\"SHKeyword\">object</span>&gt; m_ULongToEnum</div></div></div>",2872:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2872\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Func&lt;<span class=\"SHKeyword\">object</span>, <span class=\"SHKeyword\">long</span>&gt; m_EnumToLong</div></div></div>",2873:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2873\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Func&lt;<span class=\"SHKeyword\">long</span>, <span class=\"SHKeyword\">object</span>&gt; m_LongToEnum</div></div></div>",2875:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2875\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> StandardEnumUserDataDescriptor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName\">enumType,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">friendlyName</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>[]&nbsp;</td><td class=\"PName\">names</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>[]&nbsp;</td><td class=\"PName\">values</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span>,</td></tr><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName\">underlyingType</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Initializes a new instance of the StandardEnumUserDataDescriptor class.</div></div>",2876:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2876\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> FillMemberList(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>[]&nbsp;</td><td class=\"PName last\">names,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>[]&nbsp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Fills the member list.</div></div>",2877:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2877\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> AddEnumMethod(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">name,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">dynValue</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adds an enum method to the object</div></div>",2878:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2878\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private long</span> GetValueSigned(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">dv</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the value of the enum as a long</div></div>",2879:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2879\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private ulong</span> GetValueUnsigned(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">dv</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the value of the enum as a ulong</div></div>",2880:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2880\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> DynValue CreateValueSigned(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">long</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates an enum value from a long</div></div>",2881:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2881\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> DynValue CreateValueUnsigned(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">ulong</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates an enum value from a ulong</div></div>",2882:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2882\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private void</span> CreateSignedConversionFunctions()</div></div><div class=\"TTSummary\">Creates conversion functions for signed enums</div></div>",2883:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2883\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private void</span> CreateUnsignedConversionFunctions()</div></div><div class=\"TTSummary\">Creates conversion functions for unsigned enums</div></div>",2884:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2884\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> DynValue PerformBinaryOperationS(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">funcName,</td></tr><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">ctx,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args,</td></tr><tr><td class=\"PType first\">Func&lt;<span class=\"SHKeyword\">long</span>, <span class=\"SHKeyword\">long</span>, DynValue&gt;&nbsp;</td><td class=\"PName last\">operation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2885:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2885\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> DynValue PerformBinaryOperationU(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">funcName,</td></tr><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">ctx,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args,</td></tr><tr><td class=\"PType first\">Func&lt;<span class=\"SHKeyword\">ulong</span>, <span class=\"SHKeyword\">ulong</span>, DynValue&gt;&nbsp;</td><td class=\"PName last\">operation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2886:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2886\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> DynValue PerformBinaryOperationS(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">funcName,</td></tr><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">ctx,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args,</td></tr><tr><td class=\"PType first\">Func&lt;<span class=\"SHKeyword\">long</span>, <span class=\"SHKeyword\">long</span>, <span class=\"SHKeyword\">long</span>&gt;&nbsp;</td><td class=\"PName last\">operation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2887:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2887\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> DynValue PerformBinaryOperationU(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">funcName,</td></tr><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">ctx,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args,</td></tr><tr><td class=\"PType first\">Func&lt;<span class=\"SHKeyword\">ulong</span>, <span class=\"SHKeyword\">ulong</span>, <span class=\"SHKeyword\">ulong</span>&gt;&nbsp;</td><td class=\"PName last\">operation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2888:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2888\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> DynValue PerformUnaryOperationS(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">funcName,</td></tr><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">ctx,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args,</td></tr><tr><td class=\"PType first\">Func&lt;<span class=\"SHKeyword\">long</span>, <span class=\"SHKeyword\">long</span>&gt;&nbsp;</td><td class=\"PName last\">operation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2889:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2889\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> DynValue PerformUnaryOperationU(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">funcName,</td></tr><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">ctx,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args,</td></tr><tr><td class=\"PType first\">Func&lt;<span class=\"SHKeyword\">ulong</span>, <span class=\"SHKeyword\">ulong</span>&gt;&nbsp;</td><td class=\"PName last\">operation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2890:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2890\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal</span> DynValue Callback_Or(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">ctx,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2891:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2891\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal</span> DynValue Callback_And(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">ctx,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2892:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2892\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal</span> DynValue Callback_Xor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">ctx,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2893:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2893\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal</span> DynValue Callback_BwNot(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">ctx,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2894:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2894\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal</span> DynValue Callback_HasAll(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">ctx,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2895:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2895\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal</span> DynValue Callback_HasAny(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptExecutionContext&nbsp;</td><td class=\"PName last\">ctx,</td></tr><tr><td class=\"PType first\">CallbackArguments&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",2896:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2896\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public override bool</span> IsTypeCompatible(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">type,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Determines whether the specified object is compatible with the specified type.</div></div>",2897:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2897\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public override</span> DynValue MetaIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName last\">script,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">metaname</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets a &quot;meta&quot; operation on this userdata.&nbsp; In this specific case, only the concat operator is supported, only on flags enums and it implements the \'or\' operator.</div></div>"});