﻿NDSummary.OnToolTipsLoaded("CSharpClass:MoonSharp.Interpreter.Debugging.SourceRef",{1531:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1531\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">MoonSharp.&#8203;Interpreter.&#8203;Debugging.</span>&#8203;SourceRef</div></div></div><div class=\"TTSummary\">Class representing a reference to source code interval</div></div>",1533:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1533\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> IsClrLocation { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets a value indicating whether this location is inside CLR .</div></div>",1534:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1534\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public int</span> SourceIdx { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets the index of the source.</div></div>",1535:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1535\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public int</span> FromChar { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets from which column the source code ref starts</div></div>",1536:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1536\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public int</span> ToChar { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets to which column the source code ref ends</div></div>",1537:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1537\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public int</span> FromLine { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets from which line the source code ref starts</div></div>",1538:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1538\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public int</span> ToLine { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets to which line the source code ref ends</div></div>",1539:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1539\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> IsStepStop { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets a value indicating whether this instance is a stop &quot;step&quot; in source mode</div></div>",1541:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1541\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> Breakpoint</div></div><div class=\"TTSummary\">Gets a value indicating whether this instance is a breakpoint</div></div>",1543:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1543\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> CannotBreakpoint { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div><div class=\"TTSummary\">Gets a value indicating whether this instance cannot be set as a breakpoint</div></div>",1545:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1545\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">internal static</span> SourceRef GetClrLocation()</div></div></div>",1546:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1546\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> SourceRef(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SourceRef&nbsp;</td><td class=\"PName last\">src,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isStepStop</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1547:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1547\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> SourceRef(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sourceIdx,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">from,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">to,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">fromline,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">toline,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isStepStop</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1548:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1548\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public override string</span> ToString()</div></div><div class=\"TTSummary\">Returns a System.String that represents this instance.</div></div>",1549:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1549\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal int</span> GetLocationDistance(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sourceIdx,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">line,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">col</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1550:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1550\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> IncludesLocation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sourceIdx,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">line,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">col</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets whether the source ref includes the specified location</div></div>",1551:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1551\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public</span> SourceRef SetNoBreakPoint()</div></div><div class=\"TTSummary\">Sets the CannotBreakpoint flag.</div></div>",1552:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1552\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public string</span> FormatLocation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Script&nbsp;</td><td class=\"PName\">script,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">forceClassicFormat</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">false</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Formats the location according to script preferences</div></div>"});