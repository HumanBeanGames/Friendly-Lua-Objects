﻿NDSummary.OnToolTipsLoaded("File:Plugins/MoonSharp/Interpreter/Errors/ScriptRuntimeException.cs",{1769:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1769\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.</span>&#8203;ScriptRuntimeException</div></div></div><div class=\"TTSummary\">Exception for all runtime errors. In addition to constructors, it offers a lot of static methods generating more &quot;standard&quot; Lua errors.</div></div>",1771:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1771\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> ScriptRuntimeException(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Exception&nbsp;</td><td class=\"PName last\">ex</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Initializes a new instance of the ScriptRuntimeException class.</div></div>",1772:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1772\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> ScriptRuntimeException(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ScriptRuntimeException&nbsp;</td><td class=\"PName last\">ex</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Initializes a new instance of the ScriptRuntimeException class.</div></div>",1773:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1773\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> ScriptRuntimeException(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">message</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Initializes a new instance of the ScriptRuntimeException class.</div></div>",1774:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1774\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> ScriptRuntimeException(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">format,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">params</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">object</span>[]&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Initializes a new instance of the ScriptRuntimeException class.</div></div>",1775:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1775\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException ArithmeticOnNonNumber(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName\">l,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName\">r</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that an arithmetic operation was attempted on non-numbers</div></div>",1776:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1776\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException ConcatOnNonString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">l,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">r</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that a concat operation was attempted on non-strings</div></div>",1777:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1777\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException LenOnInvalidType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">r</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that a len operator was applied on an invalid operand</div></div>",1778:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1778\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException CompareInvalidType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">l,</td></tr><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">r</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that a comparison operator was applied on an invalid combination of operand types</div></div>",1779:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1779\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException BadArgument(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">argNum,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">funcName,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">message</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that a function was called with a bad argument</div></div>",1780:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1780\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException BadArgumentUserData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">argNum,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">funcName,</td></tr><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">expected,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">got,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">allowNil</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that a function was called with a bad userdata argument</div></div>",1781:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1781\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException BadArgument(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">argNum,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">funcName,</td></tr><tr><td class=\"PType first\">DataType&nbsp;</td><td class=\"PName last\">expected,</td></tr><tr><td class=\"PType first\">DataType&nbsp;</td><td class=\"PName last\">got,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">allowNil</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that a function was called with a bad argument</div></div>",1782:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1782\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException BadArgument(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">argNum,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">funcName,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">expected,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">got,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">allowNil</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that a function was called with a bad argument</div></div>",1783:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1783\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException BadArgumentNoValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">argNum,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">funcName,</td></tr><tr><td class=\"PType first\">DataType&nbsp;</td><td class=\"PName last\">expected</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that a function was called with no value when a value was required.&nbsp; This function creates a message like &quot;bad argument #xxx to \'yyy\' (zzz expected, got no value)&quot; while BadArgumentValueExpected creates a message like &quot;bad argument #xxx to \'yyy\' (value expected)&quot;</div></div>",1784:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1784\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException BadArgumentIndexOutOfRange(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">funcName,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">argNum</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that an out of range index was specified</div></div>",1785:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1785\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException BadArgumentNoNegativeNumbers(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">argNum,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">funcName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that a function was called with a negative number when a positive one was expected.</div></div>",1786:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1786\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException BadArgumentValueExpected(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">argNum,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">funcName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that a function was called with no value when a value was required.&nbsp; This function creates a message like &quot;bad argument #xxx to \'yyy\' (value expected)&quot; while BadArgumentNoValue creates a message like &quot;bad argument #xxx to \'yyy\' (zzz expected, got no value)&quot;</div></div>",1787:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1787\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException IndexType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DynValue&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that an invalid attempt to index the specified object was made</div></div>",1788:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1788\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException LoopInIndex()</div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that a loop was detected when performing __index over metatables.</div></div>",1789:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1789\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException LoopInNewIndex()</div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that a loop was detected when performing __newindex over metatables.</div></div>",1790:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1790\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException LoopInCall()</div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that a loop was detected when performing __call over metatables.</div></div>",1791:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1791\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException TableIndexIsNil()</div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that a table indexing operation used nil as the key.</div></div>",1792:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1792\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException TableIndexIsNaN()</div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that a table indexing operation used a NaN as the key.</div></div>",1793:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1793\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException ConvertToNumberFailed(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">stage</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that a conversion to number failed.</div></div>",1794:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1794\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException ConvertObjectFailed(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that a conversion of a CLR type to a Lua type has failed.</div></div>",1795:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1795\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException ConvertObjectFailed(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataType&nbsp;</td><td class=\"PName last\">t</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that a conversion of a Lua type to a CLR type has failed.</div></div>",1796:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1796\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException ConvertObjectFailed(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataType&nbsp;</td><td class=\"PName last\">t,</td></tr><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">t2</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that a constrained conversion of a Lua type to a CLR type has failed.</div></div>",1797:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1797\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException UserDataArgumentTypeMismatch(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataType&nbsp;</td><td class=\"PName last\">t,</td></tr><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">clrType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that a userdata of a specific CLR type was expected and a non-userdata type was passed.</div></div>",1798:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1798\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException UserDataMissingField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">typename,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">fieldname</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that an attempt to index an invalid member of a userdata was done.</div></div>",1799:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1799\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException CannotResumeNotSuspended(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">CoroutineState&nbsp;</td><td class=\"PName last\">state</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that an attempt resume a coroutine in an invalid state was done.</div></div>",1800:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1800\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException CannotYield()</div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that an attempt to yield across a CLR boundary was made.</div></div>",1801:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1801\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException CannotYieldMain()</div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that an attempt to yield from the main coroutine was made.</div></div>",1802:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1802\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException AttemptToCallNonFunc(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataType&nbsp;</td><td class=\"PName\">type,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">debugText</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that an attempt to call a non-function was made</div></div>",1803:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1803\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException AccessInstanceMemberOnStatics(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IMemberDescriptor&nbsp;</td><td class=\"PName last\">desc</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that an attempt to access a non-static member from a static userdata was made</div></div>",1804:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1804\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> ScriptRuntimeException AccessInstanceMemberOnStatics(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IUserDataDescriptor&nbsp;</td><td class=\"PName last\">typeDescr,</td></tr><tr><td class=\"PType first\">IMemberDescriptor&nbsp;</td><td class=\"PName last\">desc</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Creates a ScriptRuntimeException with a predefined error message specifying that an attempt to access a non-static member from a static userdata was made</div></div>",1805:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1805\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override void</span> Rethrow()</div></div><div class=\"TTSummary\">Rethrows this instance if</div></div>"});